import { useSEO } from '@/hooks/useSEO'
import { Brain, Smartphone, Headphones, GraduationCap } from 'lucide-react'
import GlowButton from '@/components/GlowButton'

const videoHighlights = [
  { icon: Brain, text: 'Wie Flugangst entsteht und was dagegen hilft' },
  { icon: Smartphone, text: 'Wie die PassengerGuard App aufgebaut ist' },
  { icon: Headphones, text: 'Was ein Kopfflug (mentale Flugsimulation) ist' },
  { icon: GraduationCap, text: 'Welche wissenschaftliche Basis dahinter steckt' },
]

export default function KurzvideoPage() {
  useSEO({
    title: 'PassengerGuard Kurzvideo — App gegen Flugangst | PassengerGuard',
    description:
      'Schau dir das offizielle PassengerGuard Kurzvideo an. Erfahre in 2 Minuten, wie die App gegen Flugangst funktioniert.',
    canonical: 'https://www.passengerguard.com/flugangst-app/kurzvideo',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
            Kurzvideo
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
            PassengerGuard in 2 Minuten erklärt
          </h1>
          <p className="text-lg text-brand-body max-w-2xl mx-auto">
            Erfahre, wie PassengerGuard dir hilft, Flugangst nachhaltig zu
            überwinden — mit wissenschaftlich fundierten Methoden.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card">
            {/* TODO: YouTube-ID einfügen */}
            <iframe
              src="https://www.youtube.com/embed/QxNDzgzeL4g"
              title="PassengerGuard Kurzvideo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-brand-muted mt-4">
            Falls das Video nicht lädt, schaue es dir direkt auf
            <a
              href="https://www.youtube.com/watch?v=QxNDzgzeL4g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline ml-1"
            >
              YouTube
            </a>{' '}
            an.
          </p>
        </div>
      </section>

      {/* Was du erfährst */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-heading text-center mb-8">
            Das erfährst du im Video
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoHighlights.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-soft"
              >
                <item.icon className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <p className="text-brand-body text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-heading mb-4">
            Bereit loszulegen?
          </h2>
          <GlowButton href="/flugangst-app" size="lg">
            Zur App-Übersicht
          </GlowButton>
        </div>
      </section>
    </>
  )
}
