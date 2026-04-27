import { useEffect, useRef } from 'react'

const THRESHOLDS = Array.from({ length: 100 }, (_, i) => (i + 1) / 100)

export function useInView() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          el.style.setProperty('--intersecting-ratio', entry.intersectionRatio)
        } else {
          el.classList.remove('in-view')
          el.removeAttribute('style')
        }
      }
    }, { threshold: THRESHOLDS })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
