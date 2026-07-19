import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Themed, accessible dropdown that replaces the native <select> (whose open
 * list is drawn by the OS and can't be styled to match the design).
 *
 * Props:
 *   options      array of strings OR { value, label }
 *   value        currently selected value
 *   onChange     (value) => void
 *   placeholder  text shown when nothing is selected
 *   invalid      show error border
 *   id           label association
 */
export default function Select({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select…',
  invalid = false,
  id,
}) {
  const items = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o,
  )
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1) // keyboard-highlighted index
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const listId = useId()

  const selected = items.find((i) => i.value === value)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  // When opening, highlight the current selection
  useEffect(() => {
    if (open) {
      const idx = items.findIndex((i) => i.value === value)
      setActive(idx >= 0 ? idx : 0)
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (val) => {
    onChange?.(val)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!open) return setOpen(true)
        setActive((a) => Math.min(a + 1, items.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!open) return setOpen(true)
        setActive((a) => Math.max(a - 1, 0))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (open && items[active]) choose(items[active].value)
        else setOpen(true)
        break
      case 'Escape':
        setOpen(false)
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        break
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between gap-2 rounded-xl border bg-secondary/60 px-4 py-3 text-left text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 ${
          invalid ? 'border-danger' : 'border-border hover:border-accent/50'
        } ${open ? 'border-accent ring-2 ring-accent/30' : ''}`}
      >
        <span className={selected ? 'text-fg' : 'text-muted'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180 text-accent' : ''}`}
        />
      </button>

      {/* Rendered conditionally (no exit animation) so the panel always
          fully unmounts on close — an invisible lingering overlay would
          otherwise block clicks on the fields below. */}
      {open && (
        <motion.ul
          ref={listRef}
          id={listId}
          role="listbox"
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="glass absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-border p-1.5 shadow-card"
        >
            {items.map((item, i) => {
              const isSelected = item.value === value
              const isActive = i === active
              return (
                <li
                  key={item.value || `opt-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(item.value)}
                  className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-brand-soft text-fg' : 'text-muted'
                  } ${isSelected ? 'font-semibold text-fg' : ''}`}
                >
                  <span>{item.label}</span>
                  {isSelected && <Check size={16} className="text-brand" />}
                </li>
              )
            })}
        </motion.ul>
      )}
    </div>
  )
}
