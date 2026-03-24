import { languages, skillCategories } from '@/data'
import { LanguageCard, ProgressBar, SectionTitle } from '@/elements'
import { Globe } from "lucide-react"



export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="My" highlightText="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 hover:-translate-y-1 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]" />
              <div className="mb-6 text-center">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">Core Stack</p>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 hover:-translate-y-1 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]" />
            <div className="mb-6 text-center">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">Communication</p>
              <h3 className="text-xl font-bold text-foreground mb-0 flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((language) => (
                <LanguageCard key={language.name} language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
