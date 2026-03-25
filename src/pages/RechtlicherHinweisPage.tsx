import { useSEO } from '@/hooks/useSEO'

export default function RechtlicherHinweisPage() {
  useSEO({
    title: 'Rechtlicher Hinweis | PassengerGuard',
    description:
      'Rechtliche Hinweise zur PassengerGuard App. Informationen zu Gesundheitshinweisen und Haftungsausschluss.',
    canonical: 'https://www.passengerguard.com/rechtlicher-hinweis',
    robots: 'noindex, follow',
  })

  return (
    <section className="bg-white pt-24 md:pt-32">
      <div className="max-w-narrow mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8">
          Rechtlicher Hinweis
        </h1>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Gesundheitlicher Hinweis
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          PassengerGuard ist ein psychoedukatives Tool zur Unterstützung bei
          Flugangst. Die App wurde in Zusammenarbeit mit der Ruhr-Universität
          Bochum entwickelt und basiert auf Methoden der kognitiven
          Verhaltenstherapie (KVT).
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Die App ersetzt <strong>keine</strong> professionelle therapeutische
          oder ärztliche Behandlung. Bei schwerer Flugangst, Angststörungen oder
          anderen psychischen Erkrankungen empfehlen wir, professionelle Hilfe
          in Anspruch zu nehmen.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Haftungsausschluss
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die Nutzung der PassengerGuard App erfolgt auf eigenes Risiko. Die
          PassengerGuard UG übernimmt keine Haftung für den Erfolg der in der
          App bereitgestellten Methoden und Übungen. Eine Garantie, dass die
          Flugangst vollständig überwunden wird, kann nicht gegeben werden.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Externe Links
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Unsere Website und App können Links zu externen Websites enthalten.
          Auf deren Inhalte haben wir keinen Einfluss und übernehmen daher keine
          Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter verantwortlich.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Wissenschaftliche Basis
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die Inhalte der App basieren auf aktuellen wissenschaftlichen
          Erkenntnissen der Flugangst-Forschung. Die wissenschaftliche
          Begleitung erfolgte durch das Forschungs- und Behandlungszentrum für
          psychische Gesundheit (FBZ) der Ruhr-Universität Bochum.
        </p>

        <p className="text-brand-muted text-sm mt-12">Stand: März 2026</p>
      </div>
    </section>
  )
}
