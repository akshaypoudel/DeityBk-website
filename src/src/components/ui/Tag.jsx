import { cn } from '../../utils/cn'

// Small inline tag (e.g. tech pills on cards).
export default function Tag({ className, children, ...rest }) {
  return (
    <span
      className={cn(
        'rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
