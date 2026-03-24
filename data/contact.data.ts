import type { ReactNode } from "react"

export interface ContactInfo {
  icon: ReactNode
  label: string
  value: string
  href: string
}

export const contactEmail = "felipeparra20@gmail.com"
export const contactPhone = "+57 (305) 857-6656"
export const contactPhoneHref = "+573058576656"
export const contactWhatsappHref = "https://wa.me/573058576656"
export const contactLocation = "Bogotá D.C., Colombia"