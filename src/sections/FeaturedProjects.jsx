import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/ProjectCard'

// Slugs of the projects to spotlight on the home page - the branded client
// work converts better than the generic entries at the top of the list.
const FEATURED = ['suggestcollege', 'famcure', 'trunri-tourism']

export default function FeaturedProjects() {
  const featured = FEATURED.map((slug) => site.projects.find((p) => p.slug === slug)).filter(Boolean)
  const projects = featured.length === 3 ? featured : site.projects.slice(0, 3)

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we're proud of"
            subtitle="A glimpse of the products we've shipped for clients around the world."
          />
          <Reveal>
            <Link to="/projects" className="btn-ghost shrink-0">
              View all projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
