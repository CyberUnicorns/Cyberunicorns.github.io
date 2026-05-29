import { useEffect, useState } from 'react'

export function LightboxImage({ src, alt, className = '', imgClassName = '', ...imgProps }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        className={`lightbox-trigger ${className}`.trim()}
        onClick={handleOpen}
        aria-label={`View ${alt} in lightbox`}
      >
        <img src={src} alt={alt} className={imgClassName} {...imgProps} />
      </button>

      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} preview`}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={handleClose}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
