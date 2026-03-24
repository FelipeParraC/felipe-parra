interface SectionTitleProps {
  preText: string
  highlightText: string
}

export function SectionTitle({ preText, highlightText }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-primary/50" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Highlights
        </span>
        <span className="h-px w-10 bg-primary/50" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        {preText} <span className="text-primary">{highlightText}</span>
      </h2>
      <div className="mx-auto flex w-fit items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-1 w-16 rounded-full bg-primary" />
      </div>
    </div>
  )
}
