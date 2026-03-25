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
    <section className='relative overflow-hidden py-24 px-4'>
      <div className='pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow' />
      <div className='pointer-events-none absolute right-10 top-24 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow' />
      <div className='max-w-6xl mx-auto animate-reveal'>
        <SectionTitle preText='AWS' highlightText='Certifications' />

        <div className='surface-premium rounded-[36px] px-6 py-8 sm:px-8 md:px-10'>
          <div className='space-y-12'>
            {LEVEL_ORDER.map((level) => {
              const certs = awsCertifications.filter((cert) => cert.level === level)

              if (certs.length === 0) return null

              return (
                <div key={level} className='animate-reveal space-y-8 text-center'>
                  <div className='mx-auto flex max-w-3xl flex-col items-center gap-4 border-b border-border/80 pb-6'>
                    <div className='flex flex-col items-center gap-3'>
                      <span className='w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary'>
                        AWS Track
                      </span>
                      <h3 className='text-2xl font-bold text-foreground sm:text-3xl'>
                        {LEVEL_LABELS[level]}
                      </h3>
                      <div className='rounded-full border border-border bg-card/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
                        {certs.length} badge{certs.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-wrap justify-center gap-6 xl:gap-8'>
                    {certs.map((cert, index) => (
                      <AwsCertificationBadge
                        key={cert.name}
                        name={cert.name}
                        image={cert.image}
                        url={cert.url}
                        delayClass={index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : ''}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
