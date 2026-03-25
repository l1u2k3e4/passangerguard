import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-border shadow-lg p-3 flex items-center justify-between gap-3 lg:hidden"
        >
          <p className="text-sm text-brand-body font-medium truncate">
            PassengerGuard — Jetzt herunterladen
          </p>
          <a
            href="https://apps.apple.com/de/app/passengerguard-flugangst/id6449045795"
            className="flex-shrink-0 bg-brand-primary text-white hover:bg-brand-primaryHover rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          >
            Herunterladen
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
