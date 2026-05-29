import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      let currentId = sectionIds[0] || ''
      for (let i = 0; i < sectionIds.length; i += 1) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          currentId = sectionIds[i]
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
