"use client"

import { certifications } from '@/data'
import { CertificationCard, SectionTitle } from '@/elements'



export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/80">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="My" highlightText="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
