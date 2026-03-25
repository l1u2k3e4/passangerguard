import { Shield, Heart, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.solution

const iconMap = {
  Shield,
  Heart,
  Plane,
} as const

export default function SolutionSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} />
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24 mt-12">
          {c.blocks.map((block, index) => {
            const Icon = iconMap[block.icon]
            const reversed = index % 2 === 1

            return (
              <AnimatedSection key={block.title} delay={0.1}>
                <div
                  className={cn(
                    'grid lg:grid-cols-2 gap-8 md:gap-16 items-center',
                    reversed && 'lg:direction-rtl'
                  )}
                >
                  {/* Image */}
                  <div className={cn('order-1', reversed ? 'lg:order-2' : 'lg:order-1')}>
                    <div className="rounded-card shadow-soft overflow-hidden">
                      <img
                        src={block.image}
                        alt={block.title}
                        loading="lazy"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={cn('order-2 flex flex-col gap-4', reversed ? 'lg:order-1' : 'lg:order-2')}>
                    <div className="bg-brand-primaryLight rounded-xl p-3 w-12 h-12 flex items-center justify-center text-brand-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-heading">
                      {block.title}
                    </h3>
                    <p className="text-brand-body leading-relaxed text-lg">
                      {block.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
