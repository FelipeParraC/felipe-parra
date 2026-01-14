"use client"

import { heroDescription, heroGreetings, heroName, heroRoles, heroWelcome } from '@/data'
import { FadingText, TypingText } from '@/elements'
import { Download, ChevronDown } from "lucide-react"
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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-background to-primary/30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">{heroWelcome}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          <FadingText texts={heroGreetings} interval={3000} /> <span className="text-primary">{heroName}</span>
        </h1>
        <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-8">
          <TypingText texts={heroRoles} />
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-300">
          {heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in animation-delay-500">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download CV
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={scrollToAbout}
          >
            Know More
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
