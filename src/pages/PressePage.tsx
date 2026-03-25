import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/SectionHeading'
import LogoCarousel from '../components/LogoCarousel'

const mediaBeitraege = [
  {
    medium: 'WDR',
    titel: 'Flugangst-App im wissenschaftlichen Test',
    beschreibung:
      'Der WDR begleitet die Studie mit der Ruhr-Universität Bochum und berichtet über die Ergebnisse.',
    embedUrl: 'https://www.youtube.com/embed/9KyCF53p8-k',
    datum: '2024',
  },
  {
    medium: 'RTL',
    titel: 'PassengerGuard hilft gegen Flugangst',
    beschreibung:
      'RTL zeigt, wie Betroffene mit der App ihre Flugangst überwinden.',
    embedUrl: 'https://www.youtube.com/embed/1gRRW3Uhwpk',
    datum: '2024',
  },
]

export default function PressePage() {
  useSEO({
    title: 'Presse und Medien | PassengerGuard',
    description:
      'PassengerGuard in den Medien. Presseberichte, TV-Beiträge und Downloads für Journalisten.',
    canonical: 'https://www.passengerguard.com/presse-und-medien',
  })

  return (
    <>
      {/* Hero — Professionell, klar lesbar */}
      <section className="relative overflow-hidden">
        {/* Oberer Teil — Heller Hintergrund für Lesbarkeit */}
        <div className="bg-gradient-to-br from-brand-surface via-white to-brand-primaryLight/20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              Presse & Medien
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              PassengerGuard in den Medien
            </h1>
            <p className="text-lg text-brand-body max-w-2xl mx-auto">
              TV-Beiträge, Presseberichte und Materialien für Journalisten.
              PassengerGuard wurde in über 18 Medienkanälen vorgestellt.
            </p>
          </div>
        </div>

        {/* Logo-Karussell auf dunklem Streifen */}
        <div className="bg-brand-navy py-8 overflow-hidden">
          <p className="text-center text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">
            Bekannt aus
          </p>
          <LogoCarousel />
        </div>
      </section>

      {/* TV-Beiträge */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="TV-Beiträge" title="PassengerGuard im Fernsehen" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {mediaBeitraege.map((item) => (
              <div
                key={item.medium}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={item.embedUrl}
                    title={item.titel}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-xs font-bold">
                      {item.medium}
                    </span>
                    <span className="text-xs text-brand-muted">
                      {item.datum}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-heading mb-1">
                    {item.titel}
                  </h3>
                  <p className="text-sm text-brand-body">{item.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fakten & Zahlen */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Fakten" title="PassengerGuard auf einen Blick" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            <div className="bg-white rounded-xl p-5 shadow-soft">
              <p className="text-2xl font-bold text-brand-primary">8</p>
              <p className="text-xs text-brand-muted">Module</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-soft">
              <p className="text-2xl font-bold text-brand-primary">36</p>
              <p className="text-xs text-brand-muted">Lektionen</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-soft">
              <p className="text-2xl font-bold text-brand-primary">1:39h</p>
              <p className="text-xs text-brand-muted">Audio-Training</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-soft">
              <p className="text-2xl font-bold text-brand-primary">RUB</p>
              <p className="text-xs text-brand-muted">Wissenschaftlich geprüft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pressekontakt */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-heading mb-4">
            Pressekontakt
          </h2>
          <p className="text-brand-body mb-6">
            Für Presseanfragen, Interviews oder Bildmaterial kontaktieren Sie
            uns gerne:
          </p>
          <div className="bg-brand-surface rounded-xl p-6 inline-block text-left">
            <p className="font-semibold text-brand-heading">
              PassengerGuard UG (haftungsbeschränkt)
            </p>
            <p className="text-brand-body">Daniel Jankowski, Geschäftsführer</p>
            <a
              href="mailto:hallo@passengerguard.com"
              className="text-brand-primary hover:underline block mt-2"
            >
              hallo@passengerguard.com
            </a>
            <a
              href="tel:+4915227332538"
              className="text-brand-body hover:text-brand-primary block"
            >
              +49 (0)152 27332538
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
