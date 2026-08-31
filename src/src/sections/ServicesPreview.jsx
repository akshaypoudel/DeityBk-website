import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPreview() {
  // Show the first 3 on the home page; full list lives on /services
  const services = site.services.slice(0, 3)

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Services built to move you forward"
            subtitle="From idea to launch, we cover every layer of the product journey."
          />
          <Reveal>
            <Link to="/services" className="btn-ghost shrink-0">
              All services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
