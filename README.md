# Nova Labs — Agency / Service Website Template

A premium, 2026-style digital-agency website template built with **React + Vite + Tailwind CSS**, with a **light/dark theme toggle**, smooth scroll animations, and a fully data-driven design.

> The whole site reads from **one file** — `src/data/site.js`. Change the text there and everything updates. You never need to touch the components.

---

## 🚀 Run it

```bash
cd Nova
npm install      # first time only
npm run dev      # start the dev server → open the printed http://localhost URL
```

Build for production:

```bash
npm run build    # output goes to /dist
npm run preview  # preview the production build locally
```

Requires **Node.js 18+** (you have Node 24 — ✅).

---

## ✏️ How to customise (all content lives in `src/data/`)

You only ever edit files in the **`src/data/`** folder — never the components.
The content is split so the big, growing lists have their own files:

| File | What's in it |
|------|--------------|
| **`src/data/site.js`** | brand/logo, nav, hero, about, stats, process, tech marquee, contact, socials, footer |
| **`src/data/services.js`** | the **services** list — add/remove services here (each gets its own page) |
| **`src/data/projects.js`** | the **projects** list — add/remove projects here (each gets its own page) |
| **`src/data/team.js`** | the **team** members ("Who we are") — photo optional, falls back to an icon |
| **`src/data/faq.js`** | the **FAQ** questions & answers |
| **`src/data/testimonials.js`** | client testimonials |

### ➕ Add a new **service**
Open `src/data/services.js`, copy the template block at the bottom, and fill in
`icon`, `title`, `description`, `features`. It appears automatically on the Home
page (first 3) and the full `/services` page. That's it.

### ➕ Add a new **project**
Open `src/data/projects.js`, copy the template block at the bottom, and fill it
in. Give it a unique `slug`. It appears automatically on the Home page (first 3),
the `/projects` grid + filter, **and gets its own detail page** at
`/projects/<slug>`. A brand-new `category` value automatically adds a new filter
button.

> There is **no limit** — add as many services or projects as you like; the grids
> and pages scale automatically.

### Icons
Icons use [lucide.dev](https://lucide.dev). Just type the icon name as a string
(e.g. `"Smartphone"`, `"Code2"`, `"Globe"`). If you use an icon name that isn't
already used, add it to the small registry in `src/components/Icon.jsx` (one
import + one line — instructions are in that file). A cheat-sheet of common names
is at the bottom of `site.js`.

### Images
`projects[].image` and `testimonials[].avatar` take any image URL. The template
ships with free Unsplash placeholders — swap in your own URLs (or drop images
into the `public/` folder and reference them like `/my-image.jpg`).

---

## 🗂️ Project detail pages

Every project has its **own page** at `/projects/<slug>` — clicking a project
card opens it (it does **not** jump straight to an external link). Each detail
page shows: cover image, overview, an optional **video**, a gallery, the
challenge/solution, result stats, tech stack, and related projects.

Fill these fields per project in `projects[]` (see the comments in `site.js`):

| Field | What it does |
|-------|--------------|
| `slug` | the URL id, e.g. `fintech-mobile-app` |
| `liveLink` | the **"Visit live" button** on the detail page — paste your real link here later (leave `''` to hide it) |
| `overview` | array of intro paragraphs |
| `video` | a **YouTube / Vimeo link** or an `.mp4` URL (leave `''` to hide) |
| `gallery` | array of image URLs |
| `challenge`, `solution` | the story |
| `results` | array of `{ value, label }` outcome stats |
| `tech` | technologies used |

---

## 🎨 Theme & design system

The whole site is driven by **4 colour tokens** — everything else (borders,
muted text, glass, gradients, hover states) is *derived* from them, so changing
one updates the entire site.

- **Live theme customizer:** click the 🎨 palette icon in the navbar to pick
  **Accent, Primary, Secondary and Text** colours with a colour picker. Changes
  apply instantly and are saved per light/dark mode in the browser (Reset
  restores defaults). No refresh needed.
- **Light/dark toggle** lives in the navbar too.
- Defaults live in **`src/styles/tokens.css`** (`--primary`, `--secondary`,
  `--accent`, `--text`) and **`src/theme/tokens.js`**. Change those to set new
  brand defaults.
- **No hardcoded colours** anywhere — components use token utilities
  (`bg-accent`, `text-fg`, `border-border`, `bg-accent-soft`, …).

### Reusable components (don't repeat styles)

- **Typography** (`src/components/typography/`): `MainHeading`, `HeroTitle`,
  `SectionHeading`, `CardHeading`, `SubHeading`, `Paragraph`, `SmallText`,
  `Caption`, `Label`, `Overline`. Use these instead of raw `<h1>`/`<p>`.
- **UI** (`src/components/ui/`): `Button`, `Card`, `GlassCard`, `Badge`, `Tag`,
  `Chip`, `Input`/`Textarea`, `IconWrapper`, `GradientDivider`, `Container`,
  `Section`, `Select`.
- **Navigation** (`src/components/navigation/`): floating glass `Navbar` +
  `ThemeCustomizer`.

---

## 📁 Structure

```
src/
  data/                ← EDIT THESE (all content, no code)
    site.js            ·  brand, hero, about, contact, footer…
    services.js        ·  the services list  ← add services here
    projects.js        ·  the projects list  ← add projects here
    team.js  faq.js  testimonials.js
  styles/              ← design tokens (colours, shadows, gradients, type)
  theme/               ← default token values (JS)
  context/             ← theme provider (mode + custom colours)
  components/
    typography/        ·  MainHeading, Paragraph, … (all text styles)
    ui/                ·  Button, Card, Badge, Input, IconWrapper, …
    navigation/        ·  floating Navbar + ThemeCustomizer
  hooks/  utils/       ← cn(), colour helpers
  sections/            ← hero, about, team, faq, stats, etc.
  lib/                 ← project/service lookup by slug
  pages/               ← Home, Services, ServiceDetail, Projects,
                         ProjectDetail, Contact (lazy-loaded)
  App.jsx              ← routes
```

Each **page** and reusable piece is its own file — nothing is crammed into one
big component. To change *what the site says*, edit `src/data/`. To change *how
it looks or behaves*, the components in `sections/` and `components/` map 1:1 to
what you see on screen.

---

## 📬 Contact form → Google Sheet

The contact form works out of the box:

- **No setup:** it opens the visitor's email app pre-filled (`mailto:`).
- **Send to Google Sheets:** follow **`GOOGLE_SHEET_SETUP.md`** — paste the
  provided script (`google-apps-script.gs`) into your sheet, deploy it, and put
  the Web App URL in `contact.formEndpoint` in `site.js`. Every submission then
  becomes a new row (columns: submittedAt, name, email, service, message, page).

---

Built as a reusable template — duplicate the folder, edit `site.js`, and you
have a brand-new agency site in minutes.
