import { Check } from 'lucide-react'
import GlowButton from '@/components/GlowButton'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.kopfflug

export default function KopfflugSection() {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-brand-navyDark py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <AnimatedSection>
            <span className="text-brand-secondary text-sm font-semibold uppercase tracking-wider">
              {c.label}
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
              {c.title}
            </h2>
            <p className="text-slate-300 text-lg mt-6 leading-relaxed">
              {c.text}
            </p>

            <ul className="mt-8 space-y-4">
              {c.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <GlowButton
                href="/flugangst-app"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                {c.cta}
              </GlowButton>
            </div>
          </AnimatedSection>

          {/* Right — App Screenshot */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <img
              src="/images/screen-kopfflug.jpg"
              alt="PassengerGuard Kopfflug — Mentale Flugsimulation"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
