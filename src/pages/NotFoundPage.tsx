import GlowButton from '@/components/GlowButton'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-brand-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-brand-heading mb-2">
          Seite nicht gefunden
        </h1>
        <p className="text-brand-body mb-6">
          Die gesuchte Seite existiert leider nicht.
        </p>
        <GlowButton href="/">Zur Startseite</GlowButton>
      </div>
    </div>
  )
}
