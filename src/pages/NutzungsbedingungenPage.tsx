import { useSEO } from '@/hooks/useSEO'

export default function NutzungsbedingungenPage() {
  useSEO({
    title: 'Nutzungsbedingungen | PassengerGuard',
    description:
      'Nutzungsbedingungen für die PassengerGuard App und Website.',
    canonical: 'https://www.passengerguard.com/nutzungsbedingungen',
    robots: 'noindex, follow',
  })

  return (
    <section className="bg-white pt-24 md:pt-32">
      <div className="max-w-narrow mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8">
          Nutzungsbedingungen
        </h1>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          1. Nutzung der App
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die PassengerGuard App darf ausschließlich für den persönlichen,
          nicht-kommerziellen Gebrauch genutzt werden. Die Weitergabe von
          Zugangsdaten oder das Teilen des Accounts ist nicht gestattet.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          2. Nutzung der Website
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die Inhalte dieser Website sind urheberrechtlich geschützt. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
          Zustimmung der PassengerGuard UG.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          3. Geistiges Eigentum
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Alle Inhalte der App und Website — einschließlich Texte,
          Audio-Dateien, Grafiken, Logos und Software — sind Eigentum der
          PassengerGuard UG oder ihrer Lizenzgeber und durch deutsches und
          internationales Urheberrecht geschützt.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          4. Verfügbarkeit
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir bemühen uns um eine hohe Verfügbarkeit der App und Website. Ein
          Anspruch auf ununterbrochene Verfügbarkeit besteht jedoch nicht.
          Wartungsarbeiten und technische Störungen können zu vorübergehenden
          Einschränkungen führen.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          5. Änderungen
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern.
          Über wesentliche Änderungen informieren wir die Nutzer in
          angemessener Weise.
        </p>

        <p className="text-brand-muted text-sm mt-12">Stand: März 2026</p>
      </div>
    </section>
  )
}
