import { site } from '../data/site'
import { Reveal, GradientBlob, Card, IconWrapper } from '../components/ui'
import { SectionHeading, CardHeading, Paragraph, SmallText } from '../components/typography'
import Icon from '../components/Icon'

export default function About() {
  const { about } = site
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <GradientBlob className="right-[-10%] top-1/3 h-72 w-72 opacity-40" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="eyebrow mb-4">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading className="sm:text-4xl">{about.title}</SectionHeading>
          </Reveal>
          {about.body.map((p, idx) => (
            <Reveal key={idx} delay={0.1 + idx * 0.05}>
              <Paragraph className="mt-4">{p}</Paragraph>
            </Reveal>
          ))}
        </div>

        {/* Right: highlight cards */}
        <div className="grid gap-4">
          {about.highlights.map((h, idx) => (
            <Reveal key={h.label} delay={idx * 0.08}>
              <Card hover className="group flex items-start gap-4 p-6">
                <IconWrapper tone="soft" className="transition-transform group-hover:scale-110">
                  <Icon name={h.icon} size={22} />
                </IconWrapper>
                <div>
                  <CardHeading className="text-base">{h.label}</CardHeading>
                  <SmallText className="mt-1">{h.text}</SmallText>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
