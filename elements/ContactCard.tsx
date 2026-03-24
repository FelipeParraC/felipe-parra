import type { ReactNode } from "react"

interface ContactCardProps {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

export function ContactCard({ icon, label, value, href }: ContactCardProps) {
  const content = (
    <>
      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </>
  )

  const classes = "flex items-center gap-4 p-4 bg-card rounded-xl border border-border transition-all duration-300 group"

  if (!href) {
    return <div className={classes}>{content}</div>
  }

  return (
    <a
      href={href}
      className={`${classes} hover:border-primary`}
    >
      {content}
    </a>
  )
}
