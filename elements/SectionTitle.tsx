interface SectionTitleProps {
  preText: string
  highlightText: string
  highlightClassName?: string
  accentLineClassName?: string
  accentTextClassName?: string
  accentDotClassName?: string
}

export function SectionTitle({
  preText,
  highlightText,
  highlightClassName = "text-primary",
  accentLineClassName = "bg-primary/50",
  accentTextClassName = "text-primary/80",
  accentDotClassName = "bg-primary",
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center animate-reveal">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className={`h-px w-10 animate-fade-in animation-delay-100 ${accentLineClassName}`} />
        <span className={`text-xs font-semibold uppercase tracking-[0.35em] ${accentTextClassName}`}>
          Section
        </span>
        <span className={`h-px w-10 animate-fade-in animation-delay-100 ${accentLineClassName}`} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        {preText} <span className={highlightClassName}>{highlightText}</span>
      </h2>
      <div className="mx-auto flex w-fit items-center gap-2">
        <span className={`h-2 w-2 rounded-full animate-pulse-glow ${accentDotClassName}`} />
        <div className={`h-1 w-16 rounded-full animate-fade-in animation-delay-200 ${accentDotClassName}`} />
      </div>
    </div>
  )
}
