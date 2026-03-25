import { useSEO } from '@/hooks/useSEO'

export default function ImpressumPage() {
  useSEO({
    title: 'Impressum | PassengerGuard UG',
    description:
      'Impressum der PassengerGuard UG (haftungsbeschränkt), Castrop-Rauxel. Angaben gemäß § 5 TMG.',
    canonical: 'https://www.passengerguard.com/impressum',
    robots: 'noindex, follow',
  })

  return (
    <section className="bg-white pt-24 md:pt-32">
      <div className="max-w-narrow mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8">
          Impressum
        </h1>

        <h2 className="text-2xl font-bold text-brand-heading mt-0 mb-4">
          Angaben gemäß § 5 TMG
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          PassengerGuard UG (haftungsbeschränkt)
          <br />
          Holzstrasse 5<br />
          44575 Castrop-Rauxel
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Vertreten durch
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Geschäftsführer: Daniel Jankowski
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Kontakt
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Telefon:{' '}
          <a
            href="tel:+4915227332538"
            className="text-brand-primary hover:underline"
          >
            +49 (0)152 27332538
          </a>
          <br />
          E-Mail:{' '}
          <a
            href="mailto:hallo@passengerguard.com"
            className="text-brand-primary hover:underline"
          >
            hallo@passengerguard.com
          </a>
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Registereintrag
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Eintragung im Handelsregister
          <br />
          Registergericht: Amtsgericht Dortmund
          <br />
          Registernummer: HRB 34481
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Umsatzsteuer-ID
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          DE356764316
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Haftung für Inhalte
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Haftung für Links
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Urheberrecht
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </section>
  )
}
