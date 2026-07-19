import { lazy, Suspense } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/navigation/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import { Button } from './components/ui'
import { HeroTitle, SectionHeading, Paragraph } from './components/typography'
import Home from './pages/Home' // eager — the landing page

// Code-split the secondary pages so the initial load stays lean.
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-32">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
    </div>
  )
}

function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
      <HeroTitle gradient className="text-7xl">404</HeroTitle>
      <SectionHeading as="h1" className="mt-4 text-2xl">Page not found</SectionHeading>
      <Paragraph className="mt-2">The page you're looking for doesn't exist.</Paragraph>
      <Button as={Link} to="/" className="mt-6">
        Back home
      </Button>
    </section>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      {/* Entrance-only page transition, keyed by route. Re-mounts and
          fades the new page in on every navigation — no exit animation,
          so the new page always renders (a mode="wait" exit that fails to
          complete would otherwise leave the old page stuck on screen). */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy/:slug" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
      <Footer />
    </div>
  )
}
