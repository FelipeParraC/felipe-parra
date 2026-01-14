"use client"

import { projects } from '@/data'
import { ProjectCard, SectionTitle } from '@/elements'



export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="My" highlightText="Portfolio" />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
