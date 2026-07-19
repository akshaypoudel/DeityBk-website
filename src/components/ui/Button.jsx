import { cn } from '../../utils/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-accent text-on-accent shadow-glow hover:-translate-y-0.5 hover:shadow-glow-strong',
  ghost: 'border border-border bg-transparent text-fg hover:border-accent hover:text-accent',
  subtle: 'bg-accent-soft text-accent hover:-translate-y-0.5',
  outline: 'border border-border bg-secondary/60 text-fg hover:border-accent hover:text-accent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
  full: 'w-full px-6 py-3 text-sm',
}

// Polymorphic button. Use `as={Link}` for router links, `as="a"` for anchors.
export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) {
  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Tag>
  )
}
