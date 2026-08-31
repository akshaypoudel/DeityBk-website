import { cn } from '../../utils/cn'

const field =
  'w-full rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-fg placeholder:text-muted ' +
  'outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30'

export function Input({ invalid = false, className, ...rest }) {
  return (
    <input
      className={cn(field, invalid ? 'border-danger' : 'border-border', className)}
      {...rest}
    />
  )
}

export function Textarea({ invalid = false, className, ...rest }) {
  return (
    <textarea
      className={cn(field, 'resize-none', invalid ? 'border-danger' : 'border-border', className)}
      {...rest}
    />
  )
}
