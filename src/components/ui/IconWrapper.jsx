import { cn } from '../../utils/cn'

// The recurring icon tile. `tone`: gradient (accent gradient, white icon) or
// soft (accent-soft bg, accent icon). `size`: sm | md | lg.
const sizes = {
  sm: 'h-10 w-10 rounded-xl',
  md: 'h-12 w-12 rounded-2xl',
  lg: 'h-14 w-14 rounded-2xl',
}

export default function IconWrapper({ tone = 'gradient', size = 'md', className, children, ...rest }) {
  const tones = {
    gradient: 'bg-accent-gradient text-on-accent shadow-glow',
    soft: 'bg-accent-soft text-accent',
  }
  return (
    <span
      className={cn('grid shrink-0 place-items-center', sizes[size], tones[tone], className)}
      {...rest}
    >
      {children}
    </span>
  )
}
