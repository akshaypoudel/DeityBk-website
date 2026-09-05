import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, MailCheck, MessageCircle, PhoneCall, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { site } from '../data/site'
import { Button, Card } from '../components/ui'
import { SectionHeading, Paragraph, SmallText } from '../components/typography'
import { track } from '../utils/track'

const steps = [
  {
    icon: MailCheck,
    title: 'Message received',
    text: 'Your enquiry just landed in our inbox and our team has been notified.',
  },
  {
    icon: PhoneCall,
    title: 'We reply within 1 business day',
    text: "We'll reach out on the email or phone number you shared to talk details.",
  },
  {
    icon: MessageCircle,
    title: 'Free consultation',
    text: 'We discuss your goals, suggest an approach, and give you a clear quote.',
  },
]

export default function ThankYou() {
  // Lead event for analytics/ads. No-ops until the Google tag is installed;
  // once it is, every landing here counts as a form-submission lead.
  useEffect(() => {
    track('generate_lead', { method: 'contact_form' })
  }, [])

  const { whatsapp } = site
  const waNumber = (whatsapp?.number || '').replace(/\D/g, '')
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(
        "Hi DeityBK Studio! I just sent a message through your website - happy to chat here too.",
      )}`
    : ''

  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-20 text-center">
      {/* noindex: only people who just submitted the form should land here
          (it's the Google Ads conversion page) */}
      <Seo noindex title="Thank you" description="Your message has been sent - we'll get back to you within one business day." />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/20 [animation-duration:2.5s]" />
        <span className="grid h-20 w-20 place-items-center rounded-full bg-accent-soft">
          <CheckCircle2 className="text-accent" size={44} />
        </span>
      </motion.div>

      <SectionHeading as="h1" className="mt-8 text-3xl sm:text-4xl">
        Thank you - message received!
      </SectionHeading>
      <Paragraph className="mt-3 max-w-md">
        We've got your message. Here's what happens next:
      </Paragraph>

      {/* What happens next */}
      <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {steps.map(({ icon: I, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
          >
            <Card className="h-full p-6 text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <I size={18} />
                </span>
                <SmallText className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
                  Step {i + 1}
                </SmallText>
              </div>
              <div className="mt-3 font-display font-semibold text-fg">{title}</div>
              <SmallText className="mt-1.5 block leading-relaxed">{text}</SmallText>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* In a hurry? -> WhatsApp */}
      {waHref && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-10"
        >
          <Paragraph className="text-sm">In a hurry? Skip the wait and chat with us right now:</Paragraph>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button
              as="a"
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => track('whatsapp_click', { location: 'thank_you' })}
              className="bg-[#25D366] text-white hover:opacity-90"
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </Button>
            <Button as={Link} to="/projects" variant="ghost">
              View our work <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      )}

      <SmallText className="mt-10 text-muted">
        Sent by mistake or want to add something?{' '}
        <Link to="/contact" className="text-accent underline underline-offset-2">
          Send another message
        </Link>
      </SmallText>
    </section>
  )
}
