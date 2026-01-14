import type { ReactNode } from "react"

interface SocialLink {
  icon: ReactNode
  href: string
  label: string
}

interface SocialIconsProps {
  links: SocialLink[]
  variant?: "sidebar" | "default"
}

export function SocialIcons({ links, variant = "default" }: SocialIconsProps) {
  const baseClasses =
    variant === "sidebar"
      ? "p-2 text-muted-foreground hover:text-primary hover:bg-sidebar-accent rounded-lg transition-all duration-200"
      : "p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"

  return (
    <div className="flex gap-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
