import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/ServiceCard'
import Process from '../sections/Process'
import CTA from '../sections/CTA'

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Mobile apps, software, websites, design, strategy and AI — everything you need to ship great products." />
      <PageHeader
        eyebrow="Services"
        title="Everything you need to ship great products"
        subtitle="Design, engineering and strategy under one roof — pick a single service or let us take you end to end."
      />

      <section className="pb-8">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} showFeatures />
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <CTA />
    </>
  )
}
