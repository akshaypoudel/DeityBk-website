import { cn } from '../../utils/cn'

// Small status/category pill. `tone="accent"` for a highlighted badge.
export default function Badge({ tone = 'neutral', className, children, ...rest }) {
  const tones = {
    neutral: 'border-border bg-secondary/70 text-muted',
    accent: 'border-transparent bg-accent-soft text-accent',
    solid: 'border-transparent bg-accent text-on-accent',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
