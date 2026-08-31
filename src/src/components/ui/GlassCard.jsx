import { cn } from '../../utils/cn'

// Glassmorphism card: translucent surface + heavy blur + soft shadow.
export default function GlassCard({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag
      className={cn('glass rounded-3xl shadow-card', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
