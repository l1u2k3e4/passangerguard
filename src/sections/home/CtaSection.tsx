import { motion } from 'framer-motion'
import AppStoreBadges from '@/components/AppStoreBadges'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.cta

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-white text-3xl md:text-5xl font-bold text-balance">
            {c.title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mt-4 max-w-[600px] mx-auto">
            {c.subtitle}
          </p>

          <motion.div
            className="mt-8"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <a
              href="https://apps.apple.com/de/app/passengerguard-flugangst/id6449045795"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-primary hover:bg-white/90 rounded-lg px-10 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              {c.button}
            </a>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <AppStoreBadges size="lg" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
