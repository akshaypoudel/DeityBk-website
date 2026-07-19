import { useEffect } from 'react'
import { site } from '../data/site'

// Lightweight per-page SEO: updates the document <title> and the meta
// description / Open Graph / Twitter tags when a page mounts. No extra
// dependency needed. (Note: social-media scrapers that don't run JS read
// the static tags in index.html; this keeps browser tabs + Google — which
// does run JS — accurate per page.)
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

export default function Seo({ title, description }) {
  useEffect(() => {
    const brand = site.brand?.name || 'Nova'
    const fullTitle = title ? `${title} — ${brand}` : `${brand} — ${site.brand?.tagline || ''}`
    const desc = description || site.hero?.subtitle || ''

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
  }, [title, description])

  return null
}
