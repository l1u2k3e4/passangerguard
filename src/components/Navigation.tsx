import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn, asset } from '@/lib/utils'

interface NavChild {
  label: string
  href: string
}

interface NavGroup {
  groupLabel: string
  children: NavChild[]
}

interface NavItemDropdown {
  label: string
  children: (NavChild | NavGroup)[]
}

interface NavItemLink {
  label: string
  href: string
}

type NavItem = NavItemDropdown | NavItemLink

function isGroup(item: NavChild | NavGroup): item is NavGroup {
  return 'groupLabel' in item
}

function isDropdown(item: NavItem): item is NavItemDropdown {
  return 'children' in item
}

const navItems: NavItem[] = [
  {
    label: 'Flugangst',
    children: [
      { label: 'Flugangst verstehen', href: '/flugangst' },
      { label: '18 Tipps gegen Flugangst', href: '/flugangst/ueberwinden' },
      { label: 'Panikattacke Soforthilfe', href: '/panikattacke' },
    ],
  },
  {
    label: 'Flugangst App',
    children: [
      { label: 'PassengerGuard', href: '/flugangst-app' },
      {
        groupLabel: 'Trainingsplan',
        children: [
          { label: '1 Woche', href: '/flugangst-app/trainingsplan/1-woche' },
          { label: '3 Monate', href: '/flugangst-app/trainingsplan/3-monate' },
          { label: '12 Monate', href: '/flugangst-app/trainingsplan/12-monate' },
        ],
      },
      { label: 'Kurzvideo', href: '/flugangst-app/kurzvideo' },
      { label: 'Presse und Medien', href: '/presse-und-medien' },
    ],
  },
  { label: 'Business Class', href: '/flugangst-app/business-class' },
  { label: 'Kontakt', href: '/kontakt' },
]

function getAllHrefs(item: NavItem): string[] {
  if (!isDropdown(item)) return [item.href]
  const hrefs: string[] = []
  for (const child of item.children) {
    if (isGroup(child)) {
      hrefs.push(...child.children.map((c) => c.href))
    } else {
      hrefs.push(child.href)
    }
  }
  return hrefs
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px]',
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-nav'
          : 'bg-brand-navy'
      )}
    >
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={asset('/images/logo-wide.png')}
            alt="PassengerGuard"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    getAllHrefs(item).some((h) => location.pathname === h)
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-white/60 transition-transform duration-200',
                      openDropdown === item.label && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-card shadow-card p-4 min-w-[260px] z-50"
                    >
                      {item.children.map((child) =>
                        isGroup(child) ? (
                          <div key={child.groupLabel} className="mt-2 pt-2 border-t border-brand-border/50">
                            <p className="px-3 py-1 text-xs font-semibold text-brand-muted uppercase tracking-wider">
                              {child.groupLabel}
                            </p>
                            {child.children.map((subChild) => (
                              <NavLink
                                key={subChild.href}
                                to={subChild.href}
                                className={({ isActive: active }) =>
                                  cn(
                                    'block px-3 py-2 rounded-lg text-sm transition-colors',
                                    active
                                      ? 'text-brand-primary font-semibold bg-brand-primaryLight/50'
                                      : 'text-brand-body hover:bg-brand-surface'
                                  )
                                }
                              >
                                {subChild.label}
                              </NavLink>
                            ))}
                          </div>
                        ) : (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive: active }) =>
                              cn(
                                'block px-3 py-2 rounded-lg font-medium transition-colors',
                                active
                                  ? 'text-brand-primary font-semibold bg-brand-primaryLight/50'
                                  : 'text-brand-heading hover:bg-brand-surface'
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive: active }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    active
                      ? 'text-white font-semibold border-b-2 border-brand-secondary'
                      : 'text-white/80 hover:text-white'
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* CTA Button */}
          <Link
            to="/flugangst-app"
            className="ml-4 bg-white text-brand-navy hover:bg-brand-secondary hover:text-white rounded-lg px-6 py-2.5 font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            App herunterladen
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-white z-50 shadow-xl overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-brand-body hover:text-brand-primary"
                    aria-label="Menü schließen"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) =>
                    isDropdown(item) ? (
                      <div key={item.label} className="mb-2">
                        <button
                          onClick={() =>
                            setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-brand-heading"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 text-brand-muted transition-transform duration-200',
                              mobileAccordion === item.label && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileAccordion === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4">
                                {item.children.map((child) =>
                                  isGroup(child) ? (
                                    <div key={child.groupLabel} className="mt-2 pt-2 border-t border-brand-border/50">
                                      <p className="px-3 py-1 text-xs font-semibold text-brand-muted uppercase tracking-wider">
                                        {child.groupLabel}
                                      </p>
                                      {child.children.map((subChild) => (
                                        <NavLink
                                          key={subChild.href}
                                          to={subChild.href}
                                          className={cn(
                                            'block px-3 py-2 rounded-lg text-sm transition-colors',
                                            isActive(subChild.href)
                                              ? 'text-brand-primary font-semibold bg-brand-primaryLight/50'
                                              : 'text-brand-body hover:text-brand-primary hover:bg-brand-surface'
                                          )}
                                        >
                                          {subChild.label}
                                        </NavLink>
                                      ))}
                                    </div>
                                  ) : (
                                    <NavLink
                                      key={child.href}
                                      to={child.href}
                                      className={cn(
                                        'block px-3 py-2.5 rounded-lg text-sm transition-colors',
                                        isActive(child.href)
                                          ? 'text-brand-primary font-semibold bg-brand-primaryLight/50'
                                          : 'text-brand-body hover:text-brand-primary hover:bg-brand-surface'
                                      )}
                                    >
                                      {child.label}
                                    </NavLink>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        key={item.label}
                        to={item.href}
                        className={cn(
                          'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                          isActive(item.href)
                            ? 'text-brand-primary font-semibold bg-brand-primaryLight/50'
                            : 'text-brand-body hover:text-brand-primary hover:bg-brand-surface'
                        )}
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}

                  {/* Mobile CTA */}
                  <div className="pt-6">
                    <Link
                      to="/flugangst-app"
                      className="block w-full text-center bg-brand-primary text-white hover:bg-brand-primaryHover rounded-lg px-6 py-3 font-semibold text-sm transition-all"
                    >
                      App herunterladen
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
