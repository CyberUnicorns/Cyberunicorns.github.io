import { useEffect, useRef } from 'react'

export function HeroParticles({ theme = 'dark' }) {
  const canvasRef = useRef(null)
  const isLight = theme === 'light'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let width = 0
    let height = 0
    let rafId = 0
    const particles = []

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width
      canvas.height = height
    }

    const createParticles = () => {
      particles.length = 0
      const count = Math.min(55, Math.floor((width * height) / 14000))
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.6,
          speedX: (Math.random() - 0.5) * 0.35,
          speedY: (Math.random() - 0.5) * 0.35,
          alpha: Math.random() * (isLight ? 0.35 : 0.45) + (isLight ? 0.12 : 0.15),
          color: i % 5 === 0
            ? isLight
              ? '66, 153, 225'
              : '129, 140, 248'
            : isLight
              ? '44, 82, 130'
              : '56, 189, 248',
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`
        ctx.fill()
      })

      rafId = window.requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(rafId)
    }
  }, [isLight])

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />
}

export function HeroAtmosphere({ theme = 'dark' }) {
  return (
    <>
      <div className="hero-orbs" aria-hidden="true">
        <div className="hero-orbs__orb" />
        <div className="hero-orbs__orb" />
        <div className="hero-orbs__orb" />
      </div>
      <HeroParticles theme={theme} />
      <div className="hero-noise-overlay" aria-hidden="true" />
    </>
  )
}
