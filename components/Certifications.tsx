"use client"

import { useEffect, useRef, useState } from "react"
import { certifications } from '@/data'
import { CertificationCard, CertificationPagination, SectionTitle } from '@/elements'

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const mobileTrackRef = useRef<HTMLDivElement | null>(null)
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([])
  const autoScrollFrameRef = useRef<number | null>(null)
  const autoResumeTimeoutRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number | null>(null)
  const isAutoScrollingRef = useRef(false)
  const singleLoopWidthRef = useRef(0)
  const certificationsCount = certifications.length
  const isSingleCertification = certificationsCount === 1
  const hasPagination = certificationsCount > 1
  const mobileCertifications = hasPagination ? [...certifications, ...certifications] : certifications
  const isAutoPlaying = isInView && !hasUserInteracted && !prefersReducedMotion && hasPagination && !isSingleCertification
  const desktopLayoutClassName =
    certificationsCount === 1
      ? "sm:mx-auto sm:max-w-xl sm:grid-cols-1"
      : certificationsCount === 2
        ? "sm:mx-auto sm:max-w-4xl sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3"

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    return () => {
      if (autoResumeTimeoutRef.current !== null) {
        window.clearTimeout(autoResumeTimeoutRef.current)
        autoResumeTimeoutRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isSingleCertification || !hasPagination) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [hasPagination, isSingleCertification])

  useEffect(() => {
    const track = mobileTrackRef.current
    const duplicateStart = mobileCardRefs.current[certificationsCount]
    if (!track || !duplicateStart || !isAutoPlaying) return

    singleLoopWidthRef.current = duplicateStart.offsetLeft

    if (!singleLoopWidthRef.current) return

    const speedPxPerSecond = 110

    const step = (now: number) => {
      const previous = lastFrameTimeRef.current ?? now
      const delta = now - previous
      lastFrameTimeRef.current = now
      isAutoScrollingRef.current = true

      track.scrollLeft += (speedPxPerSecond * delta) / 1000

      if (track.scrollLeft >= singleLoopWidthRef.current) {
        track.scrollLeft -= singleLoopWidthRef.current
      }

      autoScrollFrameRef.current = window.requestAnimationFrame(step)
    }

    lastFrameTimeRef.current = null
    autoScrollFrameRef.current = window.requestAnimationFrame(step)

    return () => {
      if (autoScrollFrameRef.current !== null) {
        window.cancelAnimationFrame(autoScrollFrameRef.current)
        autoScrollFrameRef.current = null
      }
      lastFrameTimeRef.current = null
      isAutoScrollingRef.current = false
    }
  }, [certificationsCount, isAutoPlaying])

  function scheduleAutoResume() {
    if (prefersReducedMotion || isSingleCertification || !hasPagination) return

    if (autoResumeTimeoutRef.current !== null) {
      window.clearTimeout(autoResumeTimeoutRef.current)
    }

    autoResumeTimeoutRef.current = window.setTimeout(() => {
      setHasUserInteracted(false)
      autoResumeTimeoutRef.current = null
    }, 5000)
  }

  function stopAutoScroll(shouldResume = true) {
    setHasUserInteracted(true)
    if (autoScrollFrameRef.current !== null) {
      window.cancelAnimationFrame(autoScrollFrameRef.current)
      autoScrollFrameRef.current = null
    }
    lastFrameTimeRef.current = null
    isAutoScrollingRef.current = false

    if (shouldResume) {
      scheduleAutoResume()
    } else if (autoResumeTimeoutRef.current !== null) {
      window.clearTimeout(autoResumeTimeoutRef.current)
      autoResumeTimeoutRef.current = null
    }
  }

  function handleMobileSelect(index: number) {
    stopAutoScroll()
    setActiveIndex(index)

    const track = mobileTrackRef.current
    if (!track) return

    const matchingCards = mobileCardRefs.current.filter((_, cardIndex) => cardIndex % certificationsCount === index)
    if (matchingCards.length === 0) return

    const trackCenter = track.scrollLeft + track.clientWidth / 2
    const targetCard = matchingCards.reduce((closest, card) => {
      if (!card) return closest
      if (!closest) return card

      const closestCenter = closest.offsetLeft + closest.clientWidth / 2
      const currentCenter = card.offsetLeft + card.clientWidth / 2

      return Math.abs(currentCenter - trackCenter) < Math.abs(closestCenter - trackCenter) ? card : closest
    }, matchingCards[0])

    targetCard?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  function handleMobileScroll() {
    const track = mobileTrackRef.current
    if (!track) return

    if (hasPagination && singleLoopWidthRef.current > 0) {
      if (track.scrollLeft >= singleLoopWidthRef.current) {
        track.scrollLeft -= singleLoopWidthRef.current
      } else if (track.scrollLeft < 0) {
        track.scrollLeft += singleLoopWidthRef.current
      }
    }

    if (!isAutoScrollingRef.current && !hasUserInteracted && track.scrollLeft > 8) {
      stopAutoScroll()
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2
    let closestIndex = 0
    let smallestDistance = Number.POSITIVE_INFINITY

    mobileCardRefs.current.forEach((card, index) => {
      if (!card) return

      const cardCenter = card.offsetLeft + card.clientWidth / 2
      const distance = Math.abs(cardCenter - trackCenter)

      if (distance < smallestDistance) {
        smallestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex % certificationsCount)
  }

  function handleUserInteraction() {
    stopAutoScroll()
  }

  function assignMobileCardRef(index: number, node: HTMLDivElement | null) {
    mobileCardRefs.current[index] = node
  }

  return (
    <section className={`relative overflow-visible bg-secondary/80 px-4 ${hasPagination ? "pt-20 pb-0 sm:py-20" : "py-20"}`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="Other" highlightText="Certifications" />

        <div className="mb-8 rounded-[28px] border border-border bg-card/55 px-6 py-5 shadow-lg shadow-black/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                Continuing Education
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                A curated selection of additional certifications, technical courses, and academic achievements.
              </p>
            </div>
            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary">
              {certifications.length} credentials
            </div>
          </div>
        </div>

        <div ref={sectionRef} className={`relative z-30 ${isSingleCertification ? "pb-8" : "pb-20"} sm:hidden`}>
          <div className={`relative left-1/2 w-screen -translate-x-1/2 overflow-visible px-4 ${isSingleCertification ? "pb-4" : "pb-10"} sm:left-auto sm:w-auto sm:translate-x-0 sm:px-0 sm:pb-0`}>
            <div className="relative overflow-visible">
              <div
                ref={mobileTrackRef}
                onScroll={handleMobileScroll}
                onPointerDown={handleUserInteraction}
                onTouchStart={handleUserInteraction}
                onWheel={handleUserInteraction}
                className={`no-scrollbar relative z-30 flex gap-5 pt-1 ${isSingleCertification ? "justify-center overflow-visible pb-4" : `overflow-x-auto pb-12 ${isAutoPlaying ? "snap-none" : "snap-x snap-mandatory"}`}`}
              >
                {mobileCertifications.map((cert, index) => (
                  <div
                    key={`${cert.name}-${index}`}
                    ref={(node) => {
                      assignMobileCardRef(index, node)
                    }}
                    className={`${isSingleCertification ? "w-full max-w-[29rem]" : "min-w-[calc(100vw-2rem)] snap-center"} ${isSingleCertification ? "pb-6" : "pb-20"} sm:min-w-0 sm:pb-0 ${
                      index % 3 === 1 ? "lg:translate-y-10" : index % 3 === 2 ? "sm:translate-y-6 lg:translate-y-20" : ""
                    } animate-reveal`}
                  >
                    <CertificationCard certification={cert} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative z-30 sm:hidden ${isSingleCertification ? "hidden" : ""}`}>
            <CertificationPagination
              total={certifications.length}
              activeIndex={activeIndex}
              onSelect={handleMobileSelect}
              className="-mt-1"
            />
          </div>
        </div>

        <div className="hidden sm:block">
          <div className={`overflow-visible ${isSingleCertification ? "pb-4" : "pb-10"} sm:pb-0`}>
            <div
              className={`sm:grid sm:gap-5 sm:overflow-visible sm:pt-0 sm:pb-4 sm:snap-none ${desktopLayoutClassName}`}
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`sm:min-w-0 sm:pb-0 ${
                    index % 3 === 1 ? "lg:translate-y-10" : index % 3 === 2 ? "sm:translate-y-6 lg:translate-y-20" : ""
                  } animate-reveal`}
                >
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
