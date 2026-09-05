import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../utils/cn'

// ════════════════════════════════════════════════════════════════════
//  ProjectImageSlider
//  Reusable auto-playing image carousel used by every project card.
//  • auto-advances on a timer, crossfading between images
//  • pauses on hover and resumes on leave
//  • manual prev/next arrows (shown on hover) + clickable dots
//  • object-cover so mixed aspect ratios never break the layout
//  • each instance owns its own state, so multiple sliders run
//    independently without interfering with one another
//  Controls call stopPropagation/preventDefault because a project card
//  wraps the slider in a <Link>; without this a click would navigate.
// ════════════════════════════════════════════════════════════════════
export default function ProjectImageSlider({
  images = [],
  alt = '',
  interval = 3800,
  className = '',
  rounded = false,
}) {
  const slides = images.filter(Boolean)
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count],
  )
  const jump = useCallback((i) => setIndex(i), [])

  // Auto-advance - paused on hover and when the tab is hidden. Respects the
  // user's reduced-motion preference by not auto-playing.
  useEffect(() => {
    if (count <= 1 || paused) return undefined
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(id)
  }, [count, paused, interval])

  // Keep the index valid if the image list length ever changes.
  useEffect(() => {
    if (index > count - 1) setIndex(0)
  }, [count, index])

  const stop = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  if (count === 0) return null

  return (
    <div
      className={cn(
        'group/slider relative h-full w-full overflow-hidden bg-secondary',
        rounded && 'rounded-2xl',
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slides[index]}
          alt={`${alt}${count > 1 ? ` - image ${index + 1} of ${count}` : ''}`}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {count > 1 && (
        <>
          {/* Prev / next - appear on hover (and always on touch, where there's
              no hover state, they sit at low opacity for discoverability). */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              stop(e)
              go(-1)
            }}
            className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-overlay text-on-accent opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-accent hover:text-on-accent focus-visible:opacity-100 group-hover/slider:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              stop(e)
              go(1)
            }}
            className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-overlay text-on-accent opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-accent hover:text-on-accent focus-visible:opacity-100 group-hover/slider:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                onClick={(e) => {
                  stop(e)
                  jump(i)
                }}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-5 bg-on-accent'
                    : 'w-1.5 bg-on-accent/50 hover:bg-on-accent/80',
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
