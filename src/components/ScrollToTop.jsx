import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on route change; scrolls to #anchor if the URL has a hash.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // 'instant' beats the CSS `scroll-behavior: smooth`, which would
    // otherwise animate a long scroll-up on every route change.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
