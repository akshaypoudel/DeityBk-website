import { useState } from 'react'
import { Plus } from 'lucide-react'
import { site } from '../data/site'
import { SectionHeading, Reveal } from '../components/ui'
import { CardHeading } from '../components/typography'

function Item({ q, a, open, onToggle }) {
  return (
    <div className="card-surface overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <CardHeading as="span" className="text-base sm:text-lg">{q}</CardHeading>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-brand transition-transform duration-300 ${
            open ? 'rotate-45 bg-brand-soft' : ''
          }`}
        >
          <Plus size={18} />
        </span>
      </button>
      {/* Pure-CSS height animation via grid-rows 0fr→1fr (no unmount needed) */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const faqs = site.faqs || []
  const [openIdx, setOpenIdx] = useState(0)
  if (faqs.length === 0) return null

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you might be wondering before we start working together."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
