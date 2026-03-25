import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://felipe-parra.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Felipe Parra | Mathematician Portfolio",
  description:
    "Professional portfolio of Felipe Parra, mathematician and software engineer. Explore experience, projects, certifications, and contact information.",
  keywords: ["Mathematician", "AWS Cloud Practitioner", "AWS AI Practitioner", "Portfolio", "Felipe Parra", "Web Development"],
  authors: [{ name: "Felipe Parra" }],
  creator: "Felipe Parra",
  publisher: "Felipe Parra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Felipe Parra | Mathematician Portfolio",
    description:
      "Professional portfolio of Felipe Parra, mathematician and software engineer. Explore experience, projects, certifications, and contact information.",
    siteName: "Felipe Parra Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/navigation/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Felipe Parra profile picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Parra | Mathematician Portfolio",
    description:
      "Professional portfolio of Felipe Parra, mathematician and software engineer. Explore experience, projects, certifications, and contact information.",
    images: ["/images/navigation/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
