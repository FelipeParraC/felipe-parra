import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"
import type { PlatziCertification } from "@/interfaces/types"

interface PlatziCertificationCardProps {
  certification: PlatziCertification
}

const PLATZI_IMAGE_POSITION = "50% 28%"

export function PlatziCertificationCard({ certification }: PlatziCertificationCardProps) {
  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-h-[22.75rem] overflow-visible rounded-[28px] border border-border bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:border-[#98ff71]/35 hover:shadow-xl hover:shadow-[#98ff71]/8 sm:min-h-[25.5rem]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-linear-to-br from-[#08161a] via-[#0b1826] to-[#071018]">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-r from-[#98ff71]/16 via-[#98ff71]/6 to-primary/10 blur-2xl" />
        <div className="absolute -left-10 top-2 h-32 w-32 rounded-full bg-[#98ff71]/12 blur-3xl" />
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-[#071018]/8 to-transparent sm:h-12 sm:from-[#071018]/18 sm:via-[#071018]/4" />
        <div className="relative h-full overflow-hidden rounded-[26px]">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={certification.name}
            fill
            sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc((100vw - 5rem) / 2), calc((100vw - 8rem) / 3)"
            className="object-cover object-center drop-shadow-[0_18px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.05] md:object-contain md:p-2 md:group-hover:scale-[1.07] md:group-hover:-rotate-1"
            style={{ objectPosition: PLATZI_IMAGE_POSITION }}
          />
        </div>

      </div>

      <div className="absolute inset-x-0 -bottom-24 z-10 flex justify-center px-4 sm:inset-x-4 sm:bottom-4 sm:block sm:px-0">
        <div className="w-[90%] rounded-[24px] bg-[linear-gradient(180deg,rgba(90,99,108,0.64),rgba(33,39,47,0.76))] px-4 py-3.5 shadow-[0_22px_44px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:w-full sm:max-w-[19rem] sm:rounded-[22px] sm:bg-[linear-gradient(180deg,rgba(22,31,41,0.72),rgba(10,16,24,0.82))]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#98ff71]/20 bg-[#98ff71]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#bdfda1]">
              <Award className="h-3.5 w-3.5" />
              Credential
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {certification.date}
            </span>
          </div>

          <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-[#d9ffc8] sm:text-lg">
            {certification.name}
          </h3>

          <div className="mt-3 flex items-center justify-between gap-3 pt-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
              View Credential
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-white/55 transition-colors group-hover:text-[#98ff71]" />
          </div>
        </div>
      </div>
    </a>
  )
}
