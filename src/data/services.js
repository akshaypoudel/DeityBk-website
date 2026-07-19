// ════════════════════════════════════════════════════════════════════
//  SERVICES
//  Add / remove / reorder services here. Each object automatically shows
//  up on the Home page (first 3), the full /services page, AND gets its
//  own detail page at /services/<slug>.
//
//  To ADD a service: copy the template at the bottom and change the fields.
//    icon         any name from https://lucide.dev  (e.g. "Smartphone").
//                 If you use a NEW icon name, also add it to the registry
//                 in src/components/Icon.jsx (one import + one line).
//    slug         unique url-safe id (letters, numbers, dashes) → its page
//    title        the service name
//    description  one short paragraph (shown on the card)
//    features     array of short bullet points (shown on the card)
//    ── detail page content ──
//    overview     intro paragraphs (array)
//    included     array of { title, text } — what the service covers
// ════════════════════════════════════════════════════════════════════

export const services = [
  {
    icon: 'Smartphone',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Native-feeling iOS & Android apps built with React Native and Flutter — fast, polished and store-ready.',
    features: ['iOS & Android', 'React Native / Flutter', 'Offline-first', 'App Store launch'],
    overview: [
      'We design and build mobile apps that feel fast, native and effortless — for both iOS and Android from a single codebase.',
      'From the first prototype to a live App Store and Play Store launch, we handle the whole journey and the tricky details in between.',
    ],
    included: [
      { title: 'iOS & Android', text: 'One codebase, both platforms, with a truly native feel.' },
      { title: 'Offline-first', text: 'Apps that keep working even with a shaky connection.' },
      { title: 'Store launch', text: 'We handle submission, review and release for you.' },
      { title: 'Push & analytics', text: 'Engage users and understand how they use your app.' },
    ],
  },
  {
    icon: 'Code2',
    slug: 'software-development',
    title: 'Software Development',
    description:
      'Custom web platforms, SaaS products and internal tools engineered for scale, security and speed.',
    features: ['SaaS platforms', 'APIs & backends', 'Cloud & DevOps', 'Automation'],
    overview: [
      'We build robust, scalable software — SaaS products, internal tools and the APIs that power them.',
      'Clean, tested, well-documented code that your team can build on for years, not a prototype you have to throw away.',
    ],
    included: [
      { title: 'SaaS platforms', text: 'Multi-tenant products built to grow with your business.' },
      { title: 'APIs & backends', text: 'Secure, fast, well-documented services.' },
      { title: 'Cloud & DevOps', text: 'Automated deployments and reliable infrastructure.' },
      { title: 'Automation', text: 'Replace manual work with software that just runs.' },
    ],
  },
  {
    icon: 'Globe',
    slug: 'website-development',
    title: 'Website Development',
    description:
      'High-converting marketing sites and web apps with stunning UI, blazing performance and clean SEO.',
    features: ['Landing pages', 'Web apps', 'CMS integration', 'SEO & performance'],
    overview: [
      'Your website is often the first impression — we make it a great one, and a fast one.',
      'Beautiful, high-converting sites and web apps with clean SEO and top performance scores out of the box.',
    ],
    included: [
      { title: 'Marketing sites', text: 'Landing pages designed to convert visitors.' },
      { title: 'Web apps', text: 'Rich, app-like experiences in the browser.' },
      { title: 'CMS integration', text: 'Edit your own content without touching code.' },
      { title: 'SEO & speed', text: 'Built to rank and to load in under two seconds.' },
    ],
  },
  {
    icon: 'PenTool',
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    description:
      'Research, wireframes, prototypes and polished design systems that make products a joy to use.',
    features: ['Product design', 'Design systems', 'Prototyping', 'User research'],
    overview: [
      'Great products start with great design. We turn ideas into intuitive, beautiful experiences people love.',
      'From user research to a polished design system, we make sure every screen is clear, consistent and on-brand.',
    ],
    included: [
      { title: 'User research', text: 'Understand your users before designing for them.' },
      { title: 'Wireframes & flows', text: 'Map the experience before a pixel is drawn.' },
      { title: 'Prototypes', text: 'Clickable designs you can test with real users.' },
      { title: 'Design systems', text: 'A reusable kit that keeps everything consistent.' },
    ],
  },
  {
    icon: 'LineChart',
    slug: 'product-strategy',
    title: 'Product Strategy',
    description:
      'Roadmapping, discovery and MVP scoping to make sure you build the right thing before writing code.',
    features: ['Discovery', 'MVP scoping', 'Roadmaps', 'Analytics'],
    overview: [
      'Building the right thing matters more than building the thing right. We help you figure out what to build first.',
      'Through discovery and scoping we turn a big vision into a focused, achievable plan.',
    ],
    included: [
      { title: 'Discovery', text: 'Workshops to align on goals, users and success.' },
      { title: 'MVP scoping', text: 'Define the smallest version that delivers value.' },
      { title: 'Roadmaps', text: 'A clear, prioritised plan for what comes next.' },
      { title: 'Analytics', text: 'Measure what matters and learn from real data.' },
    ],
  },
  {
    icon: 'Cpu',
    slug: 'ai-integration',
    title: 'AI Integration',
    description:
      'Bring intelligent features to your product — chat, search, automation and generative experiences.',
    features: ['LLM features', 'Chatbots', 'Smart search', 'Automation'],
    overview: [
      'AI can make your product dramatically more useful — when it is applied to the right problems.',
      'We add practical, reliable AI features that save your users time and set you apart from competitors.',
    ],
    included: [
      { title: 'LLM features', text: 'Summarise, generate and assist inside your product.' },
      { title: 'Chatbots', text: 'Helpful assistants trained on your own content.' },
      { title: 'Smart search', text: 'Search that understands meaning, not just keywords.' },
      { title: 'Automation', text: 'Let AI handle repetitive, rules-based work.' },
    ],
  },

  // 👇 ADD A NEW SERVICE by copying this template and filling it in:
  // {
  //   icon: 'Layers',
  //   slug: 'your-new-service',
  //   title: 'Your New Service',
  //   description: 'One short sentence describing it.',
  //   features: ['Point one', 'Point two', 'Point three'],
  //   overview: ['A paragraph about the service.'],
  //   included: [
  //     { title: 'Thing one', text: 'What it means.' },
  //     { title: 'Thing two', text: 'What it means.' },
  //   ],
  // },
]
