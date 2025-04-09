'use client'

import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  delay?: number
  infinite?: boolean
}

export default function Typewriter({
  words,
  delay = 3000,
  infinite = true,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentWord = words[currentWordIndex]
      const shouldDelete = isDeleting
      const typingSpeed = shouldDelete ? 50 : 150

      if (shouldDelete) {
        setCurrentText((prev) => prev.slice(0, -1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) =>
            infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          )
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
        if (currentText === currentWord) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, delay)
          return
        }
      }

      timeout = setTimeout(type, typingSpeed)
    }

    timeout = setTimeout(type, 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, delay, infinite, isDeleting, words])

  return (
    <span className="font-mono text-blue-600 dark:text-blue-400">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
} 