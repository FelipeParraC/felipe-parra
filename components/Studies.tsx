"use client"

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
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.degree}</h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
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
