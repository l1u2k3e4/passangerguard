import { useSEO } from '@/hooks/useSEO'
import { Mail } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import GlowButton from '@/components/GlowButton'

const faqItems = [
  {
    question: 'Wie lade ich die App herunter?',
    answer:
      'PassengerGuard ist im Apple App Store und Google Play Store verfügbar. Suche einfach nach "PassengerGuard" oder nutze die Links auf unserer Website.',
  },
  {
    question: 'Funktioniert die App offline?',
    answer:
      'Ja! Alle Audio-Inhalte und Übungen funktionieren auch im Flugmodus. Du kannst die App an Bord ohne Internetverbindung nutzen.',
  },
  {
    question: 'Kann ich mein Abo kündigen?',
    answer:
      'PassengerGuard ist ein Einmalkauf — es gibt kein Abo. Du zahlst einmal und hast dauerhaften Zugriff auf alle Inhalte.',
  },
  {
    question: 'Auf welchen Geräten läuft die App?',
    answer:
      'PassengerGuard läuft auf iPhones (iOS 15+) und Android-Smartphones (Android 8+).',
  },
  {
    question: 'Ich habe ein technisches Problem. Was tun?',
    answer:
      'Schreib uns eine E-Mail an hallo@passengerguard.com mit einer Beschreibung des Problems und deinem Gerätetyp. Wir helfen dir schnellstmöglich.',
  },
]

export default function SupportPage() {
  useSEO({
    title: 'Support & Hilfe | PassengerGuard',
    description:
      'Brauchst du Hilfe mit PassengerGuard? FAQ, Kontaktmöglichkeiten und technischer Support.',
    canonical: 'https://www.passengerguard.com/support',
    robots: 'noindex, follow',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-surface py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Support & Hilfe
          </h1>
          <p className="text-lg text-brand-body">
            Hast du Fragen oder brauchst Hilfe? Hier findest du Antworten und
            Kontaktmöglichkeiten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-heading mb-8">
            Häufige Fragen
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-heading mb-4">
            Noch Fragen?
          </h2>
          <p className="text-brand-body mb-6">
            Unser Team antwortet in der Regel innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hallo@passengerguard.com"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              E-Mail schreiben
            </a>
            <GlowButton href="/kontakt" variant="secondary">
              Kontaktformular
            </GlowButton>
          </div>
        </div>
      </section>
    </>
  )
}
