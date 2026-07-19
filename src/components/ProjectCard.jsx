import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { slugify } from '../lib/projects'
import { Card, Tag } from './ui'
import { CardHeading, SmallText } from './typography'

function ProjectCard({ project }) {
  const slug = project.slug || slugify(project.title)
  return (
    <Card as={Link} to={`/projects/${slug}`} hover className="group relative block overflow-hidden">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay to-transparent opacity-90" />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-overlay px-3 py-1 text-xs font-semibold text-on-accent backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-on-accent text-accent opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="p-6">
        <CardHeading>{project.title}</CardHeading>
        <SmallText className="mt-1.5">{project.description}</SmallText>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default memo(ProjectCard)
