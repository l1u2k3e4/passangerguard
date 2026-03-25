import {
  Zap,
  Headphones,
  Compass,
  ClipboardList,
  CheckCircle,
  Wind,
  WifiOff,
  Plane,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.features

const iconMap = {
  Zap,
  Headphones,
  Compass,
  ClipboardList,
  CheckCircle,
  Wind,
  WifiOff,
  Plane,
} as const

export default function FeaturesSection() {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} subtitle={c.subtitle} />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {c.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <FeatureCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
