import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface TrustBadgeProps {
  icon: LucideIcon
  text: string
  variant?: 'light' | 'dark'
}

export default function TrustBadge({ icon: Icon, text, variant = 'light' }: TrustBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2',
        variant === 'light'
          ? 'bg-brand-callout text-brand-primary border border-brand-calloutBorder'
          : 'bg-brand-navy/10 text-brand-navy'
      )}
    >
      <Icon className="w-4 h-4" />
      {text}
    </span>
  )
}
