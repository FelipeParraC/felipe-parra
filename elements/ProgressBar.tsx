interface ProgressBarProps {
  name: string
  level: number
}

export function ProgressBar({ name, level }: ProgressBarProps) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/40 px-4 py-3">
      <div className="mb-2 flex justify-between gap-3">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d] transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
