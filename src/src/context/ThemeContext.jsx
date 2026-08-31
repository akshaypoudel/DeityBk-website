import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_TOKENS, STORAGE_KEY } from '../theme/tokens'
import { hexToChannels } from '../utils/color'

const ThemeContext = createContext(null)

function getInitialMode() {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function loadCustomColors() {
  const base = { light: { ...DEFAULT_TOKENS.light }, dark: { ...DEFAULT_TOKENS.dark } }
  if (typeof window === 'undefined') return base
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return {
      light: { ...base.light, ...(saved.light || {}) },
      dark: { ...base.dark, ...(saved.dark || {}) },
    }
  } catch {
    return base
  }
}

// Writes the 4 editable tokens for a given mode onto <html> as CSS vars.
// Everything else (muted/border/glass/gradient…) is derived in CSS.
function applyColors(mode, colors) {
  const root = document.documentElement
  const set = colors[mode]
  root.style.setProperty('--primary', hexToChannels(set.primary))
  root.style.setProperty('--secondary', hexToChannels(set.secondary))
  root.style.setProperty('--accent', hexToChannels(set.accent))
  root.style.setProperty('--text', hexToChannels(set.text))
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialMode)
  const [colors, setColors] = useState(loadCustomColors)

  // mode → toggle .dark + persist
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // apply the active mode's custom colours whenever mode/colours change
  useEffect(() => {
    applyColors(theme, colors)
  }, [theme, colors])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const setColor = (key, hex) => {
    setColors((prev) => {
      const next = { ...prev, [theme]: { ...prev[theme], [key]: hex } }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  const resetColors = () => {
    setColors((prev) => {
      const next = { ...prev, [theme]: { ...DEFAULT_TOKENS[theme] } }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  const value = useMemo(
    () => ({ theme, toggle, colors: colors[theme], setColor, resetColors }),
    [theme, colors],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext)
