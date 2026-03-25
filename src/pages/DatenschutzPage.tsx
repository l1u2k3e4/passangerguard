import { useSEO } from '@/hooks/useSEO'

export default function DatenschutzPage() {
  useSEO({
    title: 'Datenschutzerklärung | PassengerGuard',
    description:
      'Datenschutzerklärung der PassengerGuard UG. Informationen zur Datenerhebung, -verarbeitung und Ihren Rechten gemäß DSGVO.',
    canonical: 'https://www.passengerguard.com/datenschutz',
    robots: 'noindex, follow',
  })

  return (
    <section className="bg-white pt-24 md:pt-32">
      <div className="max-w-narrow mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8">
          Datenschutzerklärung
        </h1>

        <p className="text-brand-body leading-relaxed mb-4">
          Datenschutzrichtlinie für den App-Store von Apple und Google Play für
          die Kauf-App PassengerGuard. Vielen Dank für Ihr Interesse an unserer
          App PassengerGuard. Der Schutz Ihrer personenbezogenen Daten ist uns
          sehr wichtig, und wir möchten Sie daher über die Art, den Umfang und
          die Zwecke der Erhebung und Verwendung Ihrer Daten informieren.
        </p>

        {/* 1) Verantwortlicher */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          1) Verantwortlicher für die Datenverarbeitung
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Verantwortlicher für die Datenverarbeitung im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist die PassengerGuard UG
          (haftungsbeschränkt), Holzstrasse 5, 44575 Castrop-Rauxel, Deutschland
          (im Folgenden „wir" oder „uns"). Bei Fragen zum Datenschutz können Sie
          uns gerne unter{' '}
          <a
            href="mailto:hallo@passengerguard.com"
            className="text-brand-primary hover:underline"
          >
            hallo@passengerguard.com
          </a>{' '}
          kontaktieren.
        </p>

        {/* 2) Erhebung und Verwendung */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          2) Erhebung und Verwendung von personenbezogenen Daten
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir erheben und verwenden personenbezogene Daten nur im Rahmen der
          gesetzlichen Bestimmungen und nur dann, wenn dies für die
          Bereitstellung unserer App erforderlich ist. Wenn Sie unsere App
          nutzen, erheben wir die folgenden Daten:
        </p>
        <ul className="list-disc list-inside text-brand-body leading-relaxed mb-4 space-y-1">
          <li>Geräteinformationen (z. B. Modell, Betriebssystem, IP-Adresse)</li>
          <li>
            Nutzungsdaten (z. B. Datum, Uhrzeit, Dauer der Nutzung,
            Klickverhalten)
          </li>
          <li>
            Zahlungsdaten (z. B. Name, Adresse, Kreditkarteninformationen)
          </li>
        </ul>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir verwenden diese Daten, um Ihnen die von Ihnen angeforderten
          Dienste bereitzustellen und um unsere App zu verbessern. Ihre
          Zahlungsdaten werden von uns ausschließlich zur Abwicklung von
          Zahlungen verwendet.
        </p>

        {/* 3) Weitergabe */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          3) Weitergabe von personenbezogenen Daten
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir geben Ihre personenbezogenen Daten nur dann an Dritte weiter, wenn
          dies zur Erfüllung unserer vertraglichen Pflichten erforderlich ist
          oder wenn wir gesetzlich dazu verpflichtet sind. Insbesondere geben wir
          Ihre Daten an Zahlungsdienstleister weiter, um die Abwicklung von
          Zahlungen zu ermöglichen.
        </p>

        {/* 4) Dauer der Speicherung */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          4) Dauer der Speicherung
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für
          die Erfüllung der genannten Zwecke erforderlich ist oder solange wir
          gesetzlich dazu verpflichtet sind. Nach Ablauf der jeweiligen Frist
          werden die entsprechenden Daten gelöscht.
        </p>

        {/* 5) Google Analytics */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          5) Google Analytics
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Auf unserer Website verwenden wir Google Analytics, einen
          Webanalysedienst von Google Inc. („Google"). Google Analytics verwendet
          Cookies, die auf Ihrem Endgerät gespeichert werden und eine Analyse
          Ihrer Nutzung unserer Website ermöglichen. Die Nutzung von Google
          Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die
          Speicherung von Cookies durch Google Analytics kann durch eine
          entsprechende Einstellung Ihrer Browser-Software verhindert werden.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Google Analytics verwendet Cookies, um Informationen über die
          Benutzung unserer Website zu sammeln und an Google-Server in den USA zu
          übermitteln. Dabei werden in der Regel folgende Informationen erfasst:
        </p>
        <ul className="list-disc list-inside text-brand-body leading-relaxed mb-4 space-y-1">
          <li>IP-Adresse des Endgeräts, das die Website besucht</li>
          <li>Aufgerufene Seiten auf der Website</li>
          <li>Verweildauer auf den einzelnen Seiten</li>
          <li>Herkunftsland und -stadt des Besuchers</li>
          <li>Art des Endgeräts (Desktop, Tablet, Smartphone)</li>
        </ul>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir haben Google Analytics so eingestellt, dass die IP-Adresse der
          Nutzer anonymisiert wird, bevor sie an Google übermittelt wird. Eine
          Zusammenführung der IP-Adresse mit anderen Daten von Google findet
          nicht statt.
        </p>

        {/* Weitergabe an Dritte */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Weitergabe von Daten an Dritte
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir geben Ihre Daten nur dann an Dritte weiter, wenn dies gesetzlich
          vorgeschrieben ist oder wenn wir Ihre Einwilligung dazu erhalten
          haben. In manchen Fällen arbeiten wir mit externen Dienstleistern
          zusammen, die Ihre Daten in unserem Auftrag verarbeiten. Diese
          Dienstleister sind vertraglich verpflichtet, Ihre Daten nur gemäß
          unserer Anweisungen zu verarbeiten und entsprechende
          Sicherheitsvorkehrungen zu treffen.
        </p>

        {/* Datensicherheit */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Datensicherheit
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um
          Ihre Daten gegen unbefugte Zugriffe, Verlust oder Manipulation zu
          schützen. Unsere Sicherheitsmaßnahmen werden regelmäßig überprüft und
          an den aktuellen Stand der Technik angepasst.
        </p>

        {/* 6) Ihre Rechte */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          6) Ihre Rechte
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Sie haben das Recht, Auskunft darüber zu verlangen, welche
          personenbezogenen Daten wir über Sie gespeichert haben. Außerdem haben
          Sie das Recht, unrichtige Daten berichtigen oder unvollständige Daten
          ergänzen zu lassen. Unter bestimmten Umständen haben Sie auch das
          Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen,
          insbesondere wenn die Daten nicht mehr für die Zwecke benötigt werden,
          für die sie erhoben wurden.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Des Weiteren haben Sie das Recht, die Verarbeitung Ihrer
          personenbezogenen Daten einzuschränken, wenn bestimmte Voraussetzungen
          vorliegen, sowie das Recht, der Verarbeitung Ihrer Daten zu
          widersprechen. Bitte beachten Sie, dass diese Rechte unter bestimmten
          Umständen eingeschränkt sein können.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Wenn Sie Ihre Rechte ausüben möchten oder Fragen zu dieser
          Datenschutzerklärung haben, können Sie uns jederzeit unter der
          E-Mail-Adresse{' '}
          <a
            href="mailto:hallo@passengerguard.com"
            className="text-brand-primary hover:underline"
          >
            hallo@passengerguard.com
          </a>{' '}
          kontaktieren. Wir werden Ihre Anfrage schnellstmöglich und in
          Übereinstimmung mit den geltenden Datenschutzbestimmungen bearbeiten.
        </p>
        <p className="text-brand-body leading-relaxed mb-4">
          Als Nutzer haben Sie das Recht, jederzeit Auskunft darüber zu
          verlangen, welche Daten wir über Sie gespeichert haben. Sie haben
          außerdem das Recht auf Berichtigung, Löschung oder Sperrung Ihrer
          Daten sowie das Recht auf Einschränkung der Verarbeitung und das Recht
          auf Datenübertragbarkeit.
        </p>

        {/* 7) Änderungen */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          7) Änderungen dieser Datenschutzerklärung
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu
          ändern oder zu aktualisieren. Die jeweils aktuelle Version der
          Datenschutzerklärung ist auf unserer Website und in der App verfügbar.
          Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig zu lesen,
          um sich über Änderungen zu informieren. Ihre fortgesetzte Nutzung
          unserer Dienste nach der Veröffentlichung von Änderungen dieser
          Datenschutzerklärung bedeutet, dass Sie diese Änderungen akzeptieren.
        </p>

        {/* Kontakt */}
        <h2 className="text-2xl font-bold text-brand-heading mt-10 mb-4">
          Kontakt
        </h2>
        <p className="text-brand-body leading-relaxed mb-4">
          Bei Fragen zur Datenschutzerklärung oder zur Verarbeitung Ihrer Daten
          kontaktieren Sie uns unter:{' '}
          <a
            href="mailto:hallo@passengerguard.com"
            className="text-brand-primary hover:underline"
          >
            hallo@passengerguard.com
          </a>
        </p>

        <p className="text-brand-muted text-sm mt-10">
          Letzte Aktualisierung: 13. November 2023
        </p>
      </div>
    </section>
  )
}
