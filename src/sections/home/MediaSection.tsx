import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.media

const mediaVideos = [
  {
    title: 'WDR — Flugangst-App im Test',
    embedUrl: 'https://www.youtube.com/embed/9KyCF53p8-k',
    description: 'Der WDR berichtet über die wissenschaftliche Studie mit der Ruhr-Universität Bochum.',
  },
  {
    title: 'RTL — PassengerGuard hilft gegen Flugangst',
    embedUrl: 'https://www.youtube.com/embed/1gRRW3Uhwpk',
    description: 'RTL zeigt, wie PassengerGuard Betroffenen bei Flugangst hilft.',
  },
]

export default function MediaSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} />
          <p className="text-brand-body text-center max-w-narrow mx-auto mt-4">
            {c.text}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {mediaVideos.map((video, index) => (
            <AnimatedSection key={video.title} delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card overflow-hidden">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-heading mb-1">{video.title}</h3>
                  <p className="text-sm text-brand-body">{video.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
