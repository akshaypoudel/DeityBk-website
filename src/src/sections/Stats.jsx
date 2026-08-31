import { site } from '../data/site'
import { Reveal, AnimatedCounter, GlassCard } from '../components/ui'
import { SmallText } from '../components/typography'

export default function Stats() {
  return (
    <section className="py-12">
      <div className="container-x">
        <GlassCard className="relative overflow-hidden px-6 py-12 sm:px-12">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                'radial-gradient(40rem 20rem at 20% 0%, rgb(var(--accent)/0.14), transparent 60%), radial-gradient(40rem 20rem at 90% 100%, rgb(var(--accent)/0.12), transparent 60%)',
            }}
          />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center">
                <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <SmallText className="mt-2 font-medium">{s.label}</SmallText>
              </Reveal>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
