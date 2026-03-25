import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { homeContent } from '@/data/homeContent'
import GlowButton from '@/components/GlowButton'
import AppStoreBadges from '@/components/AppStoreBadges'
import TrustBadge from '@/components/TrustBadge'
import { GraduationCap } from 'lucide-react'

const c = homeContent.hero

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-brand-bg to-brand-surface">
      {/* Subtle background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-secondary/5 blur-3xl" />
      </div>

      <div className="relative max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <TrustBadge icon={GraduationCap} text={c.tag} variant="light" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading mt-6 text-balance">
              {c.title}{' '}
              <span className="text-brand-primary">{c.titleHighlight}</span>{' '}
              {c.titleEnd}
            </h1>

            <p className="text-lg md:text-xl text-brand-body mt-6 max-w-[600px] mx-auto lg:mx-0">
              {c.subtitle}
            </p>

            {/* Feature Checkmarks */}
            <ul className="mt-8 space-y-3 text-left inline-block">
              {c.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                  <span className="text-brand-body">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GlowButton href="/flugangst-app" size="lg">
                {c.ctaPrimary}
              </GlowButton>
              <GlowButton href="/flugangst" variant="secondary" size="lg">
                {c.ctaSecondary}
              </GlowButton>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <AppStoreBadges size="md" />
            </div>
          </motion.div>

          {/* Right Column — App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl blur-2xl scale-90" />
              <img
                src="/images/hero-app-mockup.png"
                alt="PassengerGuard App — Dein Flugangst-Coach"
                loading="eager"
                fetchPriority="high"
                width={400}
                height={800}
                className="relative w-full max-w-[300px] lg:max-w-[400px] mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
