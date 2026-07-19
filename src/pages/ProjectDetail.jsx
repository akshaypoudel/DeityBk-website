import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { getProjectBySlug, relatedProjects } from '../lib/projects'
import Seo from '../components/Seo'
import { Reveal, GradientBlob, Card, Button, Tag } from '../components/ui'
import { HeroTitle, SectionHeading, CardHeading, Paragraph } from '../components/typography'
import VideoEmbed from '../components/VideoEmbed'
import ProjectCard from '../components/ProjectCard'
import CTA from '../sections/CTA'

function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
      <HeroTitle gradient className="text-6xl">Oops</HeroTitle>
      <SectionHeading as="h1" className="mt-4 text-2xl">Project not found</SectionHeading>
      <Paragraph className="mt-2">We couldn't find the project you're looking for.</Paragraph>
      <Button as={Link} to="/projects" className="mt-6">
        <ArrowLeft size={16} /> Back to projects
      </Button>
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFound />

  const related = relatedProjects(project)
  const hasLive = project.liveLink && project.liveLink !== '#'

  return (
    <>
      <Seo title={project.title} description={project.description} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
        <GradientBlob className="left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 opacity-50" />
        <div className="container-x">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All projects
            </Link>
          </Reveal>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <span className="eyebrow mb-4">{project.category}</span>
              </Reveal>
              <Reveal delay={0.05}>
                <HeroTitle className="max-w-3xl text-4xl sm:text-6xl">{project.title}</HeroTitle>
              </Reveal>
              <Reveal delay={0.1}>
                <Paragraph className="mt-4 max-w-2xl">{project.description}</Paragraph>
              </Reveal>
            </div>

            {hasLive && (
              <Reveal delay={0.15}>
                <Button as="a" href={project.liveLink} target="_blank" rel="noreferrer" className="shrink-0">
                  Visit live <ArrowUpRight size={16} />
                </Button>
              </Reveal>
            )}
          </div>

          {/* meta row */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-5 text-sm">
              {project.client && (
                <div>
                  <div className="text-muted">Client</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
              )}
              {project.year && (
                <div>
                  <div className="text-muted">Year</div>
                  <div className="font-semibold">{project.year}</div>
                </div>
              )}
              <div>
                <div className="text-muted">Service</div>
                <div className="font-semibold">{project.category}</div>
              </div>
              {project.tech?.length > 0 && (
                <div>
                  <div className="text-muted">Tech</div>
                  <div className="font-semibold">{project.tech.join(', ')}</div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-4">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      {project.overview?.length > 0 && (
        <section className="py-12">
          <div className="container-x max-w-3xl">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">Overview</SectionHeading>
            </Reveal>
            {project.overview.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <Paragraph className="mt-4">{p}</Paragraph>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Video */}
      {project.video && (
        <section className="py-8">
          <div className="container-x max-w-4xl">
            <Reveal>
              <VideoEmbed url={project.video} title={`${project.title} demo`} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <section className="py-12">
          <div className="container-x grid gap-6 md:grid-cols-2">
            {project.challenge && (
              <Reveal>
                <Card className="h-full p-7">
                  <CardHeading className="text-xl">The challenge</CardHeading>
                  <Paragraph className="mt-3">{project.challenge}</Paragraph>
                </Card>
              </Reveal>
            )}
            {project.solution && (
              <Reveal delay={0.08}>
                <Card className="h-full p-7">
                  <CardHeading className="text-xl">Our solution</CardHeading>
                  <Paragraph className="mt-3">{project.solution}</Paragraph>
                </Card>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Results */}
      {project.results?.length > 0 && (
        <section className="py-8">
          <div className="container-x">
            <div className="glass grid grid-cols-1 gap-8 rounded-3xl px-6 py-10 shadow-card sm:grid-cols-3 sm:px-12">
              {project.results.map((r, i) => (
                <Reveal key={i} delay={i * 0.1} className="text-center">
                  <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">
                    {r.value}
                  </div>
                  <Paragraph className="mt-2 text-sm font-medium">{r.label}</Paragraph>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery?.length > 0 && (
        <section className="py-12">
          <div className="container-x">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">Gallery</SectionHeading>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal key={i} delay={(i % 2) * 0.08}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      {project.tech?.length > 0 && (
        <section className="py-8">
          <div className="container-x">
            <Reveal>
              <CardHeading className="text-lg">Built with</CardHeading>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-fg">
                    <Check size={14} className="text-accent" /> {t}
                  </Tag>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-12">
          <div className="container-x">
            <Reveal>
              <SectionHeading className="text-2xl sm:text-3xl">More {project.category} work</SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProjectCard project={p} />
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
