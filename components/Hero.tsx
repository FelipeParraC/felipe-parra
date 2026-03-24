"use client"

import { heroDescription, heroGreetings, heroName, heroRoles, heroWelcome, personalInfo } from '@/data'
import { FadingText, TypingText } from '@/elements'
import { Download, ChevronDown, MapPin, Briefcase, Sparkles } from "lucide-react"
import { Button } from './ui'


export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-background to-primary/30 pointer-events-none" />
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute right-[-12%] bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-primary/90">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <Sparkles className="h-3.5 w-3.5" />
            {heroWelcome}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          <FadingText texts={heroGreetings} interval={3000} /> <span className="text-primary">{heroName}</span>
        </h1>
        <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-8">
          <TypingText texts={heroRoles} />
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-300">
          {heroDescription}
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in animation-delay-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            {personalInfo.role}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {personalInfo.location}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in animation-delay-500">
          <a
            href="/pdfs/cv/cv.pdf"
            download="Felipe_Parra_CV.pdf"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={scrollToAbout}
          >
            Explore More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
