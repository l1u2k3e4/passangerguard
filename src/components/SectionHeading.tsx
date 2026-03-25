import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  tag?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  tag,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'mb-12')}>
      {tag && (
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-3 block">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl text-brand-body mt-4 max-w-[700px]',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
