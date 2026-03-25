import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"

interface ShowcaseCertificationItem {
  name: string
  date: string
  image: string
  url: string
  institution?: string
}

interface ShowcaseCertificationCardProps {
  certification: ShowcaseCertificationItem
  theme?: "platzi" | "default"
  imagePosition?: string
}

const themeClasses = {
  platzi: {
    hoverBorder: "hover:border-[#98ff71]/35 hover:shadow-[#98ff71]/8",
    topWash: "from-[#98ff71]/16 via-[#98ff71]/6 to-primary/10",
    leftGlow: "bg-[#98ff71]/12",
    rightGlow: "bg-primary/10",
    chip: "border-[#98ff71]/20 bg-[#98ff71]/10 text-[#bdfda1]",
    hoverText: "group-hover:text-[#d9ffc8]",
    iconHover: "group-hover:text-[#98ff71]",
    institution: "text-[#bdfda1]",
  },
  default: {
    hoverBorder: "hover:border-primary/50 hover:shadow-primary/10",
    topWash: "from-primary/20 via-primary/8 to-[#0c3e69]/18",
    leftGlow: "bg-primary/14",
    rightGlow: "bg-[#1d5d92]/12",
    chip: "border-primary/20 bg-primary/10 text-primary",
    hoverText: "group-hover:text-primary",
    iconHover: "group-hover:text-primary",
    institution: "text-primary",
  },
} as const

export function ShowcaseCertificationCard({
  certification,
  theme = "default",
  imagePosition = "50% 50%",
}: ShowcaseCertificationCardProps) {
  const palette = themeClasses[theme]

  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block min-h-[22.75rem] overflow-visible rounded-[28px] border border-border bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${palette.hoverBorder} sm:min-h-[25.5rem]`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-linear-to-br from-[#08161a] via-[#0b1826] to-[#071018]">
        <div className={`absolute inset-x-0 top-0 hidden h-24 bg-linear-to-r ${palette.topWash} blur-2xl sm:block`} />
        <div className={`absolute -left-10 top-2 hidden h-32 w-32 rounded-full ${palette.leftGlow} blur-3xl sm:block`} />
        <div className={`absolute right-0 top-0 hidden h-28 w-28 rounded-full ${palette.rightGlow} blur-3xl sm:block`} />
        <div className="absolute inset-x-0 bottom-0 hidden h-8 bg-linear-to-t from-[#071018]/8 to-transparent sm:block sm:h-12 sm:from-[#071018]/18 sm:via-[#071018]/4" />
        <div className="relative h-full p-2 sm:p-3">
          <div className="relative h-full overflow-hidden rounded-[30px] sm:rounded-[28px]">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={certification.name}
            fill
            sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc((100vw - 5rem) / 2), calc((100vw - 8rem) / 3)"
            className="object-cover object-center drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 md:object-contain md:p-3"
            style={{ objectPosition: imagePosition }}
          />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-24 z-10 flex justify-center px-4 sm:bottom-4 sm:px-4">
        <div className="relative w-[90%] overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(22,28,36,0.18)] px-4 py-3.5 shadow-[0_22px_44px_rgba(0,0,0,0.24)] sm:w-full sm:max-w-[19rem] sm:rounded-[22px]">
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(86,95,106,0.42),rgba(30,36,45,0.58))] backdrop-blur-2xl sm:bg-[linear-gradient(180deg,rgba(22,31,41,0.5),rgba(10,16,24,0.68))]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_32%,transparent_62%)]" />
          <div className="relative mb-3 flex items-center justify-between gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${palette.chip}`}>
              <Award className="h-3.5 w-3.5" />
              Credential
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {certification.date}
            </span>
          </div>

          <h3 className={`relative text-base font-bold leading-snug text-white transition-colors sm:text-lg ${palette.hoverText}`}>
            {certification.name}
          </h3>

          {certification.institution ? (
            <p className={`relative mt-2 text-sm font-medium ${palette.institution}`}>{certification.institution}</p>
          ) : null}

          <div className="relative mt-3 flex items-center justify-between gap-3 pt-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
              View Credential
            </span>
            <ExternalLink className={`h-4 w-4 shrink-0 text-white/55 transition-colors ${palette.iconHover}`} />
          </div>
        </div>
      </div>
    </a>
  )
}
