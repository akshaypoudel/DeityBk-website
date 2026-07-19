// Convert a #rrggbb hex string to the "R G B" channel format our CSS
// tokens use (so Tailwind's rgb(var(--x) / <alpha>) keeps working).
export function hexToChannels(hex) {
  const h = String(hex).replace('#', '').trim()
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `${r} ${g} ${b}`
}

// Convert "R G B" channels back to #rrggbb (for the color picker inputs).
export function channelsToHex(channels) {
  const [r, g, b] = String(channels).trim().split(/\s+/).map(Number)
  const to = (v) => Math.max(0, Math.min(255, v || 0)).toString(16).padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}
