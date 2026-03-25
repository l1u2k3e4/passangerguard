import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  label: string
}

interface TableOfContentsProps {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )

    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      {/* Desktop — Sticky Sidebar */}
      <nav className="hidden lg:block sticky top-24 self-start">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-4">
          Inhaltsverzeichnis
        </p>
        <ul className="space-y-1 border-l-2 border-brand-border">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'block w-full text-left pl-4 py-1.5 text-sm transition-colors border-l-2 -ml-[2px]',
                  activeId === item.id
                    ? 'text-brand-primary font-semibold border-brand-primary'
                    : 'text-brand-body hover:text-brand-primary border-transparent'
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile — Dropdown */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between bg-white rounded-xl border border-brand-border px-4 py-3 text-sm font-semibold text-brand-heading"
        >
          Inhaltsverzeichnis
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              mobileOpen && 'rotate-180'
            )}
          />
        </button>
        {mobileOpen && (
          <div className="mt-2 bg-white rounded-xl border border-brand-border py-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'block w-full text-left px-4 py-2 text-sm transition-colors',
                  activeId === item.id
                    ? 'text-brand-primary font-semibold bg-brand-primaryLight/30'
                    : 'text-brand-body hover:text-brand-primary hover:bg-brand-surface'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
