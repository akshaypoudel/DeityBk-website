// ════════════════════════════════════════════════════════════════════
//  🖊️  MAIN CONTENT FILE
//  This holds the general site content (brand, hero, about, stats,
//  contact, footer…). The bigger lists live in their own files so they
//  are easy to grow:
//     • Services      → src/data/services.js
//     • Projects      → src/data/projects.js
//     • Testimonials  → src/data/testimonials.js
//  They are imported below and merged into `site`, so everything on the
//  site still reads from `site.services`, `site.projects`, etc.
//
//  Icon names come from https://lucide.dev  (type any icon name as a
//  string, e.g. "Smartphone", "Code", "Globe"). See ICON list below.
// ════════════════════════════════════════════════════════════════════

import { services } from './services'
import { projects } from './projects'
import { testimonials } from './testimonials'
import { team } from './team'
import { faqs } from './faq'

export const site = {
  // ── Brand ──────────────────────────────────────────────
  brand: {
    name: 'DeityBK Studio',
    logoText: 'DeityBK',        // shown next to the mar in the navbar
    tagline: 'Digital Product Studio',
  },

  // ── Navigation (label → route path) ────────────────────
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ],

  // ── Hero (top of home page) ────────────────────────────
  hero: {
    badge: 'Available for new projects',
    titleLead: 'We build',
    // words that rotate in the animated headline
    rotatingWords: ['mobile apps', 'software', 'websites', 'experiences'],
    titleTail: 'that people love.',
    subtitle:
      'DeityBK Labs is a product studio helping ambitious teams design, build and scale beautiful digital products — from first sketch to shipped release.',
    primaryCta: { label: 'Start a project', to: '/contact' },
    secondaryCta: { label: 'View our work', to: '/projects' },
    // small trust logos shown under the hero (text only, easy to edit)
    trustedBy: ['Vercel', 'Stripe', 'Notion', 'Linear', 'Framer'],
  },

  // ── About (section on home page) ───────────────────────
  about: {
    eyebrow: 'Who we are',
    title: 'A small team obsessed with craft & outcomes.',
    body: [
      'We are designers and engineers who love turning hard problems into products that feel effortless. No bloated processes, no hand-offs to junior teams — you work directly with the people building your product.',
      'From startups shipping their first MVP to scale-ups rebuilding their core platform, we bring the same standard of care to every pixel and every line of code.',
    ],
    highlights: [
      { icon: 'Sparkles', label: 'Design-led', text: 'Every product starts with a strong, human-centered design foundation.' },
      { icon: 'Rocket', label: 'Ship fast', text: 'Lean cycles get you in front of real users in weeks, not months.' },
      { icon: 'ShieldCheck', label: 'Built to last', text: 'Clean, tested, scalable code you can build on for years.' },
    ],
  },

  // ── Services ──── (edit in src/data/services.js) ───────
  services,

  // ── Projects ──── (edit in src/data/projects.js) ───────
  projects,

  // ── Stats (animated counters) ──────────────────────────
  stats: [
    { value: 120, suffix: '+', label: 'Projects delivered' },
    { value: 48, suffix: '', label: 'Happy clients' },
    { value: 9, suffix: '', label: 'Years of experience' },
    { value: 99, suffix: '%', label: 'Client retention' },
  ],

  // ── Process steps ──────────────────────────────────────
  process: [
    { icon: 'Search', title: 'Discover', text: 'We dig into your goals, users and market to define what success looks like.' },
    { icon: 'PenTool', title: 'Design', text: 'We craft intuitive flows and beautiful interfaces, validated with prototypes.' },
    { icon: 'Code2', title: 'Build', text: 'We engineer your product in fast, transparent sprints you can follow live.' },
    { icon: 'Rocket', title: 'Launch & grow', text: 'We ship, measure and iterate — helping you scale after go-live.' },
  ],

  // ── Team ──── (edit in src/data/team.js) ──────────────
  team,

  // ── FAQ ──── (edit in src/data/faq.js) ────────────────
  faqs,

  // ── Testimonials ──── (edit in src/data/testimonials.js) ──
  testimonials,

  // ── Tech marquee (text badges that scroll) ─────────────
  tech: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma', 'PostgreSQL', 'Tailwind', 'GraphQL'],

  // ── Contact ────────────────────────────────────────────
  contact: {
    eyebrow: "Let's talk",
    title: 'Have a project in mind?',
    subtitle: 'Tell us about it. We usually reply within one business day.',
    email: 'hello@DeityBKlabs.com',
    phone: '+1 (555) 012-3456',
    address: '221B Product Street, San Francisco, CA',
    // ── Google Sheets integration ──────────────────────
    // Paste your Google Apps Script Web App URL here to have every form
    // submission appended to your Google Sheet.
    // Full step-by-step guide + the script to paste is in:
    //   GOOGLE_SHEET_SETUP.md   (and google-apps-script.gs)
    // The URL looks like:
    //   'https://script.google.com/macros/s/AKfycb..../exec'
    // Leave as '' and the form falls back to opening the email app.
    formEndpoint: '',
  },

  // ── Socials (icon name → url) ──────────────────────────
  socials: [
    { icon: 'Github', label: 'GitHub', url: '#' },
    { icon: 'Twitter', label: 'Twitter', url: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'Instagram', label: 'Instagram', url: '#' },
  ],

  // ── Footer ─────────────────────────────────────────────
  footer: {
    blurb: 'We design and build digital products that move brands forward.',
    // small link columns
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About', to: '/#about' },
          { label: 'Services', to: '/services' },
          { label: 'Projects', to: '/projects' },
          { label: 'Contact', to: '/contact' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Mobile Apps', to: '/services' },
          { label: 'Software', to: '/services' },
          { label: 'Websites', to: '/services' },
          { label: 'UI / UX Design', to: '/services' },
        ],
      },
    ],
  },
}

/*  ICON reference (all from lucide-react). Common ones:
    Smartphone, Code2, Globe, PenTool, LineChart, Cpu, Search, Rocket,
    Sparkles, ShieldCheck, Github, Twitter, Linkedin, Instagram, Mail,
    Phone, MapPin, ArrowRight, Check, Star, Zap, Layers, Palette      */
