import { cn } from '../../utils/cn'

// Centered max-width wrapper with responsive gutters.
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('container-x', className)} {...rest}>
      {children}
    </Tag>
  )
}
