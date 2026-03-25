import { Outlet } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import StickyCta from '@/components/StickyCta'

export default function SharedLayout() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Zum Inhalt springen
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <StickyCta />
      <CookieBanner />
    </div>
  )
}
