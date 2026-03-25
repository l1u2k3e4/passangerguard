import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('pg-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function handleAccept() {
    localStorage.setItem('pg-cookie-consent', 'accepted')
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem('pg-cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-brand-border shadow-lg p-4 md:p-6"
        >
          <div className="max-w-wide mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-brand-body">
              Wir verwenden Cookies, um dein Erlebnis auf unserer Website zu verbessern. Mehr erfährst du in unserer{' '}
              <Link to="/datenschutz" className="text-brand-primary underline underline-offset-2 hover:text-brand-primaryHover">
                Datenschutzerkl&auml;rung
              </Link>.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="bg-brand-primary text-white hover:bg-brand-primaryHover rounded-lg px-5 py-2 text-sm font-semibold transition-colors"
              >
                Akzeptieren
              </button>
              <button
                onClick={handleDecline}
                className="text-brand-body hover:text-brand-heading border border-brand-border hover:border-brand-heading rounded-lg px-5 py-2 text-sm font-medium transition-colors"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
