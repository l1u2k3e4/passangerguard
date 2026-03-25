import { Users, AlertTriangle, Frown } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.problem

const iconMap = {
  Users,
  AlertTriangle,
  Frown,
} as const

export default function ProblemSection() {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} subtitle={c.subtitle} />
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {c.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon]
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-card shadow-card p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                <p className="text-5xl md:text-6xl font-bold text-brand-primary">
                  {stat.value}
                </p>
                <p className="text-brand-body mt-2">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        <p className="text-brand-muted text-sm text-center mt-6">{c.source}</p>

        <AnimatedSection delay={0.3} className="mt-10">
          <p className="text-brand-body text-center max-w-narrow mx-auto leading-relaxed">
            {c.empathyText}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
