import { useRef, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react'
import { site } from '../data/site'
import { Reveal, Select, Card, Button, Input, Textarea, IconWrapper } from '../components/ui'
import { SectionHeading, Paragraph, Label, SmallText } from '../components/typography'
import Icon from '../components/Icon'
import { track } from '../utils/track'

const initial = { name: '', email: '', phone: '', service: '', message: '' }

// Unique id per submission attempt, used by the Apps Script to ignore
// duplicate retries. crypto.randomUUID needs a secure context (https or
// localhost), so keep a plain fallback for http previews and old browsers.
const newSubmissionId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`

export default function ContactForm() {
  const { contact } = site
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | error
  const navigate = useNavigate()
  // Held in a ref so a retry reuses the SAME id - that's what lets the
  // script recognise a retry and not write the lead twice. Only rotated
  // after a confirmed success.
  const submissionId = useRef(newSubmissionId())
  // Spam guards: bots fill the invisible "website" field and submit within
  // a couple of seconds; humans do neither.
  const honeypotRef = useRef(null)
  const mountedAt = useRef(Date.now())

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off'
    if (!form.phone.trim()) e.phone = 'Please enter your phone or WhatsApp number'
    else if (!/^[+\d][\d\s()-]{6,17}$/.test(form.phone.trim())) e.phone = 'That number looks off'
    if (!form.message.trim()) e.message = 'Tell us a little about your project'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // Bot check: honeypot filled, or submitted inhumanly fast → pretend
    // success without sending, so the bot learns nothing.
    if (honeypotRef.current?.value || Date.now() - mountedAt.current < 3000) {
      navigate('/thank-you')
      return
    }
    setStatus('sending')

    // ── INTEGRATION POINT ────────────────────────────────
    // If you set `contact.formEndpoint` in src/data/site.js (a Google Apps
    // Script web app URL), submissions POST there and become rows in your
    // Sheet. Otherwise we fall back to opening the visitor's email client
    // with the message pre-filled.
    try {
      if (contact.formEndpoint) {
        // Send to a Google Apps Script web app (which appends to a Sheet).
        // A URLSearchParams body is form-encoded, which makes this a "simple"
        // CORS request - no preflight, and Apps Script reads the values from
        // e.parameter. A web app deployed with access "Anyone" answers with
        // Access-Control-Allow-Origin: *, so we can READ the reply and tell
        // whether the row actually landed. (Do not add mode:'no-cors' here -
        // it makes the response opaque, so a 403 from a mis-deployed script
        // looks identical to success and submissions vanish silently.)
        const params = new URLSearchParams({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || '',
          message: form.message,
          // handy extra columns for your sheet:
          page: typeof window !== 'undefined' ? window.location.href : '',
          submittedAt: new Date().toISOString(),
          submissionId: submissionId.current,
        })
        const res = await fetch(contact.formEndpoint, { method: 'POST', body: params })
        if (!res.ok) throw new Error(`Endpoint responded ${res.status}`)
        const data = await res.json().catch(() => null)
        if (data && data.result !== 'success') {
          throw new Error(data.message || 'The sheet rejected the submission')
        }
      } else {
        // No endpoint configured → open the visitor's email app instead.
        const subject = encodeURIComponent(`New project enquiry from ${form.name}`)
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service || '-'}\n\n${form.message}`,
        )
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
      }
      // Confirmed landed - from here on, a new message is a new lead.
      submissionId.current = newSubmissionId()
      setForm(initial)
      // Dedicated confirmation page: /thank-you doubles as the Google Ads
      // conversion page (only reached after a confirmed submission).
      navigate('/thank-you')
    } catch (err) {
      // Couldn't reach the sheet. Say so and offer email - never pretend it
      // was delivered, and don't hijack the page with an automatic redirect.
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    `New project enquiry from ${form.name}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service || '-'}\n\n${form.message}`,
  )}`

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
                ...(contact.phones || [contact.phone]).map((num) => ({
                  icon: Phone,
                  label: num,
                  href: `tel:${num.replace(/[^\d+]/g, '')}`,
                })),
                { icon: MapPin, label: contact.address, href: null },
              ]
                .filter((item) => item.label)
                .map(({ icon: I, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <IconWrapper tone="soft" size="sm">
                    <I size={19} />
                  </IconWrapper>
                  {href ? (
                    <a
                      href={href}
                      onClick={
                        href.startsWith('tel:')
                          ? () => track('call_click', { location: 'contact_card' })
                          : undefined
                      }
                      className="text-sm text-fg transition-colors hover:text-accent"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-fg">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            {site.socials.length > 0 && (
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
            )}
          </Card>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <Card as="form" onSubmit={handleSubmit} noValidate className="p-8">
            <div className="grid gap-5">
                {status === 'error' && (
                  <div className="flex gap-3 rounded-xl border border-danger/30 bg-danger/5 p-4">
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-danger" />
                    <div>
                      <SmallText className="font-medium text-danger">
                        We couldn't send that just now.
                      </SmallText>
                      <SmallText className="mt-1 block text-muted">
                        Your message is still here - try again, or{' '}
                        <a href={mailtoHref} className="text-accent underline underline-offset-2">
                          email us directly
                        </a>
                        .
                      </SmallText>
                    </div>
                  </div>
                )}

                {/* Honeypot - invisible to people, tempting to bots */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label as="label" htmlFor="name" className="mb-1.5 block">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      invalid={!!errors.name}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={set('name')}
                    />
                    {errors.name && <SmallText id="name-error" role="alert" className="mt-1 text-xs text-danger">{errors.name}</SmallText>}
                  </div>
                  <div>
                    <Label as="label" htmlFor="email" className="mb-1.5 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      invalid={!!errors.email}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                    {errors.email && <SmallText id="email-error" role="alert" className="mt-1 text-xs text-danger">{errors.email}</SmallText>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label as="label" htmlFor="phone" className="mb-1.5 block">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      invalid={!!errors.phone}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set('phone')}
                    />
                    {errors.phone && <SmallText id="phone-error" role="alert" className="mt-1 text-xs text-danger">{errors.phone}</SmallText>}
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
                </div>

                <div>
                  <Label as="label" htmlFor="message" className="mb-1.5 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    invalid={!!errors.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Tell us about your project, timeline and goals…"
                    value={form.message}
                    onChange={set('message')}
                  />
                  {errors.message && <SmallText id="message-error" role="alert" className="mt-1 text-xs text-danger">{errors.message}</SmallText>}
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

                <SmallText className="text-center text-xs text-muted">
                  We usually reply within one business day. Your details stay private -{' '}
                  <RouterLink to="/privacy" className="underline underline-offset-2 hover:text-accent">
                    privacy policy
                  </RouterLink>
                  .
                </SmallText>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
