import { useMemo } from 'react'
import { CheckCircle } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import ContentPageHero from '@/components/ContentPageHero'
import TableOfContents from '@/components/TableOfContents'
import FaqAccordion from '@/components/FaqAccordion'
import ContentCta from '@/components/ContentCta'
import RelatedPages from '@/components/RelatedPages'
import AnimatedSection from '@/components/AnimatedSection'
import AppStoreBadges from '@/components/AppStoreBadges'
import { flugangstContent as c } from '@/data/flugangstContent'

export default function FlugangstPage() {
  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
    []
  )

  useSEO({
    title: 'Flugangst verstehen: Ursachen, Symptome & Formen | PassengerGuard',
    description:
      'Was ist Flugangst? Erfahren Sie alles über Ursachen, Symptome und Formen der Aviophobie. Wissenschaftlich fundierte Informationen.',
    canonical: 'https://www.passengerguard.com/flugangst',
    jsonLd: faqJsonLd,
  })

  return (
    <>
      <ContentPageHero
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        backgroundImage="/images/flugangst-verstehen.jpg"
      />

      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Table of Contents */}
          <TableOfContents items={c.toc} />

          {/* Content */}
          <div className="max-w-narrow">
            {c.sections.map((section, sectionIndex) => (
              <AnimatedSection key={section.id}>
                <section className="mb-16">
                  <h2
                    id={section.id}
                    className="text-3xl md:text-4xl font-bold text-brand-heading mt-16 mb-6 scroll-mt-24"
                  >
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="text-brand-body leading-7 mb-4">
                      {p}
                    </p>
                  ))}

                  {section.subsections?.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-10">
                      <h3 className="text-xl md:text-2xl font-semibold text-brand-heading mb-4">
                        {sub.title}
                      </h3>
                      {sub.content && (
                        <p className="text-brand-body leading-7 mb-4">{sub.content}</p>
                      )}
                      {sub.lists?.map((list, listIndex) => (
                        <div key={listIndex} className="my-6">
                          {'title' in list && list.title && (
                            <p className="font-semibold text-brand-heading mb-3">{list.title}</p>
                          )}
                          <ul className="space-y-3">
                            {list.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                                <span className="text-brand-body">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}

                  {section.callout && (
                    <div className="bg-brand-callout border-l-4 border-brand-primary rounded-r-lg p-6 my-8">
                      <p className="font-semibold text-brand-heading mb-2">
                        {section.callout.title}
                      </p>
                      <p className="text-brand-body">{section.callout.text}</p>
                    </div>
                  )}

                  {section.closingText && (
                    <p className="text-brand-body leading-7 mb-4 font-medium">
                      {section.closingText}
                    </p>
                  )}

                  {/* Image after first section */}
                  {sectionIndex === 0 && (
                    <div className="my-10 rounded-card overflow-hidden shadow-soft">
                      <img
                        src="/images/passenger-calm.jpg"
                        alt="Entspannter Passagier im Flugzeug"
                        loading="lazy"
                        width={700}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Image after "Formen" section */}
                  {sectionIndex === 2 && (
                    <div className="my-10 rounded-card overflow-hidden shadow-soft">
                      <img
                        src="/images/turbulence.jpg"
                        alt="Turbulenzen verstehen — Flugangst überwinden"
                        loading="lazy"
                        width={700}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* App CTA after "Wege" section */}
                  {sectionIndex === 4 && (
                    <div className="my-10 bg-brand-callout border border-brand-calloutBorder rounded-card p-6 text-center">
                      <p className="font-semibold text-brand-heading mb-4">
                        PassengerGuard — Dein Flugangst-Coach
                      </p>
                      <AppStoreBadges size="md" className="justify-center" />
                    </div>
                  )}
                </section>
              </AnimatedSection>
            ))}

            {/* FAQ Section */}
            <AnimatedSection>
              <section className="mt-16">
                <h2
                  id="faq"
                  className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 scroll-mt-24"
                >
                  Häufig gestellte Fragen
                </h2>
                <FaqAccordion items={c.faq} />
              </section>
            </AnimatedSection>

            <ContentCta showTrainingsplan />
            <RelatedPages pages={c.relatedPages} />
          </div>
        </div>
      </div>
    </>
  )
}
