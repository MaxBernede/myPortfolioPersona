"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
}

export default function TypewriterText({ text, delay = 50, className = "" }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
  }, [text])

  return <span className={className}>{displayText}</span>
}
