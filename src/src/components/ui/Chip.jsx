import { cn } from '../../utils/cn'

// Interactive filter chip (e.g. the projects category filter).
// The active pill background is rendered by the parent (Framer layoutId),
// so this only handles the label + text colour states.
export default function Chip({ active = false, className, children, ...rest }) {
  return (
    <button
      type="button"
      className={cn(
        'relative rounded-full px-5 py-2 text-sm font-medium transition-colors',
        active ? 'text-on-accent' : 'text-muted hover:text-fg',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
