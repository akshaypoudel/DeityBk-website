import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { site } from '../data/site'
import { Reveal, Select, Card, Button, Input, Textarea, IconWrapper } from '../components/ui'
import { SectionHeading, Paragraph, Label, SmallText } from '../components/typography'
import Icon from '../components/Icon'

const initial = { name: '', email: '', service: '', message: '' }

export default function ContactForm() {
  const { contact } = site
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off'
    if (!form.message.trim()) e.message = 'Tell us a little about your project'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')

    // ── INTEGRATION POINT ────────────────────────────────
    // If you set `contact.formEndpoint` in src/data/site.js (e.g. a
    // Formspree URL), submissions POST there. Otherwise we fall back to
    // opening the visitor's email client with the message pre-filled.
    try {
      if (contact.formEndpoint) {
        // Send to a Google Apps Script web app (which appends to a Sheet).
        // We use URLSearchParams (form-encoded) + mode:'no-cors' so the
        // browser sends a "simple" request with NO CORS preflight — Apps
        // Script accepts it and reads the values from e.parameter.
        // The response is opaque (unreadable) by design, so a resolved
        // fetch is treated as success.
        const params = new URLSearchParams({
          name: form.name,
          email: form.email,
          service: form.service || '',
          message: form.message,
          // handy extra columns for your sheet:
          page: typeof window !== 'undefined' ? window.location.href : '',
          submittedAt: new Date().toISOString(),
        })
        await fetch(contact.formEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          body: params,
        })
      } else {
        // No endpoint configured → open the visitor's email app instead.
        const subject = encodeURIComponent(`New project enquiry from ${form.name}`)
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || '—'}\n\n${form.message}`,
        )
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
      }
      setStatus('success')
      setForm(initial)
    } catch {
      // Network failed → fall back to opening the email app.
      window.location.href = `mailto:${contact.email}`
      setStatus('idle')
    }
  }

  return (
    <section className="py-8">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: info */}
        <Reveal>
          <Card className="h-full p-8">
            <span className="eyebrow mb-4">{contact.eyebrow}</span>
            <SectionHeading>{contact.title}</SectionHeading>
            <Paragraph className="mt-3">{contact.subtitle}</Paragraph>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
                { icon: Phone, label: contact.phone, href: `tel:${contact.phone}` },
                { icon: MapPin, label: contact.address, href: null },
              ].map(({ icon: I, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <IconWrapper tone="soft" size="sm">
                    <I size={19} />
                  </IconWrapper>
                  {href ? (
                    <a href={href} className="text-sm text-fg transition-colors hover:text-accent">
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-fg">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-2 border-t border-border pt-6">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={s.icon} size={17} />
                </a>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <Card as="form" onSubmit={handleSubmit} noValidate className="p-8">
            {status === 'success' ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="text-accent" size={56} />
                <SectionHeading as="h3" className="mt-4 text-2xl">Message sent!</SectionHeading>
                <Paragraph className="mt-2 max-w-sm">
                  Thanks for reaching out — we'll get back to you within one business day.
                </Paragraph>
                <Button type="button" variant="ghost" onClick={() => setStatus('idle')} className="mt-6">
                  Send another
                </Button>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label as="label" htmlFor="name" className="mb-1.5 block">Name</Label>
                    <Input
                      id="name"
                      invalid={!!errors.name}
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={set('name')}
                    />
                    {errors.name && <SmallText className="mt-1 text-xs text-danger">{errors.name}</SmallText>}
                  </div>
                  <div>
                    <Label as="label" htmlFor="email" className="mb-1.5 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      invalid={!!errors.email}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                    {errors.email && <SmallText className="mt-1 text-xs text-danger">{errors.email}</SmallText>}
                  </div>
                </div>

                <div>
                  <Label as="label" htmlFor="service" className="mb-1.5 block">
                    What do you need? <span className="text-muted">(optional)</span>
                  </Label>
                  <Select
                    id="service"
                    placeholder="Select a service…"
                    value={form.service}
                    onChange={(val) => setForm((f) => ({ ...f, service: val }))}
                    options={site.services.map((s) => s.title)}
                  />
                </div>

                <div>
                  <Label as="label" htmlFor="message" className="mb-1.5 block">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    invalid={!!errors.message}
                    placeholder="Tell us about your project, timeline and goals…"
                    value={form.message}
                    onChange={set('message')}
                  />
                  {errors.message && <SmallText className="mt-1 text-xs text-danger">{errors.message}</SmallText>}
                </div>

                <Button type="submit" size="full" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
