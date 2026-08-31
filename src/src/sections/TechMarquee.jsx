import { site } from '../data/site'
import Reveal from '../components/ui/Reveal'
import Marquee from '../components/ui/Marquee'

export default function TechMarquee() {
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Our toolkit
          </p>
        </Reveal>
      </div>
      <Marquee items={site.tech} />
    </section>
  )
}
