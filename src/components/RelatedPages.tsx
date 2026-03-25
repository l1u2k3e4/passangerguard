import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface RelatedPage {
  title: string
  description: string
  href: string
}

interface RelatedPagesProps {
  pages: RelatedPage[]
}

export default function RelatedPages({ pages }: RelatedPagesProps) {
  return (
    <AnimatedSection className="mt-16">
      <h3 className="font-display text-2xl font-bold text-brand-heading mb-6">
        Weiterführende Themen
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {pages.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className="group bg-white rounded-card border border-brand-border p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            <h4 className="font-display text-lg font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">
              {page.title}
            </h4>
            <p className="text-brand-body text-sm mt-2 leading-relaxed">
              {page.description}
            </p>
            <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
              Mehr erfahren <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  )
}
