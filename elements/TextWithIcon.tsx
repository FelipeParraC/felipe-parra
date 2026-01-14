import type { LucideIcon } from "lucide-react"

interface TextWithIconProps {
  icon: LucideIcon
  label: string
  value: string
}

export function TextWithIcon({ icon: Icon, label, value }: TextWithIconProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors">
      <Icon className="w-5 h-5 text-primary shrink-0" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
