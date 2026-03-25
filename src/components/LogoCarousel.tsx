import { mediaLogos } from '../data/mediaLogos'

export default function LogoCarousel() {
  // Verdoppeln für nahtlose Endlosschleife
  const logos = [...mediaLogos, ...mediaLogos]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center animate-scroll-logos">
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 mx-4 md:mx-6"
          >
            {logo.hasImage ? (
              /* Echtes Logo-Bild */
              <div className="h-10 md:h-12 flex items-center justify-center px-3">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto max-w-[140px] object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ) : (
              /* Text-Fallback für Logos ohne Bild */
              <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/15">
                <span className="text-white/70 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
