import { certifications } from '@/data'
import { CertificationCard, SectionTitle } from '@/elements'



export function Certifications() {
  return (
    <section className="py-20 px-4 bg-secondary/80">
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

        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex gap-5 snap-x snap-mandatory sm:grid sm:gap-5 sm:snap-none sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`min-w-[85vw] snap-start sm:min-w-0 ${
                index % 3 === 1 ? "lg:translate-y-10" : index % 3 === 2 ? "sm:translate-y-6 lg:translate-y-20" : ""
              } animate-reveal`}
            >
              <CertificationCard certification={cert} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
