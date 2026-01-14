"use client"

import type { Language } from "@/interfaces/types"

interface LanguageCardProps {
  language: Language
}

export function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-foreground">{language.name}</span>
          <span className="text-sm text-primary">{language.level}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${language.proficiency}%` }}
          />
        </div>
      </div>
    </div>
  )
}
