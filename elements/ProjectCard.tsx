import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/interfaces/types"
import { Button } from '@/components/ui'

interface ProjectCardProps {
  project: Project
  reverse?: boolean
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <div
      className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
