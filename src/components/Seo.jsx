import { useEffect } from 'react'
import { site } from '../data/site'

// Lightweight per-page SEO: updates the document <title> and the meta
// description / Open Graph / Twitter tags when a page mounts. No extra
// dependency needed. (Note: social-media scrapers that don't run JS read
// the static tags in index.html; this keeps browser tabs + Google - which
// does run JS - accurate per page.)
function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, image, noindex = false }) {
  useEffect(() => {
    const brand = site.brand?.name || 'DeityBK Studio'
    const fullTitle = title ? `${title} - ${brand}` : `${brand} - ${site.brand?.tagline || ''}`
    const desc = description || site.hero?.subtitle || ''

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)

    // Canonical + og:url follow the current route (query strings like
    // Google Ads' ?gclid=... are stripped so tracked visits don't create
    // duplicate URLs in Google's eyes).
    const url = `https://deitybk.online${window.location.pathname}`
    setMeta('property', 'og:url', url)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Per-page share image (e.g. a project's cover); falls back to the
    // static default from index.html when the page doesn't pass one.
    if (image) {
      setMeta('property', 'og:image', image)
      setMeta('name', 'twitter:image', image)
    }

    // noindex for pages that should stay out of search (thank-you, 404s).
    // Managed here so it's removed again when a normal page mounts.
    let robots = document.head.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex')
    } else if (robots) {
      robots.remove()
    }
  }, [title, description, image, noindex])

  return null
}
