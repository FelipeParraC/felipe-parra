"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function TypingText({
  texts,
  typingSpeed = 90,
  deletingSpeed = 45,
  delayBetween = 1400,
}: TypingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentIndex]
    const timeoutId = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        return
      }

      if (isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length - 1))
        return
      }

      setDisplayText(currentText.slice(0, displayText.length + 1))
    }, !isDeleting && displayText === currentText ? delayBetween : isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [currentIndex, delayBetween, deletingSpeed, displayText, isDeleting, texts, typingSpeed])

  return (
    <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
      {displayText}
      <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-primary sm:h-8" />
    </span>
  )
}
