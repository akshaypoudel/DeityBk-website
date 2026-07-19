const policyFiles = import.meta.glob('../pages/privacy-policy/*/index.html', {
  eager: true,
  import: 'default',
  query: '?raw',
})

function getSlug(path) {
  const segments = path.split('/')
  return segments[segments.length - 2]
}

export const privacyPolicies = Object.fromEntries(
  Object.entries(policyFiles).map(([path, html]) => [getSlug(path), html]),
)

export const privacyPolicySlugs = Object.keys(privacyPolicies).sort()
