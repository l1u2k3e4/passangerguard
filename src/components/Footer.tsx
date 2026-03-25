import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import AppStoreBadges from './AppStoreBadges'
import { asset } from '@/lib/utils'

const footerLinks = {
  flugangst: [
    { label: 'Flugangst verstehen', href: '/flugangst' },
    { label: '18 Tipps gegen Flugangst', href: '/flugangst/ueberwinden' },
    { label: 'Panikattacke Soforthilfe', href: '/panikattacke' },
  ],
  app: [
    { label: 'App Übersicht', href: '/flugangst-app' },
    { label: 'Trainingsplan 1 Woche', href: '/flugangst-app/trainingsplan/1-woche' },
    { label: 'Trainingsplan 3 Monate', href: '/flugangst-app/trainingsplan/3-monate' },
    { label: 'Trainingsplan 12 Monate', href: '/flugangst-app/trainingsplan/12-monate' },
    { label: 'Kurzvideo', href: '/flugangst-app/kurzvideo' },
    { label: 'Presse und Medien', href: '/presse-und-medien' },
  ],
  business: [
    { label: 'Business Class', href: '/flugangst-app/business-class' },
  ],
  rechtliches: [
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
    { label: 'Nutzungsbedingungen', href: '/nutzungsbedingungen' },
    { label: 'Rechtlicher Hinweis', href: '/rechtlicher-hinweis' },
    { label: 'Support', href: '/support' },
  ],
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm hover:text-brand-secondary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Spalte 1 — Über */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={asset('/images/logo-wide.png')}
                alt="PassengerGuard"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Die wissenschaftlich geprüfte App gegen Flugangst. Dein Flugangst-Seminar
              für die Hosentasche.
            </p>
            <AppStoreBadges size="sm" />
          </div>

          {/* Spalte 2 — Flugangst */}
          <FooterColumn title="Flugangst" links={footerLinks.flugangst} />

          {/* Spalte 3 — Flugangst App */}
          <FooterColumn title="Flugangst App" links={footerLinks.app} />

          {/* Spalte 4 — Business */}
          <FooterColumn title="Business" links={footerLinks.business} />

          {/* Spalte 5 — Rechtliches */}
          <FooterColumn title="Rechtliches" links={footerLinks.rechtliches} />
        </div>

        {/* Unterer Bereich */}
        <div className="border-t border-brand-navyLight mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} PassengerGuard UG (haftungsbeschränkt)
          </p>
          <a
            href="https://www.instagram.com/passengerguard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-brand-secondary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
