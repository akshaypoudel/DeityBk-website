import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Palette, X, RotateCcw, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { TOKEN_FIELDS } from '../../theme/tokens'
import { Button } from '../ui'
import { Overline, Label, SmallText, CardHeading } from '../typography'

// Slide-in panel with 4 colour pickers (Accent, Primary, Secondary, Text),
// a light/dark switch and reset. Applies live via the theme context.
// The overlay + panel are PORTALED to <body> so their fixed positioning is
// always relative to the viewport (never confined by the navbar's transform).
export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false)
  const { theme, toggle, colors, setColor, resetColors } = useTheme()

  const panel = (
    <>
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className="animate-fade-in fixed inset-0 z-[90] bg-overlay backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* panel (pure-CSS slide-in — always settles at x:0) */}
      <aside
        role="dialog"
        aria-label="Theme customizer"
        className="animate-drawer-in fixed right-0 top-0 z-[100] flex h-screen w-[min(22rem,90vw)] flex-col border-l border-border bg-secondary shadow-card"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <Overline>Theme</Overline>
            <CardHeading className="mt-1">Customize colours</CardHeading>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {/* light / dark */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-primary/50 p-4">
            <Label>Appearance</Label>
            <button
              onClick={toggle}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              {theme === 'dark' ? 'Dark' : 'Light'}
            </button>
          </div>

          {/* colour pickers */}
          <div className="space-y-4">
            {TOKEN_FIELDS.map((f) => (
              <div key={f.key} className="flex items-center justify-between gap-4">
                <div>
                  <Label>{f.label}</Label>
                  <SmallText className="mt-0.5 text-xs">{f.hint}</SmallText>
                </div>
                <label className="relative h-10 w-14 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-border">
                  <span className="absolute inset-0" style={{ background: colors[f.key] }} />
                  <input
                    type="color"
                    value={colors[f.key]}
                    onChange={(e) => setColor(f.key, e.target.value)}
                    className="absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] cursor-pointer opacity-0"
                    aria-label={`${f.label} colour`}
                  />
                </label>
              </div>
            ))}
          </div>

          <SmallText className="text-xs">
            Changes apply instantly and are saved to this browser, separately for
            light and dark mode.
          </SmallText>
        </div>

        <div className="border-t border-border px-6 py-5">
          <Button variant="ghost" size="full" onClick={resetColors}>
            <RotateCcw size={16} /> Reset to default
          </Button>
        </div>
      </aside>
    </>
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Customize theme"
        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/70 text-fg transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Palette size={18} />
      </button>

      {open && createPortal(panel, document.body)}
    </>
  )
}
