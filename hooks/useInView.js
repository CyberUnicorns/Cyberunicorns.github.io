import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) {
            observer.unobserve(element)
          }
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      {
        threshold: options.threshold || 0.08,
        rootMargin: options.rootMargin || '0px 0px -5% 0px',
      }
    )

    observer.observe(element)

    const rect = element.getBoundingClientRect()
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (isAlreadyVisible) {
      setIsInView(true)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isInView]
}
