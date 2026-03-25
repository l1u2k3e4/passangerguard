import { asset } from '@/lib/utils'
import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/SectionHeading'
import GlowButton from '@/components/GlowButton'
import AppStoreBadges from '@/components/AppStoreBadges'
import AnimatedSection from '@/components/AnimatedSection'
import TrainingsplanVergleich from '@/components/TrainingsplanVergleich'

const wochenplan = [
  {
    tag: 'Tag 1',
    titel: 'Verstehen & Starten',
    beschreibung: 'Lerne, woher deine Flugangst kommt. Modul 1: Flugangst verstehen — die psychologischen Grundlagen.',
    modul: 'Modul 1: Flugangst verstehen',
    dauer: '~20 Min.',
  },
  {
    tag: 'Tag 2',
    titel: 'Wissen über das Fliegen',
    beschreibung: 'Ein Pilot erklärt alle Abläufe, Geräusche und Sicherheitsstandards. Wissen ersetzt Angst.',
    modul: 'Modul 2: Wissen über das Fliegen',
    dauer: '~20 Min.',
  },
  {
    tag: 'Tag 3',
    titel: 'Mentale Flugsimulation',
    beschreibung: 'Erlebe deinen ersten Kopfflug — eine geführte Audio-Simulation eines kompletten Fluges.',
    modul: 'Modul 3: Kopfflug',
    dauer: '~25 Min.',
  },
  {
    tag: 'Tag 4',
    titel: 'Entspannung & Atemtechniken',
    beschreibung: 'Lerne die 4-7-8 Atemtechnik und geführte Meditationen für jede Flugphase.',
    modul: 'Modul 4: Entspannung & Meditation',
    dauer: '~20 Min.',
  },
  {
    tag: 'Tag 5',
    titel: 'Phasen des Fliegens',
    beschreibung: 'Verstehe jeden Moment: Boarding, Start, Reiseflug, Turbulenz und Landung — Schritt für Schritt.',
    modul: 'Modul 5: Phasen des Fliegens',
    dauer: '~15 Min.',
  },
  {
    tag: 'Tag 6',
    titel: 'Besondere Situationen',
    beschreibung: 'Turbulenzen, ungewohnte Geräusche, Nachtflüge — alles erklärt und entmystifiziert.',
    modul: 'Modul 6: Besondere Situationen + Modul 7: Quiz',
    dauer: '~20 Min.',
  },
  {
    tag: 'Tag 7',
    titel: 'Soforthilfe & Wiederholung',
    beschreibung: 'Übe die Soforthilfe-Techniken und wiederhole deinen Kopfflug. Du bist bereit!',
    modul: 'Modul 8: Soforthilfe + Wiederholung',
    dauer: '~25 Min.',
  },
]

export default function Trainingsplan1WochePage() {
  useSEO({
    title: 'Trainingsplan 1 Woche — Flugangst Intensivplan | PassengerGuard',
    description: '7-Tage Intensivplan gegen Flugangst. Tägliche Übungen, mentale Flugsimulation und Atemtechniken — ideal zur kurzfristigen Vorbereitung.',
    canonical: 'https://www.passengerguard.com/flugangst-app/trainingsplan/1-woche',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
                Intensivplan
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                Trainingsplan: 1 Woche
              </h1>
              <p className="text-lg text-brand-body mb-2">
                Der Intensivplan für kurzfristige Vorbereitung
              </p>
              <p className="text-brand-muted">
                Ideal, wenn dein Flug in wenigen Tagen ansteht und du dich schnell vorbereiten möchtest.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Überblick */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-brand-surface rounded-card p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-brand-primary">7</p>
                <p className="text-sm text-brand-muted">Tage</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">~20 Min.</p>
                <p className="text-sm text-brand-muted">pro Tag</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">8</p>
                <p className="text-sm text-brand-muted">Module</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">1:39h</p>
                <p className="text-sm text-brand-muted">Audio gesamt</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trainingsplan Ausdruck */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Bild links */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/trainingsplan-1woche.jpg')}
                alt="Flugangst Trainingsplan 1 Woche (intensiv) — Ausdruckbarer Plan"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Text rechts */}
            <div>
              <h2 className="text-2xl font-bold text-brand-heading mb-4">
                Dein Intensivplan zum Ausdrucken
              </h2>
              <p className="text-brand-body leading-relaxed mb-4">
                Der 1-Wochen-Intensivplan ist so aufgebaut, dass du jeden Tag genau weißt, was zu tun ist.
                Drucke dir den Plan aus oder nutze ihn direkt in der App.
              </p>
              <p className="text-brand-body leading-relaxed">
                In nur 7 Tagen arbeitest du alle 8 Module durch — von Flugangst verstehen bis Soforthilfe an Bord.
                Ideal, wenn dein Flug in wenigen Tagen ansteht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagesplan Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading tag="Dein 7-Tage-Plan" title="Tag für Tag vorbereitet" />
          </AnimatedSection>

          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-primary/20" />

            <div className="space-y-8">
              {wochenplan.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="bg-brand-surface rounded-card p-5 flex-1 border border-brand-border/30">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-brand-primary uppercase">{item.tag}</span>
                        <span className="text-xs text-brand-muted">{item.dauer}</span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-heading mb-1">{item.titel}</h3>
                      <p className="text-sm text-brand-body mb-2">{item.beschreibung}</p>
                      <p className="text-xs text-brand-muted italic">{item.modul}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <TrainingsplanVergleich active="1-woche" />

      {/* CTA */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              In 7 Tagen bereit für deinen Flug
            </h2>
            <p className="text-brand-body mb-8">
              Starte jetzt mit dem Intensivplan und fühle dich beim nächsten Flug sicherer.
            </p>
            <GlowButton href="/flugangst-app" size="lg">App herunterladen</GlowButton>
            <div className="mt-6 flex justify-center">
              <AppStoreBadges />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
