export interface SocialLinkData {
  name: string
  href: string
  iconType: "linkedin" | "github" | "twitter" | "instagram" | "mail" | "phone"
}

export const socialLinks: SocialLinkData[] = [
  { name: "LinkedIn", href: "https://linkedin.com/in/felipeparrac", iconType: "linkedin" },
  { name: "GitHub", href: "https://github.com/FelipeParraC", iconType: "github" },
  { name: "Twitter", href: "https://twitter.com/FelipeParraC", iconType: "twitter" },
  { name: "Instagram", href: "https://instagram.com/felipe.parra11", iconType: "instagram" },
  { name: "Email", href: "mailto:felipeparra20@gmail.com", iconType: "mail" },
  { name: "WhatsApp", href: "https://wa.me/573058576656", iconType: "phone" },
]
