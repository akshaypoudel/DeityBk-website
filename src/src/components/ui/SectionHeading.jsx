import Reveal from './Reveal'
import { cn } from '../../utils/cn'
import { SectionHeading as Heading, SubHeading } from '../typography'

// Section intro block: eyebrow + heading + optional subtitle.
// Composes the typography system so all section headers stay consistent.
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn('max-w-2xl', center && 'mx-auto text-center')}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Heading>{title}</Heading>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <SubHeading className="mt-4">{subtitle}</SubHeading>
        </Reveal>
      )}
    </div>
  )
}
