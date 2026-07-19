import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { SectionHeading, SmallText } from '../components/typography'
import { privacyPolicies, privacyPolicySlugs } from '../data/privacyPolicies'

function parsePolicyHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const header = doc.querySelector('.policy-header')
  const content = doc.querySelector('.policy-content')
  const lastUpdated = doc.querySelector('.last-updated')

  return {
    title: header?.querySelector('h1, h2, h3')?.textContent?.trim() || 'Privacy Policy',
    effectiveDate: header?.querySelector('p')?.textContent?.trim() || '',
    contentHtml: content?.innerHTML?.trim() || '',
    footerHtml: lastUpdated?.innerHTML?.trim() || '',
  }
}

function PolicyNotFound() {
  return (
    <>
      <Seo title="Privacy Policy" description="App privacy policy page." />
      <PageHeader
        eyebrow="Privacy policy"
        title="Policy not found"
        subtitle="The requested app policy does not exist in this project."
      />
      <Container className="pb-20">
        <div className="card-surface rounded-[2rem] p-8 sm:p-10">
          <SectionHeading as="h2" className="text-2xl sm:text-3xl">
            Available policies
          </SectionHeading>
          <div className="mt-6 flex flex-wrap gap-3">
            {privacyPolicySlugs.map((policySlug) => (
              <Button
                key={policySlug}
                as={Link}
                to={`/privacy-policy/${policySlug}`}
                variant="outline"
                size="sm"
              >
                {policySlug}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default function PrivacyPolicy() {
  const { slug = '' } = useParams()
  const source = privacyPolicies[slug]

  if (!source) {
    return <PolicyNotFound />
  }

  const policy = parsePolicyHtml(source)

  return (
    <>
      <Seo
        title={policy.title}
        description={`${policy.title} on the Nova Labs website.`}
      />

      <PageHeader
        eyebrow="Privacy policy"
        title={policy.title}
        subtitle={policy.effectiveDate}
      />

      <Container className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary/60 p-6 shadow-soft backdrop-blur-sm sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="mb-8 flex flex-col gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent">
                <FileText size={22} />
              </div>
              <div>
                <SectionHeading as="h1" className="text-2xl sm:text-3xl">
                  {policy.title}
                </SectionHeading>
                {policy.effectiveDate ? (
                  <SmallText className="mt-1">{policy.effectiveDate}</SmallText>
                ) : null}
              </div>
            </div>

            <Button as={Link} to="/" variant="outline" size="sm">
              <ArrowLeft size={16} />
              Back to home
            </Button>
          </div>

          <article
            className="policy-richtext rounded-[1.75rem] border border-border bg-primary/80 p-5 sm:p-8"
            dangerouslySetInnerHTML={{ __html: policy.contentHtml }}
          />

          {policy.footerHtml ? (
            <div
              className="policy-footer mt-6 rounded-[1.5rem] border border-border bg-primary/50 p-5 sm:p-6"
              dangerouslySetInnerHTML={{ __html: policy.footerHtml }}
            />
          ) : null}
        </div>
      </Container>
    </>
  )
}
