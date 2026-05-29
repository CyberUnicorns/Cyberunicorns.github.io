import { useInView } from '../../hooks/useInView'

export function ScrollReveal({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isInView ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
