import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'
import { track } from '../utils/track'

// Lucide has no WhatsApp glyph, so the official mark is inlined here.
function WhatsAppGlyph({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.944c0 2.096.549 4.14 1.595 5.945L0 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.58 0 11.94-5.359 11.944-11.945A11.9 11.9 0 0 0 20.52 3.45" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const { whatsapp } = site
  const reduceMotion = useReducedMotion()

  // No number configured → render nothing rather than a dead link.
  const number = (whatsapp?.number || '').replace(/\D/g, '')
  if (!number) return null

  // wa.me works on mobile (opens the app) and desktop (opens WhatsApp Web),
  // so one URL covers both. The text param is what pre-fills their compose
  // box - they can still edit it before sending.
  const href = `https://wa.me/${number}?text=${encodeURIComponent(whatsapp.message || '')}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={() => track('whatsapp_click', { location: 'floating_button' })}
      aria-label={whatsapp.label || 'Chat with us on WhatsApp'}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 outline-none ring-offset-2 ring-offset-bg focus-visible:ring-2 focus-visible:ring-[#25D366] sm:bottom-8 sm:right-8"
    >
      {/* Pulsing halo - purely decorative, and skipped when the visitor
          has asked for reduced motion. */}
      {!reduceMotion && (
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.5s]" />
      )}

      <WhatsAppGlyph size={28} />

      {/* Hover tooltip. Hidden on touch screens, where there's no hover and
          it would only cover the button. */}
      {whatsapp.tooltip && (
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-fg px-3 py-2 text-sm font-medium text-bg opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 md:block">
          {whatsapp.tooltip}
        </span>
      )}
    </motion.a>
  )
}
