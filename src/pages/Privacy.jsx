import Seo from '../components/Seo'
import { site } from '../data/site'
import { SectionHeading, Paragraph } from '../components/typography'

const updated = 'August 29, 2026'

function Block({ title, children }) {
  return (
    <div className="mt-10">
      <SectionHeading as="h2" className="text-xl">{title}</SectionHeading>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  )
}

export default function Privacy() {
  return (
    <section className="container-x mx-auto max-w-3xl pt-32 pb-20">
      <Seo
        title="Privacy Policy"
        description="How DeityBK Studio collects, uses, and protects the information you share with us."
      />
      <SectionHeading as="h1" className="text-3xl">Privacy Policy</SectionHeading>
      <Paragraph className="mt-2 text-sm">Last updated: {updated}</Paragraph>

      <Block title="Who we are">
        <Paragraph>
          {site.brand.name} ("we", "us") is a digital product studio that designs and builds
          mobile apps, software, and websites. This website, {`https://deitybk.online`}, is how
          prospective clients learn about our work and get in touch.
        </Paragraph>
      </Block>

      <Block title="What we collect">
        <Paragraph>
          When you submit our contact form we collect the details you provide: your name, email
          address, phone / WhatsApp number, the service you are interested in, and your message.
          We also record the page you submitted from and the time of submission.
        </Paragraph>
        <Paragraph>
          If you contact us by email, phone, or WhatsApp, we receive the contact details and
          content you choose to share through those channels.
        </Paragraph>
      </Block>

      <Block title="How we use it">
        <Paragraph>
          We use your details solely to respond to your enquiry and discuss your project. We do
          not sell, rent, or share your personal information with third parties for their
          marketing.
        </Paragraph>
      </Block>

      <Block title="Where it is stored">
        <Paragraph>
          Form submissions are stored securely in a private Google Sheet accessible only to our
          team, via Google's infrastructure. Email and WhatsApp conversations are stored in the
          respective services we use to communicate with you.
        </Paragraph>
      </Block>

      <Block title="Cookies & analytics">
        <Paragraph>
          This site may use Google services (such as Google Analytics and Google Ads conversion
          tracking) to understand how visitors find and use the site. These services may set
          cookies and collect usage data such as pages visited and approximate location. You can
          control cookies through your browser settings. We do not use this data to identify you
          personally.
        </Paragraph>
      </Block>

      <Block title="Your choices">
        <Paragraph>
          You can ask us at any time to see, correct, or delete the information we hold about
          you. Email us at{' '}
          <a href={`mailto:${site.contact.email}`} className="text-accent underline underline-offset-2">
            {site.contact.email}
          </a>{' '}
          and we will act on your request promptly.
        </Paragraph>
      </Block>

      <Block title="Contact">
        <Paragraph>
          Questions about this policy? Reach us at{' '}
          <a href={`mailto:${site.contact.email}`} className="text-accent underline underline-offset-2">
            {site.contact.email}
          </a>{' '}
          or {site.contact.phone}.
        </Paragraph>
      </Block>
    </section>
  )
}
