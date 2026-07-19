import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import { Reveal } from '../components/ui'
import { SectionHeading, Paragraph } from '../components/typography'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <div className="bg-accent-gradient relative overflow-hidden rounded-[2rem] border border-border px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            {/* decorative rings (on-accent token, no hardcoded colour) */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--on-accent) 50%, transparent) 0, transparent 35%), radial-gradient(circle at 80% 80%, color-mix(in srgb, var(--on-accent) 40%, transparent) 0, transparent 35%)',
              }}
            />
            <SectionHeading className="relative mx-auto max-w-2xl text-on-accent">
              Let's build something remarkable together.
            </SectionHeading>
            <Paragraph className="relative mx-auto mt-4 max-w-xl text-on-accent opacity-90">
              Tell us about your idea and we'll show you how we can bring it to life.
            </Paragraph>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-on-accent px-6 py-3 text-sm font-semibold text-accent shadow-card transition-all hover:-translate-y-0.5"
              >
                Start a project <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-on-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-on-accent hover:text-accent"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
