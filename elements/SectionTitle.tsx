interface SectionTitleProps {
  preText: string
  highlightText: string
}

export function SectionTitle({ preText, highlightText }: SectionTitleProps) {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
        {preText} <span className="text-primary">{highlightText}</span>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
    </>
  )
}
