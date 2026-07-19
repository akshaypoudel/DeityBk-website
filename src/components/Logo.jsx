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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 18V6l12 12V6"
            stroke="currentColor"
            strokeWidth="2.4"
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
