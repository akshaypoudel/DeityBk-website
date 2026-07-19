import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../data/site'
import Logo from './Logo'
import Icon from './Icon'
import { Overline, SmallText } from './typography'

export default function Footer() {
  const year = 2026 // template default; update as you like

  return (
    <footer className="relative mt-24 border-t border-border bg-surface/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">{site.footer.blurb}</p>
          <div className="mt-5 flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {site.footer.columns.map((col) => (
          <div key={col.title}>
            <Overline as="h4" className="text-fg">{col.title}</Overline>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <Overline as="h4" className="text-fg">Get in touch</Overline>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2.5 hover:text-brand">
                <Mail size={16} className="text-brand" /> {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone}`} className="flex items-center gap-2.5 hover:text-brand">
                <Phone size={16} className="text-brand" /> {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" /> {site.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.brand.name}. All rights reserved.
          </p>
          <p>
            Built with <span className="text-brand">♥</span> — a Nova Labs template.
          </p>
        </div>
      </div>
    </footer>
  )
}
