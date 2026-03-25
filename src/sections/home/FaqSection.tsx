import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion from '@/components/FaqAccordion'
import { homeContent } from '@/data/homeContent'

const c = homeContent.faq

export default function FaqSection() {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="max-w-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} />
        </AnimatedSection>

        <div className="mt-12">
          <FaqAccordion items={c.items} />
        </div>
      </div>
    </section>
  )
}
