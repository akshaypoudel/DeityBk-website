// Fire-and-forget analytics events. Safe to call before (or without) the
// Google tag being installed: it silently no-ops until `window.gtag`
// exists, so the calls can live in the code now and start counting the
// moment the tag snippet is added to index.html.
export function track(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  } catch {
    // never break the UI over analytics
  }
}
