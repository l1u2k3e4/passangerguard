import { asset } from '@/lib/utils'
import { Brain, Target, Building, WifiOff, Check } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import GlowButton from '@/components/GlowButton'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const benefits = [
  {
    icon: Brain,
    titel: 'Stressfrei reisen',
    text: 'Reduziere Flugangst und sei mental vorbereitet — egal ob Kurzstrecke oder Langstrecke.',
  },
  {
    icon: Target,
    titel: 'Leistung am Zielort',
    text: 'Komme erholt und konzentriert an — bereit für Meetings, Verhandlungen oder Wettkämpfe.',
  },
  {
    icon: Building,
    titel: 'Einfache Lizenzierung',
    text: 'Über Apple Business Manager — einmalige Zahlung, keine Abos nötig.',
  },
  {
    icon: WifiOff,
    titel: 'Offline nutzbar',
    text: 'Funktioniert auch im Flugmodus — an Bord, auf dem Rollfeld, überall.',
  },
]

const appModules = [
  'Flugangst verstehen',
  'Wissen über das Fliegen',
  'Kopfflug — Mentale Simulation',
  'Entspannung & Meditation',
  'Soforthilfe an Bord',
]

export default function BusinessClassPage() {
  useSEO({
    title: 'PassengerGuard Business: Flugangst-Lösung für Unternehmen',
    description:
      'PassengerGuard Business — die Flugangst-App für Geschäftsreisende. Volumenlizenzierung ab 99€.',
    canonical: 'https://www.passengerguard.com/flugangst-app/business-class',
  })

  return (
    <>
      {/* Section 1 — Hero (heller Hintergrund, wie Startseite) */}
      <section className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
                Für Vielflieger & Unternehmen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-heading leading-tight mb-6">
                Maximale Leistung.
                <br />
                <span className="text-brand-primary">Minimaler Flugstress.</span>
              </h1>
              <p className="text-lg text-brand-body mb-8 leading-relaxed">
                Internationale Meetings erfordern mentale Stärke und Klarheit.
                PassengerGuard Business unterstützt Vielflieger und
                Geschäftsreisende dabei, Flugstress zu reduzieren und am Zielort
                leistungsfähig zu sein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton href="/kontakt" size="lg">
                  Lizenzmodell anfragen
                </GlowButton>
                <GlowButton href="#vorteile" variant="secondary" size="lg">
                  Mehr erfahren
                </GlowButton>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={asset('/images/business-vielflieger.webp')}
                alt="Geschäftsreisende nutzen PassengerGuard im Flugzeug"
                className="w-full rounded-2xl shadow-card"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2 — Statistiken */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <div className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  10 Mio.
                </p>
                <p className="text-brand-body">
                  Geschäftsflüge werden jährlich aus Angst abgesagt
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  38%
                </p>
                <p className="text-brand-body">
                  der Deutschen haben Flugangst
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  92%
                </p>
                <p className="text-brand-body">
                  empfehlen PassengerGuard weiter
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3 — Problem */}
      <section className="bg-brand-surface py-20" id="vorteile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={asset('/images/man-verzweifelt.png')}
                  alt="Geschäftsreisender mit Flugangst — Stress und Verzweiflung"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
                Das Problem
              </span>
              <h2 className="text-3xl font-bold text-brand-heading mb-6">
                Flugangst kostet Unternehmen Millionen
              </h2>
              <div className="space-y-4 text-brand-body">
                <p>
                  Flugangst betrifft nicht nur Privatreisende. Millionen
                  Geschäftsflüge werden jährlich storniert oder vermieden — aus
                  Angst.
                </p>
                <p>
                  Die Folgen: verpasste Meetings, eingeschränkte
                  Karrierechancen, erhöhtes Burnout-Risiko und steigende Kosten
                  für Unternehmen.
                </p>
                <p>
                  Profisportler leiden zusätzlich unter Konzentrationsverlust und
                  Schlafmangel vor wichtigen Wettkämpfen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4 — Die Lösung / Vorteile */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Die Lösung"
              title="PassengerGuard Business — Entwickelt für Professionals"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.titel} delay={i * 0.05}>
                <div className="bg-brand-surface rounded-card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-heading mb-2">
                    {item.titel}
                  </h3>
                  <p className="text-sm text-brand-body">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — App-Ansicht */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-4">
                Die App
              </span>
              <h2 className="text-3xl font-bold text-brand-heading mb-6">
                8 Module. 1:39h Audio-Training.
              </h2>
              <p className="text-brand-body mb-6">
                PassengerGuard Business bietet den gleichen wissenschaftlich
                fundierten Inhalt wie die Standard-App — optimiert für den
                Einsatz in Unternehmen und Organisationen.
              </p>
              <ul className="space-y-3">
                {appModules.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-brand-body"
                  >
                    <Check className="w-5 h-5 text-brand-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={asset('/images/kognitive-verhaltenstherapie.png')}
                alt="Kognitive Verhaltenstherapie — Kreislauf aus Gedanken, Gefühlen und Verhalten"
                className="w-full rounded-2xl shadow-card"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 6 — Lizenzmodell */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
            Lizenzierung
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Einfache Volumenlizenzierung
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto mb-12">
            Über den Apple Business Manager — einmalige Zahlung, keine laufenden Kosten.
          </p>

          {/* Premium Card */}
          <div className="relative max-w-lg mx-auto">
            {/* Dekorativer Hintergrund-Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-3xl opacity-20 blur-xl" />

            <div className="relative bg-white border-2 border-brand-primary/20 rounded-2xl overflow-hidden shadow-xl">
              {/* Header-Streifen */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-5">
                <p className="text-white text-sm font-semibold uppercase tracking-widest">
                  Business Lizenz
                </p>
              </div>

              {/* Preis */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl md:text-6xl font-bold text-brand-heading">99</span>
                  <span className="text-2xl font-bold text-brand-heading">€</span>
                </div>
                <p className="text-brand-muted text-sm">pro Lizenz · einmalig</p>
              </div>

              {/* Divider */}
              <div className="mx-8 h-px bg-gray-100" />

              {/* Features */}
              <div className="px-8 py-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-brand-body text-sm">Kein Abo — einmalige Zahlung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-brand-body text-sm">Ideal ab 10 Lizenzen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-brand-body text-sm">Individuelle Betreuung & Onboarding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-brand-body text-sm">Rechnungsstellung möglich</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-brand-body text-sm">Über Apple Business Manager</span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <GlowButton href="/kontakt" size="lg" className="w-full">
                  Jetzt anfragen
                </GlowButton>
                <p className="text-xs text-brand-muted mt-3">
                  Wir melden uns innerhalb von 24 Stunden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
              Investieren Sie in die mentale Gesundheit Ihres Teams
            </h2>
            <p className="text-brand-body mb-8">
              Weniger Flugstress bedeutet mehr Leistung, weniger Ausfälle und
              zufriedenere Mitarbeiter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="/kontakt" size="lg">
                Kontakt aufnehmen
              </GlowButton>
              <GlowButton href="/flugangst-app" variant="secondary" size="lg">
                Mehr über die App
              </GlowButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
