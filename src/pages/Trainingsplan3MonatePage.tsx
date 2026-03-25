import { asset } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/SectionHeading'
import GlowButton from '@/components/GlowButton'
import AppStoreBadges from '@/components/AppStoreBadges'
import AnimatedSection from '@/components/AnimatedSection'
import TrainingsplanVergleich from '@/components/TrainingsplanVergleich'

const phasen = [
  {
    phase: 'Phase 1',
    zeitraum: 'Woche 1–4',
    titel: 'Verstehen & Grundlagen',
    beschreibung: 'In den ersten vier Wochen lernst du die Grundlagen. Du verstehst, woher Flugangst kommt (Modul 1), baust Wissen über das Fliegen auf (Modul 2) und lernst erste Entspannungstechniken (Modul 4).',
    module: ['Modul 1: Flugangst verstehen', 'Modul 2: Wissen über das Fliegen', 'Modul 4: Entspannung & Meditation'],
  },
  {
    phase: 'Phase 2',
    zeitraum: 'Woche 5–8',
    titel: 'Üben & Vertiefen',
    beschreibung: 'Jetzt geht es ans Eingemachte. Du absolvierst deine ersten Kopfflüge (Modul 3), lernst jede Flugphase im Detail kennen (Modul 5) und übst den Umgang mit besonderen Situationen (Modul 6).',
    module: ['Modul 3: Kopfflug', 'Modul 5: Phasen des Fliegens', 'Modul 6: Besondere Situationen'],
  },
  {
    phase: 'Phase 3',
    zeitraum: 'Woche 9–12',
    titel: 'Festigen & Bereit sein',
    beschreibung: 'In der Abschlussphase wiederholst du alle Übungen, testest dein Wissen im Quiz (Modul 7) und trainierst die Soforthilfe-Techniken (Modul 8) für den Ernstfall.',
    module: ['Modul 7: Quiz & Wissenstest', 'Modul 8: Soforthilfe', 'Wiederholung aller Kopfflüge'],
  },
]

export default function Trainingsplan3MonatePage() {
  useSEO({
    title: 'Trainingsplan 3 Monate — Nachhaltiger Erfolg gegen Flugangst | PassengerGuard',
    description: '12-Wochen Trainingsplan gegen Flugangst. Wissenschaftlich fundiertes Programm mit kognitiver Verhaltenstherapie — 2-3 Sitzungen pro Woche.',
    canonical: 'https://www.passengerguard.com/flugangst-app/trainingsplan/3-monate',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
                Empfohlen
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                Trainingsplan: 3 Monate
              </h1>
              <p className="text-lg text-brand-body mb-2">
                Der ausgewogene Plan für nachhaltigen Erfolg
              </p>
              <p className="text-brand-muted">
                Ideal, wenn du in den nächsten Wochen oder Monaten einen Flug hast und dich gründlich vorbereiten möchtest. Zwei bis drei Sitzungen pro Woche — ohne Zeitdruck.
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
                <p className="text-2xl font-bold text-brand-primary">12</p>
                <p className="text-sm text-brand-muted">Wochen</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">~2-3x</p>
                <p className="text-sm text-brand-muted">pro Woche</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">~15-20 Min.</p>
                <p className="text-sm text-brand-muted">pro Sitzung</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">8</p>
                <p className="text-sm text-brand-muted">Module vertieft</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Phasen */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading tag="12-Wochen-Plan" title="Drei Phasen zu entspanntem Fliegen" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {phasen.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-brand-surface rounded-card p-6 border border-brand-border/30 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <span className="text-brand-primary font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-primary uppercase">{item.phase}</p>
                      <p className="text-xs text-brand-muted">{item.zeitraum}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-heading mb-2">{item.titel}</h3>
                  <p className="text-sm text-brand-body mb-4">{item.beschreibung}</p>
                  <div className="space-y-1">
                    {item.module.map((modul) => (
                      <p key={modul} className="text-xs text-brand-muted flex items-center gap-2">
                        <Check className="w-3 h-3 text-brand-secondary" />
                        {modul}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wissenschaftlicher Trainingsplan */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Wissenschaftlich fundiert"
            title="Entwickelt mit der Ruhr-Universität Bochum"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/trainingsplan-rub-s1.jpg')}
                alt="Flugangst-Trainingsplan Ruhr-Universität Bochum Seite 1"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/trainingsplan-rub-s2.jpg')}
                alt="Flugangst-Trainingsplan Ruhr-Universität Bochum Seite 2"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-center text-sm text-brand-muted mt-6">
            Der Trainingsplan wurde in Zusammenarbeit mit dem Forschungs- und Behandlungszentrum für psychische Gesundheit (FBZ) entwickelt.
          </p>
        </div>
      </section>

      {/* Warum 3 Monate? */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              Warum 3 Monate?
            </h2>
            <p className="text-brand-body leading-relaxed mb-6">
              Studien zeigen, dass kognitive Verhaltenstherapie (KVT) am wirksamsten ist, wenn sie über
              mehrere Wochen regelmäßig angewendet wird. Der 3-Monats-Plan gibt dir genug Zeit, um
              Gelerntes zu verinnerlichen, Übungen zu wiederholen und echte Fortschritte zu erzielen —
              ohne Druck.
            </p>
            <p className="text-sm text-brand-muted italic">
              Entwickelt in Zusammenarbeit mit der Ruhr-Universität Bochum
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Block 1 — KVT Erklärung: Text links, Bild rechts */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text links */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-4">
                Wissenschaftliche Basis
              </span>
              <h3 className="text-2xl font-bold text-brand-heading mb-4">
                Kognitive Verhaltenstherapie (KVT)
              </h3>
              <p className="text-brand-body leading-relaxed mb-4">
                Die KVT ist die am besten erforschte Methode gegen Angststörungen.
                Sie hilft dir, negative Denkmuster zu erkennen und durch hilfreiche
                Überzeugungen zu ersetzen.
              </p>
              <p className="text-brand-body leading-relaxed">
                Der 3-Monats-Plan gibt dir genug Zeit, diese Methode in deinem
                eigenen Tempo zu verinnerlichen — Schritt für Schritt, ohne Druck.
              </p>
            </div>

            {/* KVT-Kreislauf-Bild rechts */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/kognitive-verhaltenstherapie.png')}
                alt="Kognitive Verhaltenstherapie — Kreislauf aus Gedanken, Gefühlen und Verhalten"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2 — PassengerGuard App: Bild links, Text rechts (umgekehrt) */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* App-KVT-Bild links */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={asset('/images/kvt-passengerguard.png')}
                alt="PassengerGuard App — Kognitive Verhaltenstherapie digital"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Text rechts */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold mb-4">
                Die App-Lösung
              </span>
              <h3 className="text-2xl font-bold text-brand-heading mb-4">
                KVT in deiner Hosentasche
              </h3>
              <p className="text-brand-body leading-relaxed mb-4">
                PassengerGuard übersetzt die Methoden der kognitiven Verhaltenstherapie
                in eine App — mit Audio-Übungen, mentalem Flugtraining und
                Entspannungstechniken.
              </p>
              <p className="text-brand-body leading-relaxed">
                Entwickelt in Zusammenarbeit mit dem Forschungs- und Behandlungszentrum
                für psychische Gesundheit (FBZ) der Ruhr-Universität Bochum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <TrainingsplanVergleich active="3-monate" />

      {/* CTA */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              Starte deinen 3-Monats-Plan
            </h2>
            <p className="text-brand-body mb-8">
              Bereite dich gründlich und stressfrei auf deinen nächsten Flug vor.
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
