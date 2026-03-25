"use client"

import { useEffect, useState } from "react"

interface FadingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function FadingText({ texts, interval = 3000, className = "" }: FadingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout | undefined

    const timer = setInterval(() => {
      // Fade out
      setIsVisible(false)

      // After fade out, change text and fade in
      fadeTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 500) // Half second for fade out
    }, interval)

    return () => {
      clearInterval(timer)
      if (fadeTimeout) clearTimeout(fadeTimeout)
    }
  }, [texts.length, interval])

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  )
}
