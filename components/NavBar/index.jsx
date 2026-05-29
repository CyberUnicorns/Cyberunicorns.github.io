import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Img, Heading } from '@chakra-ui/react'
import { navLinks } from '../../lib/navLinks'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState('')

  useEffect(() => {
    const updatePath = () => {
      setActivePath(window.location.pathname)
    }
    updatePath()
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const isActive = (href) => {
    if (!activePath) return false
    if (href === '/') {
      return activePath === '/' || activePath.endsWith('/index.html')
    }
    return activePath === href || activePath.endsWith(`${href}.html`) || activePath.endsWith(`${href}/index.html`)
  }

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav__inner">
        <Link href="/" passHref>
          <a className="site-nav__brand">
            <Img
              className="site-nav__logo"
              src="/logo.png"
              maxW="60px"
              alt="Cybercorns logo"
            />
            <div>
              <Heading as="span" size="lg" display="inline">
                Cyber
              </Heading>
              <Heading as="span" size="lg" display="inline" color="blue.300" fontWeight="bolder">
                corns
              </Heading>
            </div>
          </a>
        </Link>

        <button
          type="button"
          className={`site-nav__toggle ${isMenuOpen ? 'site-nav__toggle--open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="site-nav__toggle-bar" />
          <span className="site-nav__toggle-bar" />
          <span className="site-nav__toggle-bar" />
        </button>

        <ul
          id="site-nav-menu"
          className={`site-nav__links ${isMenuOpen ? 'site-nav__links--open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} passHref>
                <a
                  className={`site-nav__link ${isActive(link.href) ? 'site-nav__link--active' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
