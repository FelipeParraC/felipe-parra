"use client"

import { useRef, useState } from "react"
import { certifications } from '@/data'
import { CertificationCard, CertificationPagination, SectionTitle } from '@/elements'

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const mobileTrackRef = useRef<HTMLDivElement | null>(null)
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([])
  const certificationsCount = certifications.length
  const isSingleCertification = certificationsCount === 1
  const hasPagination = certificationsCount > 1
  const desktopLayoutClassName =
    certificationsCount === 1
      ? "sm:mx-auto sm:max-w-xl sm:grid-cols-1"
      : certificationsCount === 2
        ? "sm:mx-auto sm:max-w-4xl sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3"

  function handleMobileSelect(index: number) {
    setActiveIndex(index)
    mobileCardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  function handleMobileScroll() {
    const track = mobileTrackRef.current
    if (!track) return

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

    setActiveIndex(closestIndex)
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

        <div className={`-mx-4 px-4 ${isSingleCertification ? "pb-8" : "pb-20"} sm:mx-0 sm:px-0 sm:pb-0`}>
          <div className={`overflow-visible ${isSingleCertification ? "pb-4" : "pb-10"} sm:pb-0`}>
            <div
              ref={mobileTrackRef}
              onScroll={handleMobileScroll}
              className={`no-scrollbar flex gap-5 pt-1 ${isSingleCertification ? "justify-center overflow-visible pb-4" : "snap-x snap-mandatory overflow-x-auto pb-12"} sm:grid sm:gap-5 sm:overflow-visible sm:pt-0 sm:pb-4 sm:snap-none ${desktopLayoutClassName}`}
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  ref={(node) => {
                    mobileCardRefs.current[index] = node
                  }}
                  className={`${isSingleCertification ? "w-full max-w-[29rem]" : "min-w-[85vw] snap-center"} ${isSingleCertification ? "pb-6" : "pb-20"} sm:min-w-0 sm:pb-0 ${
                    index % 3 === 1 ? "lg:translate-y-10" : index % 3 === 2 ? "sm:translate-y-6 lg:translate-y-20" : ""
                  } animate-reveal`}
                >
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>
          </div>

          <div className={`sm:hidden ${isSingleCertification ? "hidden" : ""}`}>
            <CertificationPagination
              total={certifications.length}
              activeIndex={activeIndex}
              onSelect={handleMobileSelect}
              className="-mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
