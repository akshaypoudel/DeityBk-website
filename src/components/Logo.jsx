import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-2.5 font-display text-lg font-bold"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-on-accent shadow-glow transition-transform group-hover:scale-105">
        {/* Code-tag mark: we build software */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 7.5 3.5 12 8 16.5M16 7.5l4.5 4.5-4.5 4.5M13.5 5.5l-3 13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        {site.brand.logoText}
        <span className="text-gradient">.</span>
      </span>
    </Link>
  )
}
