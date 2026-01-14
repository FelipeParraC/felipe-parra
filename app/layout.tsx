import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Felipe Parra | Mathematician Portfolio",
  description:
    "Professional portfolio of Felipe Parra - Mathematician, AWS Cloud Practitioner, and AWS AI Practitioner. Explore my projects, skills, and experience.",
  keywords: ["Mathematician", "AWS Cloud Practitioner", "AWS AI Practitioner", "Portfolio", "Felipe Parra", "Web Development"],
  
  // icons: {
  //   // Fallback (no media). Good for browsers that ignore media queries in favicons.
  //   icon: [
  //     { url: "/favicon.ico" },

  //     // Theme-aware PNG favicons
  //     { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
  //     { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },

  //     // SVG favicon (optional but great)
  //     { url: "/icon.svg", type: "image/svg+xml" },
  //   ],
  //   shortcut: ["/favicon.ico"],
  //   apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
