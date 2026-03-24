import type { Language } from "@/interfaces/types"

interface LanguageCardProps {
  language: Language
}

export function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/40 p-4 transition-colors hover:bg-background/80">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-foreground">{language.name}</span>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {language.level}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d] transition-all duration-500"
            style={{ width: `${language.proficiency}%` }}
          />
        </div>
      </div>
    </div>
  )
}
