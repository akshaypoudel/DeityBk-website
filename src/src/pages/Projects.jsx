import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import ProjectCard from '../components/ProjectCard'
import { Chip } from '../components/ui'
import { slugify } from '../lib/projects'
import CTA from '../sections/CTA'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(site.projects.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? site.projects : site.projects.filter((p) => p.category === active)

  return (
    <>
      <Seo title="Projects" description="A selection of the mobile apps, software and websites we've designed and built for clients." />
      <PageHeader
        eyebrow="Our work"
        title="Products we've designed & built"
        subtitle="Filter by category to explore a selection of our favourite projects."
      />

      <section className="pb-8">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Chip key={c} active={active === c} onClick={() => setActive(c)}>
                {active === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent shadow-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {c}
              </Chip>
            ))}
          </div>

          {/* Grid — the filtered list is rendered directly (no
              AnimatePresence exit) so filtered-out cards are always removed.
              `key={active}` re-mounts the grid on filter change so the new
              set fades in. */}
          <div key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug || slugify(p.title)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.3) }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
