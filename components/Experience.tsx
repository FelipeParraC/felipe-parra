import { experiences } from '@/data'
import { SectionTitle } from '@/elements'
import { Briefcase, ExternalLink } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/80">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="Work" highlightText="Experience" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="group relative animate-reveal overflow-hidden rounded-2xl border border-border bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {exp.role}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium inline-flex items-center gap-2 hover:underline"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 opacity-80" />
                      </a>
                    ) : (
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">{exp.company}</p>
                    )}
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="mb-5 leading-7 text-muted-foreground">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
