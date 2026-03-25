import AppStoreBadges from './AppStoreBadges'
import GlowButton from './GlowButton'
import AnimatedSection from './AnimatedSection'

interface ContentCtaProps {
  title?: string
  text?: string
  showTrainingsplan?: boolean
}

export default function ContentCta({
  title = 'Das Flugangst-Seminar für die Hosentasche.',
  text = 'PassengerGuard hilft dir, deine Flugangst Schritt für Schritt zu überwinden — wissenschaftlich geprüft und jederzeit verfügbar.',
  showTrainingsplan = false,
}: ContentCtaProps) {
  return (
    <AnimatedSection className="mt-16">
      <div className="bg-brand-callout border border-brand-calloutBorder rounded-card p-8 md:p-10 text-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-heading">
          {title}
        </h3>
        <p className="text-brand-body mt-4 max-w-[600px] mx-auto leading-relaxed">
          {text}
        </p>

        <div className="mt-6 flex justify-center">
          <GlowButton href="/flugangst-app">Jetzt App entdecken</GlowButton>
        </div>

        <div className="mt-6 flex justify-center">
          <AppStoreBadges size="md" />
        </div>

        {showTrainingsplan && (
          <p className="text-brand-muted text-sm mt-6">
            Inklusive wissenschaftlich fundierter Trainingspläne, entwickelt mit der Ruhr-Universität Bochum.
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}
