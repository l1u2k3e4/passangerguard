import { asset } from '@/lib/utils'
import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/SectionHeading'
import GlowButton from '@/components/GlowButton'
import AppStoreBadges from '@/components/AppStoreBadges'
import AnimatedSection from '@/components/AnimatedSection'
import TrainingsplanVergleich from '@/components/TrainingsplanVergleich'

const quartale = [
  {
    quartal: 'Q1',
    zeitraum: 'Monat 1–3',
    titel: 'Die Grundlagen',
    beschreibung: 'Starte sanft: Verstehe deine Flugangst, baue Wissen auf und lerne erste Entspannungstechniken. In deinem Tempo, ohne Druck.',
    schwerpunkte: ['Flugangst verstehen', 'Wissen über das Fliegen', 'Erste Atemübungen'],
  },
  {
    quartal: 'Q2',
    zeitraum: 'Monat 4–6',
    titel: 'Training & Simulation',
    beschreibung: 'Dein erster Kopfflug, vertiefte Entspannungsübungen und detailliertes Wissen über jede Flugphase.',
    schwerpunkte: ['Kopfflug-Simulationen', 'Geführte Meditationen', 'Phasen des Fliegens'],
  },
  {
    quartal: 'Q3',
    zeitraum: 'Monat 7–9',
    titel: 'Vertiefung & Spezialwissen',
    beschreibung: 'Besondere Situationen meistern: Turbulenzen, Nachtflüge und ungewöhnliche Geräusche — alles wird vertraut.',
    schwerpunkte: ['Besondere Situationen', 'Wissenstests', 'Wiederholung Kopfflüge'],
  },
  {
    quartal: 'Q4',
    zeitraum: 'Monat 10–12',
    titel: 'Festigung & Routine',
    beschreibung: 'Wiederhole alle Module, festige deine Soforthilfe-Techniken und baue dir eine Routine für entspanntes Fliegen auf.',
    schwerpunkte: ['Alle Module wiederholen', 'Soforthilfe-Training', 'Persönliche Routine entwickeln'],
  },
]

export default function Trainingsplan12MonatePage() {
  useSEO({
    title: 'Trainingsplan 12 Monate — Langfristiger Flugangst-Plan | PassengerGuard',
    description: 'Jahres-Trainingsplan gegen Flugangst. Einmal pro Woche, in deinem Tempo. Kognitive Verhaltenstherapie, Flugsimulation und Atemtechniken.',
    canonical: 'https://www.passengerguard.com/flugangst-app/trainingsplan/12-monate',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
                Langzeitbegleitung
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                Trainingsplan: 12 Monate
              </h1>
              <p className="text-lg text-brand-body mb-2">
                Dein Jahresbegleiter gegen Flugangst
              </p>
              <p className="text-brand-muted">
                Für alle, die sich Zeit lassen möchten und Flugangst Schritt für Schritt in ihrem eigenen Tempo bewältigen wollen. Einmal pro Woche, flexibel und stressfrei.
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
                <p className="text-2xl font-bold text-brand-primary">52</p>
                <p className="text-sm text-brand-muted">Wochen</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">~1x</p>
                <p className="text-sm text-brand-muted">pro Woche</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">~15-20 Min.</p>
                <p className="text-sm text-brand-muted">pro Sitzung</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">Alle</p>
                <p className="text-sm text-brand-muted">Module + Wiederholungen</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quartalsplan Zigzag */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading tag="Jahresplan" title="Vier Quartale, ein Ziel: Entspannt fliegen" />
          </AnimatedSection>

          <div className="mt-12 space-y-12">
            {quartale.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex flex-col items-center justify-center text-white shadow-lg">
                    <span className="text-2xl font-bold">{item.quartal}</span>
                    <span className="text-xs opacity-80">{item.zeitraum}</span>
                  </div>

                  <div className="flex-1 bg-brand-surface rounded-card p-6 border border-brand-border/30">
                    <h3 className="text-xl font-bold text-brand-heading mb-2">{item.titel}</h3>
                    <p className="text-brand-body mb-4">{item.beschreibung}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.schwerpunkte.map((s) => (
                        <span key={s} className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Langzeit-Trainingsplan Dokument */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Dein Begleiter"
            title="Der komplette Jahres-Trainingsplan"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/trainingsplan-langzeit-s1.jpg')}
                alt="Langzeit-Trainingsplan 3, 6 und 12 Monate — Seite 1"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/trainingsplan-langzeit-s2.jpg')}
                alt="Langzeit-Trainingsplan 3, 6 und 12 Monate — Seite 2"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vortrag + App Nutzung */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-heading mb-4">
                Wissenschaftlich begleitet
              </h2>
              <p className="text-brand-body leading-relaxed mb-4">
                Der 12-Monats-Plan basiert auf den gleichen wissenschaftlichen Grundlagen wie die
                kürzeren Pläne — entwickelt in Zusammenarbeit mit der Ruhr-Universität Bochum.
              </p>
              <p className="text-brand-body leading-relaxed">
                Du trainierst in deinem eigenen Tempo, wiederholst Module nach Bedarf und baust dir
                eine nachhaltige Routine auf. Die App begleitet dich dabei — auch offline im Flugmodus.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src={asset('/images/trainingsplan-smartphone.jpg')}
                alt="PassengerGuard Trainingsplan auf dem Smartphone"
                className="w-full rounded-2xl shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              Für wen ist der 12-Monats-Plan?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-white rounded-card p-5 shadow-soft">
                <p className="font-semibold text-brand-heading mb-1">Lange nicht geflogen</p>
                <p className="text-sm text-brand-body">Du hast seit Jahren keinen Flug gemacht und möchtest dich langsam wieder herantasten.</p>
              </div>
              <div className="bg-white rounded-card p-5 shadow-soft">
                <p className="font-semibold text-brand-heading mb-1">Kein Zeitdruck</p>
                <p className="text-sm text-brand-body">Dein nächster Flug ist weit weg — du möchtest in Ruhe trainieren.</p>
              </div>
              <div className="bg-white rounded-card p-5 shadow-soft">
                <p className="font-semibold text-brand-heading mb-1">Starke Flugangst</p>
                <p className="text-sm text-brand-body">Deine Angst ist sehr stark und du möchtest Schritt für Schritt vorgehen.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vergleich */}
      <TrainingsplanVergleich active="12-monate" />

      {/* CTA */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              Starte deinen Jahresplan
            </h2>
            <p className="text-brand-body mb-8">
              In deinem Tempo, ohne Druck — Schritt für Schritt zur Flugangstfreiheit.
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
