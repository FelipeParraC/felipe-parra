import { education } from '@/data'
import { SectionTitle } from '@/elements'
import { GraduationCap } from "lucide-react"



export function Studies() {
  return (
    <section id="studies" className="py-20 px-4 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="My" highlightText="Studies" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="group relative animate-reveal overflow-hidden rounded-2xl border border-border bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]" />
                    <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <div className="rounded-lg bg-primary/10 p-2.5">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{item.degree}</h3>
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary/80">{item.institution}</p>
                    {item.description && <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
