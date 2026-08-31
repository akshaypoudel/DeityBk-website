import { site } from '../data/site'

// url-safe id from a title, used as a fallback if a project has no `slug`.
export const slugify = (str) =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Every project gets a guaranteed slug (falls back to a slugified title).
export const projectsWithSlugs = site.projects.map((p) => ({
  ...p,
  slug: p.slug || slugify(p.title),
}))

export const getProjectBySlug = (slug) =>
  projectsWithSlugs.find((p) => p.slug === slug)

// Other projects in the same category (for the "more work" section).
export const relatedProjects = (project, limit = 3) =>
  projectsWithSlugs
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, limit)

// Images shown in the card slider: the cover image first, then any gallery
// images, de-duplicated. Falls back to just the cover if there's no gallery.
export const projectImages = (project) => {
  const all = [project.image, ...(project.gallery || [])].filter(Boolean)
  return Array.from(new Set(all))
}
