import { useSEO } from '@/hooks/useSEO'
import ContentPageHero from '@/components/ContentPageHero'
import ContentCta from '@/components/ContentCta'
import RelatedPages from '@/components/RelatedPages'
import AnimatedSection from '@/components/AnimatedSection'
import AppStoreBadges from '@/components/AppStoreBadges'
import { tippsContent as c } from '@/data/tippsContent'

export default function TippsPage() {
  useSEO({
    title: 'Flugangst überwinden: 18 bewährte Tipps & Strategien | PassengerGuard',
    description:
      '18 wissenschaftlich fundierte Tipps gegen Flugangst. Von Atemübungen über mentales Training bis zur App-Unterstützung.',
    canonical: 'https://www.passengerguard.com/flugangst/ueberwinden',
  })

  return (
    <>
      <ContentPageHero title={c.hero.title} subtitle={c.hero.subtitle} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-6">
          {c.tips.map((tip, index) => (
            <div key={tip.number}>
              <AnimatedSection delay={0.05}>
                <article className="bg-white rounded-card shadow-soft p-6 md:p-8 border border-brand-border/50">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                      {tip.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading mb-3">
                        {tip.title}
                      </h3>
                      <p className="text-brand-body leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Mid CTA after tip 9 */}
              {index === 8 && (
                <AnimatedSection className="my-8">
                  <div className="bg-brand-callout rounded-card p-8 text-center">
                    <p className="text-lg font-semibold text-brand-heading mb-4">
                      {c.midCta.text}
                    </p>
                    <AppStoreBadges size="sm" className="justify-center" />
                  </div>
                </AnimatedSection>
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <AnimatedSection className="mt-12">
          <div className="max-w-narrow mx-auto">
            <p className="text-brand-body leading-7 text-center font-medium">
              {c.closingText}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-narrow mx-auto">
          <ContentCta />
          <RelatedPages pages={c.relatedPages} />
        </div>
      </div>
    </>
  )
}
