import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.pricing

export default function PricingSection() {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} subtitle={c.subtitle} />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch mt-12">
          {c.tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={index * 0.1}>
              <div
                className={cn(
                  'bg-white rounded-card shadow-card p-8 flex flex-col h-full',
                  tier.highlighted &&
                    'ring-2 ring-brand-primary scale-105 shadow-glow relative'
                )}
              >
                {/* Badge */}
                <span
                  className={cn(
                    'inline-block self-start rounded-full px-3 py-1 text-xs font-semibold mb-4',
                    tier.highlighted
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-primaryLight text-brand-primary'
                  )}
                >
                  {tier.badge}
                </span>

                {/* Name */}
                <h3 className="font-display text-xl font-bold text-brand-heading">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-4xl font-bold text-brand-heading">
                    {tier.price}
                  </span>
                  <span className="text-brand-muted text-sm ml-2">
                    / {tier.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Store-Buttons */}
                <div className="flex flex-col gap-2 mt-8">
                  {/* App Store Button — BLAU (ausgefüllt) */}
                  <a
                    href="https://apps.apple.com/de/app/passengerguard-flugangst/id6449045795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Jetzt im App Store starten
                  </a>

                  {/* Google Play Button — WEISS (outlined) */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.passengerguard.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border-2 border-brand-primary text-brand-primary font-semibold text-sm hover:bg-brand-primary/5 transition-colors bg-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.75c-.36-.17-.68-.5-.82-.95L13.28 12 2.36 1.2c.14-.45.46-.78.82-.95l12.78 11.35a.75.75 0 010 .8L3.18 23.75z M14.47 12.8l2.84 2.52-10.16 5.77 7.32-8.29zm0-1.6l-7.32-8.29L17.31 8.68 14.47 11.2zm3.63-.8l2.44 2.17c.66.58.66 1.67 0 2.26l-2.44 2.17-3.22-2.86a.75.75 0 010-1.88l3.22-2.86z"/></svg>
                    Jetzt bei Google Play starten
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
