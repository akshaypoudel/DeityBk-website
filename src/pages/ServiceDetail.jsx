import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { getServiceBySlug, servicesWithSlugs } from '../lib/services'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import { Reveal, GradientBlob, Card, IconWrapper, Button } from '../components/ui'
import { HeroTitle, SectionHeading, CardHeading, Paragraph, SmallText } from '../components/typography'
import Process from '../sections/Process'
import CTA from '../sections/CTA'

function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
      <HeroTitle gradient className="text-6xl">Oops</HeroTitle>
      <SectionHeading as="h1" className="mt-4 text-2xl">Service not found</SectionHeading>
      <Button as={Link} to="/services" className="mt-6">
        <ArrowLeft size={16} /> All services
      </Button>
    </section>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <NotFound />

  const others = servicesWithSlugs.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Seo title={service.title} description={service.description} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
        <GradientBlob className="left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 opacity-50" />
        <div className="container-x">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All services
            </Link>
          </Reveal>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <IconWrapper size="lg" className="h-16 w-16">
                  <Icon name={service.icon} size={30} />
                </IconWrapper>
              </Reveal>
              <Reveal delay={0.05}>
                <HeroTitle className="mt-6 text-4xl sm:text-6xl">{service.title}</HeroTitle>
              </Reveal>
              <Reveal delay={0.1}>
                <Paragraph className="mt-4 text-lg">{service.description}</Paragraph>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Button as={Link} to="/contact" className="shrink-0">
                Start a project <ArrowRight size={16} />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      {service.overview?.length > 0 && (
        <section className="py-12">
          <div className="container-x max-w-3xl">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">Overview</SectionHeading>
            </Reveal>
            {service.overview.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <Paragraph className="mt-4">{p}</Paragraph>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* What's included */}
      {service.included?.length > 0 && (
        <section className="py-12">
          <div className="container-x">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">What's included</SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {service.included.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.08}>
                  <Card className="flex h-full items-start gap-4 p-6">
                    <IconWrapper tone="soft" size="sm">
                      <Check size={18} strokeWidth={3} />
                    </IconWrapper>
                    <div>
                      <CardHeading className="text-base">{item.title}</CardHeading>
                      <SmallText className="mt-1">{item.text}</SmallText>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Process />

      {/* Other services */}
      {others.length > 0 && (
        <section className="py-12">
          <div className="container-x">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">Other services</SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Card as={Link} to={`/services/${s.slug}`} hover className="group flex items-center gap-4 p-5">
                    <IconWrapper tone="soft" size="sm" className="h-11 w-11">
                      <Icon name={s.icon} size={20} />
                    </IconWrapper>
                    <CardHeading className="text-sm">{s.title}</CardHeading>
                    <ArrowRight
                      size={16}
                      className="ml-auto text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
