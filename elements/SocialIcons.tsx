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
      {links.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={baseClasses}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
