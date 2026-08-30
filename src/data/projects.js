// ════════════════════════════════════════════════════════════════════
//  PROJECTS / PORTFOLIO
//  Add / remove / reorder projects here. Each one automatically shows up
//  on the Home page (first 3), the /projects grid + filter, and gets its
//  OWN detail page at /projects/<slug>.
//
//  To ADD a project: copy the template at the bottom and fill it in.
//  Fields:
//    slug          unique url-safe id (letters, numbers, dashes only)
//    title         project name
//    category      "Mobile" | "Software" | "Website" | ...  (drives the
//                  filter buttons — a new category appears automatically)
//    description   short one-liner shown on the card
//    image         cover image (card + detail hero). Any URL.
//    tags          small pills
//    liveLink      "Visit live" button on the detail page. Put '' or '#'
//                  to hide it — paste your real link here later.
//    ── detail page content ──
//    client, year  small meta shown on the detail page
//    overview      intro paragraphs (array)
//    video         OPTIONAL. A YouTube/Vimeo link OR an .mp4 URL.
//                  Leave '' to hide the video block.
//    gallery       array of image URLs shown in a grid
//    challenge     paragraph: the problem
//    solution      paragraph: what you built
//    results       array of { value, label } outcome stats
//    tech          array of technologies used
// ════════════════════════════════════════════════════════════════════

export const projects = [
  {
    slug: 'fintech-mobile-app',
    title: 'Fintech Mobile App',
    category: 'Mobile',
    description: 'A banking app redesign that lifted daily active users by 42%.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'UX', 'Fintech'],
    liveLink: '', // paste the live app/store link here later
    client: 'FinScope',
    year: '2025',
    overview: [
      'FinScope wanted to modernise their ageing banking app and make everyday money management feel effortless for millions of users.',
      'We reimagined the entire experience — from onboarding to payments — with a focus on speed, clarity and trust.',
    ],
    video: '', // e.g. 'https://www.youtube.com/watch?v=XXXX' or '/videos/demo.mp4'
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'The legacy app was slow, cluttered and had a 2.1-star rating. Users struggled to complete basic tasks like transfers and bill payments.',
    solution:
      'We rebuilt the app in React Native with an offline-first architecture, a new design system and biometric login — cutting the steps to send money from 6 taps to 2.',
    results: [
      { value: '+42%', label: 'Daily active users' },
      { value: '4.8★', label: 'New app rating' },
      { value: '-65%', label: 'Support tickets' },
    ],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Figma'],
  },
  {
    slug: 'saas-analytics-platform',
    title: 'SaaS Analytics Platform',
    category: 'Software',
    description: 'Real-time dashboards processing millions of events per day.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node', 'Cloud'],
    liveLink: '',
    client: 'Datapulse',
    year: '2025',
    overview: [
      'Datapulse needed a analytics platform that could ingest and visualise huge streams of product data in real time.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Their old reporting ran overnight, so teams were always acting on stale data and could not react to issues quickly.',
    solution:
      'We built a streaming pipeline and a fast React dashboard that surfaces live metrics, custom charts and alerts in under a second.',
    results: [
      { value: '10M+', label: 'Events / day' },
      { value: '<1s', label: 'Dashboard latency' },
      { value: '3x', label: 'Faster decisions' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'ecommerce-website',
    title: 'E-commerce Website',
    category: 'Website',
    description: 'A headless storefront with a 1.2s load time and 3x conversion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'Shopify', 'SEO'],
    liveLink: '',
    client: 'Storely',
    year: '2024',
    overview: [
      'Storely was losing sales to a slow, dated storefront. They wanted a fast, beautiful shopping experience that converts.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Pages took over 5 seconds to load and the checkout was confusing, leading to a high cart-abandonment rate.',
    solution:
      'We built a headless storefront on Next.js + Shopify with image optimisation, a streamlined checkout and clean SEO.',
    results: [
      { value: '1.2s', label: 'Load time' },
      { value: '3x', label: 'Conversion rate' },
      { value: '+120%', label: 'Organic traffic' },
    ],
    tech: ['Next.js', 'Shopify', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'healthcare-booking-app',
    title: 'Healthcare Booking App',
    category: 'Mobile',
    description: 'Appointment scheduling for 200k+ patients across clinics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flutter', 'Health', 'UX'],
    liveLink: '',
    client: 'MediBook',
    year: '2024',
    overview: [
      'MediBook wanted to make booking a doctor as easy as ordering a taxi, across a network of clinics.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Patients had to call clinics during office hours to book, causing long waits and missed appointments.',
    solution:
      'We built a cross-platform Flutter app with real-time availability, reminders and secure patient records.',
    results: [
      { value: '200k+', label: 'Patients served' },
      { value: '-38%', label: 'No-show rate' },
      { value: '24/7', label: 'Booking access' },
    ],
    tech: ['Flutter', 'Firebase', 'Figma'],
  },
  {
    slug: 'internal-ops-tool',
    title: 'Internal Ops Tool',
    category: 'Software',
    description: 'Automating logistics workflows and saving 30 hours a week.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Automation'],
    liveLink: '',
    client: 'ShipFast',
    year: '2024',
    overview: [
      'ShipFast’s operations team was drowning in spreadsheets and manual data entry. They needed a single tool to run logistics.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Manual workflows across disconnected sheets caused errors and wasted dozens of hours every week.',
    solution:
      'We built an internal web app that automates order routing, tracks shipments and generates reports automatically.',
    results: [
      { value: '30h', label: 'Saved / week' },
      { value: '-90%', label: 'Data-entry errors' },
      { value: '1', label: 'Source of truth' },
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'creative-agency-site',
    title: 'Creative Agency Site',
    category: 'Website',
    description: 'An award-worthy portfolio with immersive scroll animations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Motion', 'Design'],
    liveLink: '',
    client: 'Studio Aurora',
    year: '2023',
    overview: [
      'Studio Aurora wanted a portfolio site that felt like an experience and showed off their creative range.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Their old site was generic and did not reflect the quality of their work, so leads rarely converted.',
    solution:
      'We designed an immersive site with scroll-driven animations, bold typography and buttery-smooth transitions.',
    results: [
      { value: '2x', label: 'Enquiries' },
      { value: '+3min', label: 'Time on site' },
      { value: 'Awwwards', label: 'Honourable mention' },
    ],
    tech: ['React', 'Framer Motion', 'GSAP'],
  },

  {
    slug: 'suggestcollege',
    title: 'SuggestCollege',
    category: 'Education',
    stack: 'React · Django · SQL',
    description: 'A college discovery platform that guides students to the right course and campus.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Django', 'SQL'],
    liveLink: '',
    client: 'SuggestCollege',
    year: '2025',
    overview: [
      'SuggestCollege is an education-focused platform that helps students find and compare colleges, courses and admissions information in one place.',
      'The frontend is built with React for a fast, interactive experience, backed by a Django + SQL API that powers search, filtering and recommendations.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Students struggle to compare thousands of colleges and courses scattered across dozens of websites with inconsistent data.',
    solution:
      'We built a React platform on a Django + SQL backend that centralises college data with smart search, filters and personalised course suggestions.',
    results: [
      { value: 'React', label: 'Frontend' },
      { value: 'Django', label: 'Backend API' },
      { value: 'SQL', label: 'Structured data' },
    ],
    tech: ['React', 'Django', 'SQL', 'REST API'],
  },
  {
    slug: 'trunri',
    title: 'Trunri',
    category: 'Mobile',
    stack: 'Flutter · Firebase',
    description: 'A cross-platform mobile app built with Flutter and a realtime Firebase backend.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flutter', 'Firebase', 'Mobile'],
    liveLink: '',
    client: 'Trunri',
    year: '2025',
    overview: [
      'Trunri is a mobile application built with Flutter for a single, consistent experience across Android and iOS.',
      'Firebase powers authentication, realtime data and cloud storage so the app stays fast and always in sync.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'The client needed one codebase that shipped to both app stores without compromising on native feel or speed.',
    solution:
      'We built Trunri in Flutter with a Firebase backend, giving a polished cross-platform app with realtime sync and secure auth.',
    results: [
      { value: 'Flutter', label: 'Single codebase' },
      { value: 'Firebase', label: 'Realtime backend' },
      { value: 'iOS + Android', label: 'One build' },
    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    slug: 'famcure',
    title: 'FamCure',
    category: 'Healthcare',
    stack: 'MERN · React Native',
    description: 'A test-booking app to find and book healthcare tests like blood tests near you.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['MERN', 'React Native', 'Healthcare'],
    liveLink: '',
    client: 'FamCure',
    year: '2025',
    overview: [
      'FamCure is a healthcare test-booking platform where users discover nearby labs and book diagnostic tests such as blood tests based on their location.',
      'A MERN web platform powers the admin and lab side, while a React Native app gives patients a smooth mobile booking experience.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Booking lab tests meant calling around or visiting in person, with no easy way to compare nearby labs and prices.',
    solution:
      'We built location-based test discovery, healthcare/lab test listings and one-tap booking — on a MERN backend with a React Native mobile app.',
    results: [
      { value: 'Location', label: 'Based discovery' },
      { value: '1-tap', label: 'Test booking' },
      { value: 'Mobile', label: 'React Native app' },
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'React Native'],
  },
  {
    slug: 'aquasip',
    title: 'AquaSip',
    category: 'Mobile',
    stack: 'Flutter',
    description: 'A Flutter app that helps you track daily water intake and stay hydrated.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flutter', 'Health', 'Lifestyle'],
    liveLink: '',
    client: 'AquaSip',
    year: '2024',
    overview: [
      'AquaSip is a health and lifestyle mobile app that helps users build a healthy hydration habit.',
      'Built with Flutter, it tracks daily water consumption, monitors hydration and sends gentle reminders throughout the day.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'People forget to drink enough water and lack a simple, motivating way to track it during a busy day.',
    solution:
      'We built AquaSip in Flutter with daily intake tracking, hydration monitoring, progress visuals and push-notification reminders.',
    results: [
      { value: 'Daily', label: 'Intake tracking' },
      { value: 'Reminders', label: 'Push notifications' },
      { value: 'Progress', label: 'Hydration goals' },
    ],
    tech: ['Flutter', 'Dart', 'Local notifications'],
  },
  {
    slug: 'trunri-tourism',
    title: 'Trunri Tourism',
    category: 'Tourism',
    stack: 'Flutter',
    description: 'A location-based tourism app helping foreign travellers discover what’s around them.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flutter', 'Travel', 'Maps'],
    liveLink: '',
    client: 'Trunri',
    year: '2024',
    overview: [
      'Trunri Tourism is a location-based travel app designed for foreign tourists exploring a new place.',
      'Built with Flutter, it surfaces useful places and experiences around the user’s current location — from temples and events to restaurants and stays.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'Foreign tourists don’t know which nearby places are worth their time or how to find local recommendations.',
    solution:
      'We built location-based discovery for events, temples, accommodation, restaurants and attractions, with local recommendations — all in a Flutter app.',
    results: [
      { value: 'Nearby', label: 'Location discovery' },
      { value: '5+', label: 'Place categories' },
      { value: 'Local', label: 'Recommendations' },
    ],
    tech: ['Flutter', 'Dart', 'Google Maps', 'Geolocation'],
  },
  {
    slug: 'real-estate-website',
    title: 'Real Estate Website',
    category: 'Website',
    stack: 'MERN',
    description: 'A modern real-estate platform for browsing, listing and enquiring on properties.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    liveLink: '',
    client: 'Real Estate',
    year: '2024',
    overview: [
      'A modern real-estate web application built on the MERN stack for browsing and managing property listings.',
      'Visitors can search and filter properties, view rich listing detail pages and send enquiries, while admins manage listings from a dashboard.',
    ],
    video: '',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
    ],
    challenge:
      'The client needed a fast, modern property platform with search, detailed listings and enquiry handling in one place.',
    solution:
      'We built a MERN application with property search and filtering, detailed listing pages, enquiry forms and an admin dashboard for managing listings.',
    results: [
      { value: 'Search', label: 'Filter properties' },
      { value: 'Listings', label: 'Rich detail pages' },
      { value: 'Enquiries', label: 'Lead capture' },
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },

  // 👇 ADD A NEW PROJECT by copying this template and filling it in:
  // {
  //   slug: 'my-new-project',
  //   title: 'My New Project',
  //   category: 'Mobile',
  //   description: 'One short sentence for the card.',
  //   image: 'https://your-image-url.jpg',
  //   tags: ['Tag1', 'Tag2'],
  //   liveLink: '',            // paste the real link later, or leave '' to hide
  //   client: 'Client name',
  //   year: '2026',
  //   overview: ['A paragraph about the project.'],
  //   video: '',              // YouTube/Vimeo link or .mp4 URL, or '' to hide
  //   gallery: ['https://img1.jpg', 'https://img2.jpg'],
  //   challenge: 'The problem you solved.',
  //   solution: 'What you built.',
  //   results: [{ value: '2x', label: 'Some metric' }],
  //   tech: ['React', 'Node.js'],
  // },
]
