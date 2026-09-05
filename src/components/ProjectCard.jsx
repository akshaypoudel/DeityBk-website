import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { slugify, projectImages } from '../lib/projects'
import { Card, Tag } from './ui'
import { CardHeading, SmallText } from './typography'
import ProjectImageSlider from './ProjectImageSlider'

function ProjectCard({ project }) {
  const slug = project.slug || slugify(project.title)
  const images = projectImages(project)
  // Prefer an explicit `stack` label; otherwise fall back to the tags/tech list.
  const stack = project.stack || (project.tech || project.tags || []).join(' · ')

  return (
    <Card as={Link} to={`/projects/${slug}`} hover className="group relative flex h-full flex-col overflow-hidden">
      {/* Image slider - auto-playing, pauses on hover, manual controls. */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <ProjectImageSlider images={images} alt={project.title} />
        {/* readability gradient + category badge + open-arrow, above the slider */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-overlay to-transparent opacity-80" />
        <span className="absolute left-4 top-4 z-[6] rounded-full border border-border bg-overlay px-3 py-1 text-xs font-semibold text-on-accent backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 z-[6] grid h-10 w-10 place-items-center rounded-full bg-on-accent text-accent opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading>{project.title}</CardHeading>
        {stack && (
          <SmallText className="mt-1 font-medium text-accent">{stack}</SmallText>
        )}
        <SmallText className="mt-1.5 flex-1">{project.description}</SmallText>
        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

export default memo(ProjectCard)
