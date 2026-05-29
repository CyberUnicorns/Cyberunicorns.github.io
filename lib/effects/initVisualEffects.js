function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function prefersFinePointer() {
  return window.matchMedia('(pointer: fine)').matches
}

function isWelcomePath() {
  const path = window.location.pathname
  return path === '/' || path.endsWith('/index.html')
}

function dismissPageIntro() {
  const intro = document.querySelector('.page-intro')
  if (!intro) return
  intro.classList.remove('page-intro--playing')
  intro.classList.add('page-intro--done')
}

function initPageIntro(isWelcomePage) {
  const intro = document.querySelector('.page-intro')
  if (!intro) return () => {}

  if (!isWelcomePage || prefersReducedMotion()) {
    dismissPageIntro()
    return () => {}
  }

  intro.classList.remove('page-intro--done')
  intro.classList.add('page-intro--playing')

  const timer = window.setTimeout(dismissPageIntro, 1600)
  return () => window.clearTimeout(timer)
}

function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress__bar')
  if (!bar) return () => {}

  const update = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    bar.style.width = `${progress}%`
  }

  window.addEventListener('scroll', update, { passive: true })
  update()
  return () => window.removeEventListener('scroll', update)
}

function initCustomCursor() {
  if (!prefersFinePointer() || prefersReducedMotion()) return () => {}

  const cursor = document.querySelector('.custom-cursor')
  const dot = cursor?.querySelector('.custom-cursor__dot')
  const ring = cursor?.querySelector('.custom-cursor__ring')
  if (!cursor || !dot || !ring) return () => {}

  document.body.classList.add('fx-custom-cursor')
  cursor.classList.add('is-active')

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0
  let rafId = 0

  const onMove = (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
    dot.style.setProperty('--cursor-x', `${mouseX}px`)
    dot.style.setProperty('--cursor-y', `${mouseY}px`)
  }

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.14
    ringY += (mouseY - ringY) * 0.14
    ring.style.setProperty('--ring-x', `${ringX}px`)
    ring.style.setProperty('--ring-y', `${ringY}px`)
    rafId = window.requestAnimationFrame(animateRing)
  }

  const onOver = (event) => {
    const target = event.target
    if (!(target instanceof Element)) return
    const interactive = target.closest('a, button, .btn-interactive, .interactive-card, .lightbox-trigger')
    cursor.classList.toggle('is-hovering', Boolean(interactive))
  }

  window.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseover', onOver, { passive: true })
  rafId = window.requestAnimationFrame(animateRing)

  return () => {
    document.body.classList.remove('fx-custom-cursor')
    window.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onOver)
    window.cancelAnimationFrame(rafId)
  }
}

function initRipples() {
  const onClick = (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const host = target.closest('button, .btn-interactive, a.chakra-button, a.chakra-link')
    if (!host || host.classList.contains('lightbox-close') || host.classList.contains('back-to-top')) {
      return
    }

    host.classList.add('fx-ripple-host')
    const rect = host.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 1.6
    const ripple = document.createElement('span')
    ripple.className = 'fx-ripple'
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`
    host.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}

function initCardTilt() {
  if (prefersReducedMotion() || !prefersFinePointer()) return () => {}

  const cards = document.querySelectorAll('.fx-tilt:not([data-tilt-init])')
  const cleanups = []

  cards.forEach((card) => {
    card.setAttribute('data-tilt-init', 'true')

    const inner = document.createElement('div')
    inner.className = 'fx-tilt-wrap'
    while (card.firstChild) {
      inner.appendChild(card.firstChild)
    }
    card.appendChild(inner)

    const onMove = (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      inner.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const onLeave = () => {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    cleanups.push(() => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    })
  })

  return () => cleanups.forEach((fn) => fn())
}

function initHeroParallax() {
  const layer = document.querySelector('.hero-parallax-layer')
  if (!layer || prefersReducedMotion()) return () => {}

  const onScroll = () => {
    const hero = document.getElementById('welcome')
    if (!hero) return
    const rect = hero.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > window.innerHeight) return
    const offset = rect.top * 0.28
    layer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  return () => window.removeEventListener('scroll', onScroll)
}

function wrapHeroLines() {
  if (prefersReducedMotion()) return

  const hero = document.getElementById('welcome')
  if (!hero || hero.hasAttribute('data-hero-lines')) return

  hero.setAttribute('data-hero-lines', 'true')

  const textBlocks = hero.querySelectorAll('.hero-content .chakra-heading, .hero-content .chakra-text')
  let delay = 0

  textBlocks.forEach((block) => {
    if (block.hasAttribute('data-hero-wrapped')) return
    block.setAttribute('data-hero-wrapped', 'true')

    const text = block.textContent || ''
    if (!text.trim()) return

    const isInline = block.classList.contains('hero-title-inline')
    const words = text.split(/(\s+)/)
    block.textContent = ''
    let lineIndex = 0

    words.forEach((word) => {
      if (!word.trim()) {
        block.appendChild(document.createTextNode(word))
        return
      }

      const line = document.createElement('span')
      line.className = isInline ? 'hero-line hero-line--inline' : 'hero-line'
      const inner = document.createElement('span')
      inner.className = 'hero-line__inner'
      inner.style.setProperty('--line-delay', `${delay + lineIndex * 80}ms`)
      inner.textContent = word
      line.appendChild(inner)
      block.appendChild(line)
      lineIndex += 1
    })

    delay += lineIndex * 80 + 120
  })
}

function initHeadingReveal() {
  if (prefersReducedMotion()) return () => {}

  const headings = document.querySelectorAll(
    'section h1.chakra-heading:not([data-heading-reveal]), section h3.chakra-heading:not([data-heading-reveal])'
  )
  const observers = []

  headings.forEach((heading, index) => {
    if (heading.closest('#welcome')) return

    heading.setAttribute('data-heading-reveal', 'true')

    const text = heading.textContent || ''
    heading.textContent = ''
    heading.classList.add('fx-heading-reveal')

    const inner = document.createElement('span')
    inner.className = 'fx-heading-reveal__inner'
    inner.style.transitionDelay = `${Math.min(index * 40, 200)}ms`
    inner.textContent = text
    heading.appendChild(inner)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('is-revealed')
          observer.unobserve(heading)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    )

    observer.observe(heading)
    observers.push(observer)
  })

  return () => observers.forEach((observer) => observer.disconnect())
}

function initCountUp() {
  if (prefersReducedMotion()) return () => {}

  const elements = document.querySelectorAll('.fx-count-up:not([data-count-init])')
  const observers = []

  elements.forEach((el) => {
    el.setAttribute('data-count-init', 'true')

    const target = Number(el.getAttribute('data-count') || el.textContent || '0')
    if (Number.isNaN(target)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)

        const duration = 900
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          el.textContent = String(Math.round(target * eased))
          if (progress < 1) window.requestAnimationFrame(tick)
        }

        el.textContent = '0'
        window.requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    observers.push(observer)
  })

  return () => observers.forEach((observer) => observer.disconnect())
}

function initNavGlow() {
  const nav = document.querySelector('.site-nav')
  if (nav) nav.classList.add('fx-nav-glow')
  return () => {
    if (nav) nav.classList.remove('fx-nav-glow')
  }
}

export function initVisualEffects(options = {}) {
  if (typeof window === 'undefined') return () => {}

  const isWelcomePage = options.isWelcomePage ?? isWelcomePath()
  const cleanups = []

  try {
    if (!prefersReducedMotion()) {
      document.documentElement.classList.add('fx-enhanced')
    }

    cleanups.push(initPageIntro(isWelcomePage))
    cleanups.push(initScrollProgress())
    cleanups.push(initCustomCursor())
    cleanups.push(initRipples())
    cleanups.push(initNavGlow())

    if (!prefersReducedMotion()) {
      cleanups.push(initHeroParallax())
      cleanups.push(initCardTilt())
      cleanups.push(initCountUp())
    }
  } catch (error) {
    dismissPageIntro()
    console.error('[VisualEffects]', error)
  }

  return () => {
    dismissPageIntro()
    cleanups.forEach((cleanup) => cleanup())
  }
}
