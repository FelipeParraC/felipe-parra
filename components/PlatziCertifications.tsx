"use client"

import { useRef, useState } from "react"
import { Sparkles } from "lucide-react"
import { platziCertifications } from "@/data"
import { CertificationPagination, PlatziCertificationCard, SectionTitle } from "@/elements"

export function PlatziCertifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const mobileTrackRef = useRef<HTMLDivElement | null>(null)
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([])

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
    <section className="relative overflow-visible px-4 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#98ff71]/28 to-transparent" />
      <div className="pointer-events-none absolute left-10 top-18 h-44 w-44 rounded-full bg-[#98ff71]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />

      <div className="mx-auto max-w-6xl animate-reveal">
        <SectionTitle preText="Platzi" highlightText="Certifications" />

        <div className="surface-platzi rounded-[34px] px-6 py-8 sm:px-8 md:px-10">
          <div className="relative z-10 mb-8 flex flex-col gap-5 border-b border-white/8 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#98ff71]/18 bg-[#98ff71]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bdfda1]">
                <Sparkles className="h-3.5 w-3.5" />
                Platzi Track
              </div>
              <h3 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Courses and certifications focused on practical software, AI, cloud, and automation learning.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-[15px]">
                These Platzi credentials reflect continuous study across modern engineering topics, with a focus on
                applied tools, technical execution, and hands-on professional growth.
              </p>
            </div>

            <div className="rounded-full border border-[#98ff71]/18 bg-[#98ff71]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#bdfda1]">
              {platziCertifications.length} credential{platziCertifications.length === 1 ? "" : "s"}
            </div>
          </div>

          <div className="-mx-4 px-4 pb-24 sm:mx-0 sm:px-0 sm:pb-16">
            <div className="overflow-visible pb-12 sm:pb-0">
              <div
                ref={mobileTrackRef}
                onScroll={handleMobileScroll}
                className="subtle-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pt-1 pb-14 sm:grid sm:gap-5 sm:overflow-visible sm:pt-0 sm:pb-4 sm:snap-none sm:grid-cols-2 lg:grid-cols-3"
              >
                {platziCertifications.map((certification, index) => (
                  <div
                    key={certification.id}
                    ref={(node) => {
                      mobileCardRefs.current[index] = node
                    }}
                    className={`min-w-[85vw] snap-center pb-24 sm:min-w-0 sm:pb-0 ${
                      index % 3 === 1 ? "lg:translate-y-8" : index % 3 === 2 ? "sm:translate-y-4 lg:translate-y-14" : ""
                    }`}
                  >
                    <PlatziCertificationCard certification={certification} />
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:hidden">
              <CertificationPagination
                total={platziCertifications.length}
                activeIndex={activeIndex}
                onSelect={handleMobileSelect}
                accentClassName="border-[#98ff71]/30 bg-[#98ff71]/10 text-[#bdfda1]"
                className="-mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
