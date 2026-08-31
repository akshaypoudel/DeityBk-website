import { site } from '../data/site'
import { SectionHeading, Reveal } from '../components/ui'
import { CardHeading, SmallText } from '../components/typography'
import Icon from '../components/Icon'

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="How we work"
          title="A simple, transparent process"
          subtitle="Four clear stages that take your idea from concept to a product in the wild."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {site.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative text-center md:text-left">
              <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-border bg-secondary text-accent shadow-card md:mx-0">
                <Icon name={step.icon} size={24} />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-on-accent">
                  {i + 1}
                </span>
              </div>
              <CardHeading className="mt-5 text-lg">{step.title}</CardHeading>
              <SmallText className="mt-2">{step.text}</SmallText>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
