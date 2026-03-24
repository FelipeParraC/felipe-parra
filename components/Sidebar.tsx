"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  FolderOpen,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Phone,
  Menu,
  X,
} from "lucide-react"
import { footerText, navItems, profileImage, profileName, profileRole, socialLinks } from '@/data'
import { ProfilePicture, SocialIcons } from '@/elements'



const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-5 h-5" />,
  user: <User className="w-5 h-5" />,
  graduation: <GraduationCap className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
  folder: <FolderOpen className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
}

const socialIconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
}

const socialLinksWithIcons = socialLinks.map((link) => ({
  icon: socialIconMap[link.iconType],
  href: link.href,
  label: link.name,
}))

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const handleNavClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-card rounded-lg lg:hidden hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="site-sidebar"
      >
        {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
        />
      )}

      {/* Sidebar */}
      <aside
        id="site-sidebar"
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-sidebar-border">
          <div className="mb-4">
            <ProfilePicture src={profileImage} alt={profileName} size="md" />
          </div>
          <h2 className="text-xl font-bold text-sidebar-foreground">{profileName}</h2>
          <p className="text-sm text-muted-foreground mt-1">{profileRole}</p>

          <div className="flex justify-center mt-4">
            <SocialIcons links={socialLinksWithIcons} variant="sidebar" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto" aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                    activeSection === item.id
                      ? "bg-primary/20 text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  {iconMap[item.icon]}
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border text-center">
          <p className="text-xs text-muted-foreground">
            {footerText}
            <br />
            All rights reserved
          </p>
        </div>
      </aside>
    </>
  )
}
