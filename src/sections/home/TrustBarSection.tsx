import AnimatedSection from '@/components/AnimatedSection'

export default function TrustBarSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold text-brand-muted uppercase tracking-widest mb-8">
            Bekannt aus
          </p>

          {/* Große Montage-Grafik mit allen Medienlogos */}
          <img
            src="/images/bekannt-aus-montage.png"
            alt="PassengerGuard bekannt aus WDR, RTL, WAZ, NRZ, myself und weiteren Medien"
            className="w-full max-w-3xl mx-auto"
            loading="lazy"
          />

          <p className="text-brand-muted text-sm mt-8">
            In Zusammenarbeit mit der Ruhr-Universität Bochum
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
