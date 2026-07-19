import { site } from '../data/site'
import { slugify } from './projects'

// Every service gets a guaranteed slug (falls back to a slugified title).
export const servicesWithSlugs = site.services.map((s) => ({
  ...s,
  slug: s.slug || slugify(s.title),
}))

export const getServiceBySlug = (slug) =>
  servicesWithSlugs.find((s) => s.slug === slug)
