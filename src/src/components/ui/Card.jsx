import { cn } from '../../utils/cn'

// Base surface card. `hover` adds the lift + accent border interaction.
export default function Card({ as: Tag = 'div', hover = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-3xl border border-border bg-secondary/70 backdrop-blur-sm transition-all duration-300',
        hover && 'hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-card',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
