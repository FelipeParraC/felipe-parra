interface CertificationPaginationProps {
  total: number
  activeIndex: number
  onSelect: (index: number) => void
  accentClassName?: string
  className?: string
}

export function CertificationPagination({
  total,
  activeIndex,
  onSelect,
  accentClassName = "border-primary/30 bg-primary/10 text-primary",
  className = "",
}: CertificationPaginationProps) {
  if (total <= 1) return null

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/8 bg-black/10 px-3 py-2 backdrop-blur-sm">
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to certification ${index + 1}`}
            onClick={() => onSelect(index)}
            className={`min-w-9 rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
              index === activeIndex
                ? accentClassName
                : "border-white/10 bg-white/3 text-white/55 hover:border-white/20 hover:bg-white/6"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
