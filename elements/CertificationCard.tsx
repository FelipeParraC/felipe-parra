import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Certification } from "@/interfaces/types"

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={certification.image || "/placeholder.svg"}
          alt={certification.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
              {certification.name}
            </h3>
            <p className="text-sm text-primary">{certification.institution}</p>
            <p className="text-xs text-muted-foreground mt-1">{certification.date}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
      </div>
    </a>
  )
}
