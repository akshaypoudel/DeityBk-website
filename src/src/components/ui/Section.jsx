import { cn } from '../../utils/cn'

// Vertical rhythm wrapper for page sections. `size` controls padding.
const sizes = {
  sm: 'py-12',
  md: 'py-20 sm:py-28',
  lg: 'py-24 sm:py-32',
}

export default function Section({ as: Tag = 'section', size = 'md', className, children, ...rest }) {
  return (
    <Tag className={cn('scroll-mt-24', sizes[size], className)} {...rest}>
      {children}
    </Tag>
  )
}
