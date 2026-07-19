import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { cn } from '../../utils/cn'
import Logo from '../Logo'
import ThemeToggle from '../ThemeToggle'
import ThemeCustomizer from './ThemeCustomizer'
import { Button } from '../ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300',
        scrolled ? 'pt-2' : 'pt-4 sm:pt-5',
      )}
    >
      <div className="w-full max-w-5xl">
        {/* Floating pill — shrinks slightly on scroll (scale + padding) */}
        <nav
          className={cn(
            'glass flex origin-top items-center justify-between gap-2 rounded-full border border-border shadow-card transition-all duration-300',
            scrolled ? 'scale-[0.97] px-3 py-2 sm:px-4 sm:py-2' : 'px-4 py-3 sm:px-5 sm:py-3.5',
          )}
        >
          <Logo onClick={() => setOpen(false)} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ThemeCustomizer />
            <Button as={Link} to="/contact" size="sm" className="hidden sm:inline-flex">
              Start a project <ArrowRight size={15} />
            </Button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/70 text-fg md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu (conditional render → always unmounts cleanly) */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="glass mt-2 rounded-3xl border border-border p-2 shadow-card md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                        isActive ? 'bg-accent-soft text-fg' : 'text-muted hover:bg-primary/60',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="p-1">
                <Button as={Link} to="/contact" size="full" onClick={() => setOpen(false)}>
                  Start a project <ArrowRight size={16} />
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  )
}
