import { motion } from 'framer-motion'
import {
  Check,
  Brain,
  Compass,
  Headphones,
  Wind,
  Layers,
  CloudLightning,
  Award,
  Heart,
  Calendar,
  Zap,
} from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import GlowButton from '@/components/GlowButton'
import AppStoreBadges from '@/components/AppStoreBadges'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import PricingSection from '@/sections/home/PricingSection'
import FaqAccordion from '@/components/FaqAccordion'
import { appContent as c } from '@/data/appContent'

const appFaqItems = [
  {
    question: 'Für wen ist PassengerGuard geeignet?',
    answer: 'PassengerGuard ist für alle Menschen mit Flugangst geeignet — egal ob leichte Unruhe oder starke Panikattacken. Die App basiert auf kognitiver Verhaltenstherapie und wurde mit der Ruhr-Universität Bochum entwickelt.',
  },
  {
    question: 'Wie lange dauert das Training?',
    answer: 'Das gesamte Programm umfasst 8 Module mit insgesamt 1:39 Stunden Audio-Material. Du kannst zwischen einem 1-Wochen-Intensivplan, einem 3-Monats-Plan oder einem 12-Monats-Langzeitplan wählen.',
  },
  {
    question: 'Funktioniert die App auch offline?',
    answer: 'Ja! Alle Audio-Inhalte und Übungen sind offline verfügbar. Du kannst die App auch im Flugmodus nutzen — perfekt für den Einsatz an Bord.',
  },
  {
    question: 'Was ist ein Kopfflug?',
    answer: 'Der Kopfflug ist eine geführte mentale Flugsimulation. Du erlebst einen kompletten Flug — vom Boarding bis zur Landung — als Audio-Übung. So wird das Fliegen im sicheren Umfeld trainiert.',
  },
  {
    question: 'Ist PassengerGuard ein Abo?',
    answer: 'Nein, PassengerGuard ist ein Einmalkauf. Du zahlst einmal und hast dauerhaften Zugriff auf alle 8 Module, 36 Lektionen und zukünftige Updates.',
  },
  {
    question: 'Auf welchen Geräten läuft die App?',
    answer: 'PassengerGuard ist im Apple App Store (iOS 15+) und Google Play Store (Android 8+) verfügbar.',
  },
  {
    question: 'Ist PassengerGuard wissenschaftlich fundiert?',
    answer: 'Ja. PassengerGuard wurde in Zusammenarbeit mit dem Forschungs- und Behandlungszentrum für psychische Gesundheit (FBZ) der Ruhr-Universität Bochum entwickelt und basiert auf Methoden der kognitiven Verhaltenstherapie (KVT).',
  },
]

const moduleIcons = {
  Brain,
  Compass,
  Headphones,
  Wind,
  Layers,
  CloudLightning,
  Award,
  Heart,
} as const

export default function AppPage() {
  useSEO({
    title: 'PassengerGuard Flugangst-App: 8 Module | iOS & Android',
    description:
      'Die wissenschaftlich geprüfte App gegen Flugangst. 8 Module, Audio-Flugsimulation, Atemübungen & Pilotenwissen.',
    canonical: 'https://www.passengerguard.com/flugangst-app',
  })

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block text-brand-primary text-sm font-semibold uppercase tracking-wider mb-4">
                {c.hero.tag}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading text-balance">
                {c.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-brand-body mt-6 max-w-[580px] mx-auto lg:mx-0">
                {c.hero.subtitle}
              </p>

              <ul className="mt-8 space-y-3 text-left inline-block">
                {c.hero.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                    <span className="text-brand-body">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GlowButton href="https://apps.apple.com/de/app/passengerguard-flugangst/id6449045795" size="lg">
                  {c.hero.ctaPrimary}
                </GlowButton>
                <GlowButton href="/flugangst-app/trainingsplan/1-woche" variant="secondary" size="lg">
                  {c.hero.ctaSecondary}
                </GlowButton>
              </div>

              <div className="mt-6 flex justify-center lg:justify-start">
                <AppStoreBadges size="md" />
              </div>
            </motion.div>

            {/* Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto lg:max-w-xl"
            >
              {/* Hauptscreen zentral */}
              <img
                src="/images/screen-training.jpg"
                alt="PassengerGuard App Startbildschirm"
                className="w-64 md:w-72 lg:w-80 mx-auto rounded-3xl shadow-2xl relative z-10"
                loading="lazy"
              />
              {/* Seitliche Screenshots leicht versetzt */}
              <img
                src="/images/screen-home.jpg"
                alt="PassengerGuard Training-Modul"
                className="absolute -left-4 top-8 w-48 md:w-56 lg:w-64 rounded-2xl shadow-xl -rotate-6 opacity-90"
                loading="lazy"
              />
              <img
                src="/images/screen-kopfflug.jpg"
                alt="PassengerGuard Kopfflug-Simulation"
                className="absolute -right-4 top-8 w-48 md:w-56 lg:w-64 rounded-2xl shadow-xl rotate-6 opacity-90"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Die 8 Module */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading title={c.modules.title} />
          </AnimatedSection>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-brand-border" />

            <div className="space-y-6">
              {c.modules.items.map((mod, index) => {
                const Icon = moduleIcons[mod.icon]
                return (
                  <AnimatedSection key={mod.number} delay={index * 0.08}>
                    <div className="flex gap-6 items-start">
                      {/* Number circle */}
                      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-brand-primary text-white items-center justify-center font-bold text-xl z-10 relative">
                        {mod.number}
                      </div>

                      {/* Card */}
                      <div className="flex-1 bg-white rounded-card shadow-soft p-6 border border-brand-border/30 hover:shadow-card hover:border-brand-primary/20 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <span className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                            {mod.number}
                          </span>
                          <div className="bg-brand-primaryLight rounded-xl p-2.5 flex-shrink-0">
                            <Icon className="w-5 h-5 text-brand-primary" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold text-brand-heading">
                              {mod.title}
                            </h3>
                            <p className="text-brand-body mt-1">{mod.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Trainingsplan */}
      <section id="trainingsplan" className="bg-brand-surface py-16 md:py-24 scroll-mt-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading tag={c.trainingsplan.tag} title={c.trainingsplan.title} />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <AnimatedSection>
              <p className="text-brand-body text-lg leading-relaxed">
                {c.trainingsplan.text}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {c.trainingsplan.plans.map((plan) => (
                  <div
                    key={plan.title}
                    className="bg-white rounded-card shadow-soft p-6 border border-brand-border/30"
                  >
                    <Calendar className="w-8 h-8 text-brand-primary mb-3" />
                    <h3 className="font-display text-lg font-bold text-brand-heading">
                      {plan.title}
                    </h3>
                    <p className="text-brand-primary font-medium text-sm mt-1">
                      {plan.subtitle}
                    </p>
                    <p className="text-brand-body text-sm mt-2">{plan.details}</p>
                    <p className="text-brand-muted text-xs mt-2">{plan.ideal}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-card overflow-hidden shadow-card">
                <img
                  src="/images/trainingsplan-rub.jpg"
                  alt="Trainingsplan Ruhr-Universität Bochum"
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4 — Wissenschaft & Studie */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-brand-callout/50 rounded-card p-8 md:p-12 border border-brand-calloutBorder">
              <SectionHeading title={c.studie.title} align="left" />
              <p className="text-brand-body text-lg leading-relaxed mt-4">
                {c.studie.text}
              </p>

              <div className="mt-8 space-y-4">
                {c.studie.timeline.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-heading text-sm">
                        {item.date}
                      </p>
                      <p className="text-brand-body text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-border">
                <Zap className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-brand-body text-sm">{c.studie.wdrNote}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5 — Preise */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Häufige Fragen"
            title="Alles über die PassengerGuard App"
          />
          <FaqAccordion items={appFaqItems} />
        </div>
      </section>
    </>
  )
}
