import AnimatedSection from './AnimatedSection'

interface ContentPageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  gradient?: string
}

export default function ContentPageHero({
  title,
  subtitle,
  backgroundImage,
  gradient,
}: ContentPageHeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/90 text-lg md:text-xl mt-6 max-w-narrow mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section
      className={`py-20 md:py-28 ${gradient || 'bg-brand-surface'}`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-brand-body text-lg md:text-xl mt-6 max-w-narrow mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
