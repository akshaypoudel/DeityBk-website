import { motion } from 'framer-motion'
import { GradientBlob } from './ui'
import { HeroTitle, SubHeading } from './typography'

// Hero band for inner pages (Services, Projects, Contact).
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <GradientBlob className="left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 opacity-50" />
      <div className="container-x text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.span>
        )}
        <HeroTitle
          as={motion.h1}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-5 max-w-3xl text-4xl sm:text-6xl"
        >
          {title}
        </HeroTitle>
        {subtitle && (
          <SubHeading
            as={motion.p}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl"
          >
            {subtitle}
          </SubHeading>
        )}
      </div>
    </section>
  )
}
