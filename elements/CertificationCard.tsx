import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"
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
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]" />
      <div className="relative overflow-hidden bg-linear-to-br from-[#08131f] via-[#0b1826] to-[#071018] px-4 pb-2 pt-5">
        <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative h-48">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={certification.name}
            fill
            className="object-contain p-1 drop-shadow-[0_18px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.07] group-hover:-rotate-1"
          />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            <Award className="h-3.5 w-3.5" />
            Certificate
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {certification.date}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {certification.name}
        </h3>
        <p className="mb-5 text-sm font-medium text-primary">{certification.institution}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/80 pt-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            View Credential
          </span>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
      </div>
    </a>
  )
}
