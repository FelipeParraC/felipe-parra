"use client"

import { languages, skillCategories } from '@/data'
import { LanguageCard, ProgressBar, SectionTitle } from '@/elements'
import { Globe } from "lucide-react"



export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="My" highlightText="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}

          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <LanguageCard key={index} language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
