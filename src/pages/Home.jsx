import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Team from '../sections/Team'
import ServicesPreview from '../sections/ServicesPreview'
import FeaturedProjects from '../sections/FeaturedProjects'
import Stats from '../sections/Stats'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import TechMarquee from '../sections/TechMarquee'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Team />
      <ServicesPreview />
      <Stats />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <TechMarquee />
      <FAQ />
      <CTA />
    </>
  )
}
