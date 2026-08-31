import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import ContactForm from '../sections/ContactForm'

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Tell us about your project — we usually reply within one business day." />
      <PageHeader
        eyebrow="Contact"
        title="Let's start something great"
        subtitle="Whether you have a detailed brief or just a spark of an idea, we'd love to hear from you."
      />
      <ContactForm />
      <div className="h-16" />
    </>
  )
}
