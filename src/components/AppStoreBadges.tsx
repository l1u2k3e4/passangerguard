import { cn } from '@/lib/utils'

interface AppStoreBadgesProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-14',
}

export default function AppStoreBadges({ size = 'md', className }: AppStoreBadgesProps) {
  return (
    <div className={cn('flex gap-3 items-center', className)}>
      <a
        href="https://apps.apple.com/de/app/passengerguard-flugangst/id6449045795"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/app-store-badge.png"
          alt="Im App Store laden"
          className={cn(sizeMap[size], 'w-auto')}
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.passengerguard.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/google-play-badge.png"
          alt="Bei Google Play laden"
          className={cn(sizeMap[size], 'w-auto')}
        />
      </a>
    </div>
  )
}
