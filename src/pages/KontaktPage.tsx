import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import GlowButton from '@/components/GlowButton'
import AnimatedSection from '@/components/AnimatedSection'

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)

  useSEO({
    title: 'Kontakt | PassengerGuard — Flugangst-App',
    description:
      'Kontaktiere das PassengerGuard Team. Fragen zur App, Business-Lizenzen oder Presseanfragen — wir helfen gerne weiter.',
    canonical: 'https://www.passengerguard.com/kontakt',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const betreff = formData.get('betreff') as string
    const nachricht = formData.get('nachricht') as string

    const subject = encodeURIComponent(`[PassengerGuard Kontakt] ${betreff}`)
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nBetreff: ${betreff}\n\n${nachricht}`
    )

    window.location.href = `mailto:hallo@passengerguard.com?subject=${subject}&body=${body}`

    // Kurze Verzögerung, damit der mailto-Link zuerst verarbeitet wird
    setTimeout(() => {
      setSubmitted(true)
    }, 500)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-surface pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading">
            Kontakt — Wir sind für dich da
          </h1>
          <p className="text-lg text-brand-body mt-4 max-w-[640px] mx-auto">
            Hast du Fragen zu PassengerGuard oder möchtest du mehr über unsere
            Business-Lizenzen erfahren? Schreib uns!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <p className="font-semibold text-brand-heading">E-Mail</p>
                    <a
                      href="mailto:hallo@passengerguard.com"
                      className="text-brand-primary hover:underline"
                    >
                      hallo@passengerguard.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <p className="font-semibold text-brand-heading">Telefon</p>
                    <a
                      href="tel:+4915227332538"
                      className="text-brand-body hover:text-brand-primary"
                    >
                      +49 (0)152 27332538
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <p className="font-semibold text-brand-heading">Adresse</p>
                    <p className="text-brand-body">
                      PassengerGuard UG (haftungsbeschränkt)
                      <br />
                      Holzstrasse 5<br />
                      44575 Castrop-Rauxel
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-card shadow-card p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-center py-16"
                  >
                    {/* Animierter Haken */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-brand-heading mb-3">
                      Nachricht vorbereitet!
                    </h3>
                    <p className="text-brand-body max-w-md mx-auto mb-6">
                      Dein E-Mail-Programm sollte sich geöffnet haben. Klicke dort auf &quot;Senden&quot;, um deine Nachricht abzuschicken.
                    </p>

                    <div className="bg-brand-surface rounded-lg p-4 max-w-sm mx-auto mb-8">
                      <p className="text-sm text-brand-muted">
                        Falls sich kein E-Mail-Programm geöffnet hat, schreib uns direkt an:
                      </p>
                      <a
                        href="mailto:hallo@passengerguard.com"
                        className="text-brand-primary font-semibold hover:underline flex items-center justify-center gap-2 mt-2"
                      >
                        <Mail className="w-4 h-4" />
                        hallo@passengerguard.com
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-brand-primary hover:underline"
                    >
                      Neue Nachricht schreiben
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-brand-heading mb-1.5 block"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Dein Name"
                        className="w-full rounded-lg border border-brand-border px-4 py-3 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-brand-heading placeholder:text-brand-muted"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-heading mb-1.5 block"
                      >
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="deine@email.de"
                        className="w-full rounded-lg border border-brand-border px-4 py-3 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-brand-heading placeholder:text-brand-muted"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-brand-heading mb-1.5 block"
                      >
                        Betreff
                      </label>
                      <select
                        id="subject"
                        name="betreff"
                        className="w-full rounded-lg border border-brand-border px-4 py-3 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-brand-heading"
                      >
                        <option>Allgemeine Frage</option>
                        <option>Business-Lizenz anfragen</option>
                        <option>Feedback zur App</option>
                        <option>Presseanfrage</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-brand-heading mb-1.5 block"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="nachricht"
                        rows={5}
                        required
                        placeholder="Deine Nachricht..."
                        className="w-full rounded-lg border border-brand-border px-4 py-3 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-brand-heading placeholder:text-brand-muted resize-y"
                      />
                    </div>

                    <GlowButton type="submit" size="lg" className="w-full">
                      Nachricht senden
                    </GlowButton>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
