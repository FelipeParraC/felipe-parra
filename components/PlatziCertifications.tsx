"use client"

import { useRef, useState } from "react"
import { Sparkles } from "lucide-react"
import { platziCertifications } from "@/data"
import { CertificationPagination, PlatziCertificationCard, SectionTitle } from "@/elements"

export function PlatziCertifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const mobileTrackRef = useRef<HTMLDivElement | null>(null)
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([])
  const certificationsCount = platziCertifications.length
  const isSingleCertification = certificationsCount === 1
  const hasPagination = certificationsCount > 1

  const desktopLayoutClassName =
    certificationsCount === 1
      ? "sm:justify-center"
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
    <section className={`relative overflow-visible px-4 ${hasPagination ? "pt-24 pb-0 sm:py-24" : "py-24"}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#98ff71]/28 to-transparent" />
      <div className="pointer-events-none absolute left-10 top-18 h-44 w-44 rounded-full bg-[#98ff71]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />

      <div className="mx-auto max-w-6xl animate-reveal">
        <SectionTitle
          preText="Platzi"
          highlightText="Certifications"
          highlightClassName="text-[#98ff71]"
          accentLineClassName="bg-[#98ff71]/45"
          accentTextClassName="text-[#bdfda1]/80"
          accentDotClassName="bg-[#98ff71]"
        />

        <div className="mb-8 rounded-[28px] border border-[#98ff71]/12 bg-card/55 px-6 py-5 shadow-lg shadow-black/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#98ff71]/18 bg-[#98ff71]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bdfda1]">
                <Sparkles className="h-3.5 w-3.5" />
                Platzi Track
              </div>
              <h3 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Courses and certifications focused on practical software, AI, cloud, and automation learning.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                These Platzi credentials reflect continuous study across modern engineering topics, with a focus on
                applied tools, technical execution, and hands-on professional growth.
              </p>
            </div>
            <div className="rounded-full border border-[#98ff71]/18 bg-[#98ff71]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#bdfda1]">
              {platziCertifications.length} credential{platziCertifications.length === 1 ? "" : "s"}
            </div>
          </div>
        </div>

        <div className={`-mx-4 px-4 ${isSingleCertification ? "pb-8" : "pb-20"} sm:mx-0 sm:px-0 sm:pb-0`}>
          <div className={`overflow-visible ${isSingleCertification ? "pb-4" : "pb-10"} sm:pb-0`}>
            <div
              ref={mobileTrackRef}
              onScroll={handleMobileScroll}
              className={`no-scrollbar flex gap-5 pt-1 ${isSingleCertification ? "justify-center overflow-visible pb-4" : "snap-x snap-mandatory overflow-x-auto pb-12"} ${isSingleCertification ? "sm:flex" : "sm:grid"} sm:gap-5 sm:overflow-visible sm:pt-0 sm:pb-4 sm:snap-none ${desktopLayoutClassName}`}
            >
              {platziCertifications.map((certification, index) => (
                <div
                  key={certification.id}
                  ref={(node) => {
                    mobileCardRefs.current[index] = node
                  }}
                  className={`${isSingleCertification ? "w-full max-w-[29rem] sm:mx-auto" : "min-w-[85vw] snap-center"} ${isSingleCertification ? "pb-6" : "pb-20"} sm:min-w-0 sm:pb-0 ${
                    index % 3 === 1 ? "lg:translate-y-10" : index % 3 === 2 ? "sm:translate-y-6 lg:translate-y-20" : ""
                  } animate-reveal`}
                >
                  <PlatziCertificationCard certification={certification} />
                </div>
              ))}
            </div>
          </div>
          <div className={`sm:hidden ${isSingleCertification ? "hidden" : ""}`}>
            <CertificationPagination
              total={platziCertifications.length}
              activeIndex={activeIndex}
              onSelect={handleMobileSelect}
              accentClassName="border-[#98ff71]/30 bg-[#98ff71]/10 text-[#bdfda1]"
              className="-mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
