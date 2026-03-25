import { Heart, CheckCircle, Quote } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import ContentPageHero from '@/components/ContentPageHero'
import ContentCta from '@/components/ContentCta'
import RelatedPages from '@/components/RelatedPages'
import AnimatedSection from '@/components/AnimatedSection'
import { panikattackeContent as c } from '@/data/panikattackeContent'

export default function PanikattackePage() {
  useSEO({
    title: 'Panikattacke im Flugzeug: 10 Sofort-Tipps | PassengerGuard',
    description:
      'Panikattacke beim Fliegen? 10 bewährte Selbsthilfe-Tipps für sofortige Beruhigung. Atemübungen und Erdungstechniken.',
    canonical: 'https://www.passengerguard.com/panikattacke',
  })

  return (
    <>
      <ContentPageHero
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        gradient="bg-gradient-to-b from-brand-surface to-white"
      />

      <div className="max-w-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Emergency Box */}
        <AnimatedSection>
          <div className="bg-brand-primary/5 border-2 border-brand-primary rounded-card p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
              <Heart className="w-7 h-7" />
              {c.emergencyBox.title}
            </h2>
            <ul className="space-y-3 mb-6">
              {c.emergencyBox.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-brand-body text-lg">{step}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-muted text-sm">{c.emergencyBox.explanation}</p>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">{c.intro.title}</h2>
          {c.intro.paragraphs.map((p, i) => (
            <p key={i} className="text-brand-body leading-7 mb-4">{p}</p>
          ))}
        </AnimatedSection>

        {/* Symptoms */}
        <AnimatedSection className="mt-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">{c.symptoms.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-card border border-brand-border p-6">
              <h3 className="font-semibold text-brand-heading mb-4">{c.symptoms.physical.title}</h3>
              <ul className="space-y-2">
                {c.symptoms.physical.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-body">
                    <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-card border border-brand-border p-6">
              <h3 className="font-semibold text-brand-heading mb-4">{c.symptoms.psychological.title}</h3>
              <ul className="space-y-2">
                {c.symptoms.psychological.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-body">
                    <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 10 Tips */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-8">
            10 Selbsthilfe-Tipps bei Panikattacken
          </h2>
          <div className="space-y-5">
            {c.tips.map((tip) => (
              <article
                key={tip.number}
                className="bg-white rounded-card shadow-soft p-6 border border-brand-border/50"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                    {tip.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-heading mb-2">{tip.title}</h3>
                    <p className="text-brand-body leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* Expert Quote */}
        <AnimatedSection className="mt-16">
          <div className="bg-brand-callout border-l-4 border-brand-primary rounded-r-lg p-6">
            <Quote className="w-8 h-8 text-brand-primary/20 mb-3" />
            <blockquote className="text-lg font-medium text-brand-heading italic leading-relaxed">
              &ldquo;{c.expertQuote.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-brand-body font-semibold">
              — {c.expertQuote.name}
            </p>
            <p className="text-brand-muted text-sm">{c.expertQuote.title}</p>
          </div>
        </AnimatedSection>

        {/* Long-term Strategies */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            {c.longTermStrategies.title}
          </h2>
          {c.longTermStrategies.paragraphs.map((p, i) => (
            <p key={i} className="text-brand-body leading-7 mb-4">{p}</p>
          ))}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {c.longTermStrategies.strategies.map((s, i) => (
              <div key={i} className="bg-white rounded-card border border-brand-border p-6">
                <h3 className="font-semibold text-brand-heading mb-2">{s.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <ContentCta />
        <RelatedPages pages={c.relatedPages} />
      </div>
    </>
  )
}
