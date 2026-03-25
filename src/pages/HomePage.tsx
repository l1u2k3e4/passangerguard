import { useSEO } from '@/hooks/useSEO'
import HeroSection from '@/sections/home/HeroSection'
import TrustBarSection from '@/sections/home/TrustBarSection'
import ProblemSection from '@/sections/home/ProblemSection'
import SolutionSection from '@/sections/home/SolutionSection'
import FeaturesSection from '@/sections/home/FeaturesSection'
import KopfflugSection from '@/sections/home/KopfflugSection'
import TestimonialSection from '@/sections/home/TestimonialSection'
import PricingSection from '@/sections/home/PricingSection'
import MediaSection from '@/sections/home/MediaSection'
import FaqSection from '@/sections/home/FaqSection'

export default function HomePage() {
  useSEO({
    title: 'PassengerGuard | Flugangst Soforthilfe & Training App',
    description:
      'PassengerGuard ist die wissenschaftlich geprüfte App gegen Flugangst. Soforthilfe bei Panikattacken, mentales Flugtraining & Atemübungen.',
    canonical: 'https://www.passengerguard.com/',
  })

  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <KopfflugSection />
      <TestimonialSection />
      <PricingSection />
      <MediaSection />
      <FaqSection />
    </>
  )
}
