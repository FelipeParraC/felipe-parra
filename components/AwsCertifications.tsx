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

        <div className='space-y-10'>
          {LEVEL_ORDER.map((level) => {
            const certs = awsCertifications.filter(
              (cert) => cert.level === level
            )

            if (certs.length === 0) return null

            return (
              <div key={level} className='relative overflow-hidden rounded-[28px] border border-border bg-card/55 p-8 shadow-lg shadow-black/10'>
                <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]' />
                <div className='mb-8 flex flex-col items-center gap-3 text-center'>
                  <span className='rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary'>
                    AWS Track
                  </span>
                  <h3 className='text-2xl font-bold text-foreground'>
                    {LEVEL_LABELS[level]}
                  </h3>
                </div>

                <div className='flex flex-wrap justify-center gap-8'>
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
