import { useSEO } from '@/hooks/useSEO'

export default function AgbPage() {
  useSEO({
    title: 'Allgemeine Geschäftsbedingungen | PassengerGuard',
    description:
      'AGB der PassengerGuard UG (haftungsbeschränkt). Allgemeine Geschäftsbedingungen für die Nutzung der App und Website.',
    canonical: 'https://www.passengerguard.com/agb',
    robots: 'noindex, follow',
  })

  return (
    <section className="bg-white pt-24 md:pt-32">
      <div className="max-w-narrow mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 1 Geltungsbereich
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der
          PassengerGuard App und aller damit verbundenen Dienste der
          PassengerGuard UG (haftungsbeschränkt), Holzstrasse 5, 44575
          Castrop-Rauxel.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 2 Vertragsgegenstand
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Gegenstand des Vertrages ist die Bereitstellung der PassengerGuard App
          zur Unterstützung bei Flugangst. Die App bietet psychoedukative
          Inhalte, Entspannungsübungen und mentale Simulationen. Sie ersetzt
          keine therapeutische Behandlung.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 3 Vertragsschluss
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Der Vertrag kommt durch den Kauf der App im Apple App Store oder
          Google Play Store zustande. Es gelten zusätzlich die
          Geschäftsbedingungen des jeweiligen Store-Betreibers.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 4 Preise und Zahlung
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die aktuellen Preise sind im jeweiligen App Store ersichtlich.
          PassengerGuard ist ein Einmalkauf — es fallen keine wiederkehrenden
          Gebühren an. Die Zahlungsabwicklung erfolgt über den jeweiligen
          Store-Betreiber.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 5 Widerrufsrecht
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Das Widerrufsrecht richtet sich nach den Bestimmungen des jeweiligen
          App Stores (Apple App Store / Google Play Store). Bitte wenden Sie
          sich bei Fragen zum Widerruf direkt an den jeweiligen
          Store-Betreiber.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 6 Haftung
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          PassengerGuard bietet psychoedukative Inhalte zur Unterstützung bei
          Flugangst. Die App ersetzt keine ärztliche oder therapeutische
          Behandlung. Bei schwerer Flugangst empfehlen wir zusätzlich
          professionelle Hilfe in Anspruch zu nehmen. Eine Garantie für den
          Erfolg der Maßnahmen wird nicht übernommen.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          § 7 Schlussbestimmungen
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist,
          soweit gesetzlich zulässig, Dortmund. Sollten einzelne Bestimmungen
          dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen
          Bestimmungen unberührt.
        </p>

        <p className="text-brand-muted text-sm mt-12">Stand: März 2026</p>
      </div>
    </section>
  )
}
