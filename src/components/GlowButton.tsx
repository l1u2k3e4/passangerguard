import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary: 'bg-brand-primary text-white hover:bg-brand-primaryHover shadow-glow hover:shadow-glow-lg',
  secondary: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  ghost: 'text-brand-primary hover:text-brand-primaryHover underline underline-offset-4',
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
}: GlowButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02]',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
