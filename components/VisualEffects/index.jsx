import { useEffect } from 'react'
import { initVisualEffects } from '../../lib/effects/initVisualEffects'

export function VisualEffects() {
  useEffect(() => {
    const cleanup = initVisualEffects()
    return cleanup
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__bar" />
      </div>

      <div className="page-intro" aria-hidden="true">
        <img src="/logo.png" alt="" className="page-intro__logo" />
        <p className="page-intro__title">
          Cyber<span>corns</span>
        </p>
      </div>

      <div className="custom-cursor" aria-hidden="true">
        <div className="custom-cursor__dot" />
        <div className="custom-cursor__ring" />
      </div>
    </>
  )
}
