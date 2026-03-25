import { Star, Quote } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { homeContent } from '@/data/homeContent'

const c = homeContent.testimonials

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading tag={c.tag} title={c.title} />
        </AnimatedSection>

        {/* Featured Testimonial */}
        <AnimatedSection delay={0.1} className="mt-12">
          <div className="bg-brand-surface rounded-card p-6 md:p-10 border border-brand-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-card overflow-hidden shadow-soft">
                <img
                  src={c.featured.image}
                  alt={c.featured.name}
                  loading="lazy"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <Quote className="w-10 h-10 text-brand-primary/20 mb-4" />
                <blockquote className="text-xl md:text-2xl font-display font-semibold text-brand-heading leading-snug">
                  &ldquo;{c.featured.quote}&rdquo;
                </blockquote>
                <p className="text-brand-body mt-4 leading-relaxed">
                  {c.featured.context}
                </p>
                <p className="font-semibold text-brand-heading mt-4">
                  — {c.featured.name}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {c.reviews.map((review, index) => (
            <AnimatedSection key={review.author} delay={0.1 + index * 0.1}>
              <div className="bg-brand-surface rounded-card p-6 border border-brand-border h-full">
                <Stars count={review.stars} />
                <h4 className="font-semibold text-brand-heading mt-3">
                  {review.title}
                </h4>
                <p className="text-brand-body italic mt-3 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-heading">
                    {review.author}
                  </span>
                  <span className="text-sm text-brand-muted">{review.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
