"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  delayBetween?: number
}

export function TypingText({ texts, typingSpeed = 100, delayBetween = 2000 }: TypingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const text = texts[currentIndex]
    let index = 0
    let timeout: NodeJS.Timeout

    if (isTyping) {
      timeout = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }, delayBetween)
          clearInterval(timeout)
        }
      }, typingSpeed)
    }

    return () => clearInterval(timeout)
  }, [currentIndex, isTyping, texts, typingSpeed, delayBetween])

  return (
    <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
      {displayText}
      <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1 animate-pulse" />
    </span>
  )
}
