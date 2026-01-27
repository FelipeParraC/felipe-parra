"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Briefcase, CheckCircle } from "lucide-react"
import { SectionTitle, TextWithIcon } from '@/elements'
import { aboutDescription, aboutImage, personalInfo } from '@/data'



export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/80">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="About" highlightText="Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <Image
                src={ aboutImage }
                alt="Felipe Parra"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-justify">
            {aboutDescription.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <TextWithIcon icon={Mail} label="Email" value={personalInfo.email} />
              <TextWithIcon icon={Phone} label="Phone" value={personalInfo.phone} />
              <TextWithIcon icon={MapPin} label="Location" value={personalInfo.location} />
              <TextWithIcon icon={Briefcase} label="Role" value={personalInfo.role} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
