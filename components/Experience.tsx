"use client"

import { experiences } from '@/data'
import { SectionTitle } from '@/elements'
import { Briefcase, ExternalLink } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/80">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="Work" highlightText="Experience" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium flex items-center gap-2">
                      {exp.company}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
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
