interface ProgressBarProps {
  name: string
  level: number
}

export function ProgressBar({ name, level }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
