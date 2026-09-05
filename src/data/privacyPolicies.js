// Lazy loaders - each policy HTML is fetched only when its page is visited,
// instead of bundling all of them into one 69KB chunk (eager: true).
const policyLoaders = import.meta.glob('../pages/privacy-policy/*/index.html', {
  import: 'default',
  query: '?raw',
})

function getSlug(path) {
  const segments = path.split('/')
  return segments[segments.length - 2]
}

const loadersBySlug = Object.fromEntries(
  Object.entries(policyLoaders).map(([path, load]) => [getSlug(path), load]),
)

export const privacyPolicySlugs = Object.keys(loadersBySlug).sort()

// Resolves to the policy's raw HTML, or null when the slug doesn't exist.
export function loadPrivacyPolicy(slug) {
  const load = loadersBySlug[slug]
  return load ? load() : Promise.resolve(null)
}
