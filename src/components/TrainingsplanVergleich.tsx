import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const plans = [
  { slug: '1-woche', label: '1 Woche', sub: 'Intensiv · Kurzfristig' },
  { slug: '3-monate', label: '3 Monate', sub: 'Empfohlen · Nachhaltig' },
  { slug: '12-monate', label: '12 Monate', sub: 'Langzeit · In deinem Tempo' },
]

export default function TrainingsplanVergleich({ active }: { active: string }) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-bold text-brand-heading text-center mb-6">
          Welcher Plan passt zu dir?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Link
              key={plan.slug}
              to={`/flugangst-app/trainingsplan/${plan.slug}`}
              className={cn(
                'block p-4 rounded-card border transition-all text-center',
                active === plan.slug
                  ? 'border-brand-primary bg-brand-primary/5 shadow-card'
                  : 'border-brand-border/50 hover:border-brand-primary/50 hover:shadow-card'
              )}
            >
              <p className="font-bold text-brand-heading">{plan.label}</p>
              <p className="text-xs text-brand-muted">{plan.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
