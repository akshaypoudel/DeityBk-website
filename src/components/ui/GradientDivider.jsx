import { cn } from '../../utils/cn'

// Thin horizontal rule that fades an accent line in from both ends.
export default function GradientDivider({ className, ...rest }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-40',
        className,
      )}
      {...rest}
    />
  )
}
