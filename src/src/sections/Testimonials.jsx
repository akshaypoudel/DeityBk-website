import { Quote, Star } from 'lucide-react'
import { site } from '../data/site'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Kind words"
          title="Loved by the teams we work with"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card-surface flex h-full flex-col p-7 hover:border-brand/40">
                <Quote className="text-brand/40" size={30} />
                <div className="mt-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-fg/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brand/30"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
