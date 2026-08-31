import { User } from 'lucide-react'
import { site } from '../data/site'
import { SectionHeading, Reveal, Card } from '../components/ui'
import { CardHeading, SmallText } from '../components/typography'
import Icon from '../components/Icon'

export default function Team() {
  const team = site.team || []
  if (team.length === 0) return null

  return (
    <section id="team" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Our team"
          title="Meet the people behind the work"
          subtitle="The people who will design, build and ship your product — you work with them directly."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <Card hover className="group h-full p-6 text-center">
                {/* Photo, or a person icon if no avatar is set */}
                <div className="mx-auto grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-brand-soft ring-2 ring-border transition-transform group-hover:scale-105">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={40} className="text-brand" />
                  )}
                </div>

                <CardHeading className="mt-5 text-lg">{member.name}</CardHeading>
                <SmallText className="mt-1 text-accent">{member.role}</SmallText>

                {member.socials?.length > 0 && (
                  <div className="mt-4 flex justify-center gap-2">
                    {member.socials.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        aria-label={`${member.name} ${s.icon}`}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon name={s.icon} size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
