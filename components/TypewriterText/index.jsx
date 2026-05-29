import { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'

const TYPE_SPEED_MS = 32
const START_DELAY_MS = 500

export function TypewriterText({ text, ...textProps }) {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplayed(text)
      setIsTyping(false)
      return undefined
    }

    let index = 0
    let intervalId = 0

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setDisplayed(text.slice(0, index))
        if (index >= text.length) {
          window.clearInterval(intervalId)
          setIsTyping(false)
        }
      }, TYPE_SPEED_MS)
    }, START_DELAY_MS)

    return () => {
      window.clearTimeout(startId)
      window.clearInterval(intervalId)
    }
  }, [text])

  return (
    <Text
      {...textProps}
      className={`typewriter-text ${isTyping ? 'typewriter-text--typing' : ''} ${textProps.className || ''}`.trim()}
      aria-label={text}
    >
      <span aria-hidden="true">
        {displayed}
        {isTyping ? <span className="typewriter-cursor">|</span> : null}
      </span>
    </Text>
  )
}
