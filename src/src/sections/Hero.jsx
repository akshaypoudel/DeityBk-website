import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import { GradientBlob, Button } from '../components/ui'
import { HeroTitle, SubHeading, Overline } from '../components/typography'

export default function Hero() {
  const { hero } = site
  const words = hero.rotatingWords
  const [i, setI] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [words.length])

  // Subtle spotlight that follows the cursor (skipped for reduced-motion).
  const handleMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* cursor-following spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(24rem 24rem at var(--mx, 50%) var(--my, 30%), rgb(var(--accent) / 0.14), transparent 70%)',
        }}
      />
      {/* background accents */}
      <GradientBlob className="left-1/2 top-[-10%] h-[38rem] w-[38rem] -translate-x-1/2 animate-float opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--border)/0.7) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--border)/0.7) 1px,transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      <div className="container-x flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.badge}
        </motion.span>

        <HeroTitle
          as={motion.h1}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl"
        >
          {hero.titleLead}{' '}
          <span className="relative inline-flex min-w-[1ch] justify-center">
            {/* keyed rotating word (entrance only — no AnimatePresence) */}
            <motion.span
              key={words[i]}
              initial={{ opacity: 0, y: 20, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gradient"
            >
              {words[i]}
            </motion.span>
          </span>
          <br className="hidden sm:block" /> {hero.titleTail}
        </HeroTitle>

        <SubHeading
          as={motion.p}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl"
        >
          {hero.subtitle}
        </SubHeading>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Button as={Link} to={hero.primaryCta.to}>
            {hero.primaryCta.label} <ArrowRight size={16} />
          </Button>
          <Button as={Link} to={hero.secondaryCta.to} variant="ghost">
            <Sparkles size={16} /> {hero.secondaryCta.label}
          </Button>
        </motion.div>

        {/* trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full"
        >
          <Overline>Trusted by teams at</Overline>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {hero.trustedBy.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-muted transition-colors hover:text-fg"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
