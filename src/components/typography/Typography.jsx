import { cn } from '../../utils/cn'

/**
 * Typography system — the ONLY place text styles are defined.
 * Never write raw <h1 className="text-5xl font-bold ..."> in the app; use
 * these instead so sizing, weight, leading, tracking, colour and spacing
 * stay consistent everywhere.
 *
 * Every component accepts:
 *   as         override the rendered element (semantic control)
 *   gradient   render the text with the accent gradient
 *   className  extra classes (spacing, alignment, overrides)
 *   ...rest    any other props (id, style, onClick…)
 *
 * Usage:  <MainHeading>About Us</MainHeading>
 */
function make(defaultTag, base) {
  const Component = ({ as, gradient = false, className, children, ...rest }) => {
    const Tag = as || defaultTag
    return (
      <Tag className={cn(base, gradient && 'text-gradient', className)} {...rest}>
        {children}
      </Tag>
    )
  }
  return Component
}

// —— Display / headings ——
export const HeroTitle = make(
  'h1',
  'font-display font-bold tracking-tight text-fg text-4xl leading-[1.08] sm:text-6xl md:text-7xl',
)
export const MainHeading = make(
  'h1',
  'font-display font-bold tracking-tight text-fg text-4xl leading-tight sm:text-5xl',
)
export const SectionHeading = make(
  'h2',
  'font-display font-bold tracking-tight text-fg text-3xl leading-tight sm:text-4xl md:text-[2.6rem]',
)
export const CardHeading = make(
  'h3',
  'font-display font-semibold text-fg text-lg sm:text-xl leading-snug',
)
export const SubHeading = make(
  'p',
  'text-base sm:text-lg text-muted leading-relaxed',
)

// —— Body ——
export const Paragraph = make('p', 'text-base text-muted leading-relaxed')
export const SmallText = make('p', 'text-sm text-muted leading-relaxed')
export const Caption = make('span', 'text-xs text-muted leading-normal')
export const Label = make('span', 'text-sm font-medium text-fg')
export const Overline = make(
  'span',
  'inline-block text-xs font-semibold uppercase tracking-widest text-muted',
)
