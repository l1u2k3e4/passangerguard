import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 md:p-8"
    >
      <div className="bg-brand-primaryLight rounded-xl p-3 w-12 h-12 flex items-center justify-center text-brand-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-brand-heading mt-4">
        {title}
      </h3>
      <p className="text-brand-body mt-2 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
