'use client'

import { awsCertifications } from '@/data'
import { SectionTitle } from '@/elements'
import { AwsCertificationBadge } from '@/elements/AwsCertificationBadge'

const LEVEL_ORDER = [
  'specialty',
  'professional',
  'associate',
  'foundational',
] as const

const LEVEL_LABELS: Record<(typeof LEVEL_ORDER)[number], string> = {
  foundational: 'Foundational',
  associate: 'Associate',
  professional: 'Professional',
  specialty: 'Specialty',
}

export function AwsCertifications() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <SectionTitle preText='AWS' highlightText='Certifications' />

        <div className='space-y-16'>
          {LEVEL_ORDER.map((level) => {
            const certs = awsCertifications.filter(
              (cert) => cert.level === level
            )

            if (certs.length === 0) return null

            return (
              <div key={level} className='space-y-6'>
                <h3 className='text-center text-lg font-semibold text-muted-foreground uppercase tracking-wider'>
                  {LEVEL_LABELS[level]}
                </h3>

                <div className='flex flex-wrap justify-center gap-10'>
                  {certs.map((cert) => (
                    <AwsCertificationBadge
                      key={cert.name}
                      name={cert.name}
                      image={cert.image}
                      url={cert.url}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
