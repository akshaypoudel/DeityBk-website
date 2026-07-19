import { memo } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { slugify } from '../lib/projects'
import { Card, IconWrapper } from './ui'
import { CardHeading, SmallText, Label } from './typography'

// Shared service card (home preview + services page). Whole card links to
// the service's own detail page.
function ServiceCard({ service, showFeatures = false }) {
  const slug = service.slug || slugify(service.title)
  return (
    <Card as={Link} to={`/services/${slug}`} hover className="group relative flex h-full flex-col overflow-hidden p-7">
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <IconWrapper size="lg" className="transition-transform group-hover:scale-110">
        <Icon name={service.icon} size={26} />
      </IconWrapper>

      <CardHeading className="mt-6 text-xl">{service.title}</CardHeading>
      <SmallText className="mt-2.5">{service.description}</SmallText>

      {showFeatures && service.features?.length > 0 && (
        <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-fg/90">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-accent">
                <Check size={13} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      )}

      <Label className="mt-auto inline-flex items-center gap-1.5 pt-6 text-accent">
        Learn more
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Label>
    </Card>
  )
}

export default memo(ServiceCard)
