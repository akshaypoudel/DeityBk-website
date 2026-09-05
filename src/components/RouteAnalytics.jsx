import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Reports client-side route changes to the Google tag as page_views.
//
// gtag('config', ...) in index.html fires ONE page_view on the initial
// load. React Router navigations don't reload the page, so without this
// Google would never see /thank-you - and the Ads conversion for this
// campaign is URL-based ("someone viewed deitybk.online/thank-you").
export default function RouteAnalytics() {
  const { pathname, search } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // The initial load is already counted by gtag('config') - skip it so
    // the landing page isn't double-counted.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname + search,
      page_title: document.title,
    })
  }, [pathname, search])

  return null
}
