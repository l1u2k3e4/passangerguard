import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import SharedLayout from '@/layouts/SharedLayout'
import ScrollToTop from '@/components/ScrollToTop'
import PageLoader from '@/components/PageLoader'

const HomePage = lazy(() => import('@/pages/HomePage'))
const FlugangstPage = lazy(() => import('@/pages/FlugangstPage'))
const TippsPage = lazy(() => import('@/pages/TippsPage'))
const PanikattackePage = lazy(() => import('@/pages/PanikattackePage'))
const AppPage = lazy(() => import('@/pages/AppPage'))
const BusinessClassPage = lazy(() => import('@/pages/BusinessClassPage'))
const KontaktPage = lazy(() => import('@/pages/KontaktPage'))
const ImpressumPage = lazy(() => import('@/pages/ImpressumPage'))
const DatenschutzPage = lazy(() => import('@/pages/DatenschutzPage'))
const Trainingsplan1WochePage = lazy(() => import('@/pages/Trainingsplan1WochePage'))
const Trainingsplan3MonatePage = lazy(() => import('@/pages/Trainingsplan3MonatePage'))
const Trainingsplan12MonatePage = lazy(() => import('@/pages/Trainingsplan12MonatePage'))
const KurzvideoPage = lazy(() => import('@/pages/KurzvideoPage'))
const PressePage = lazy(() => import('@/pages/PressePage'))
const SupportPage = lazy(() => import('@/pages/SupportPage'))
const AgbPage = lazy(() => import('@/pages/AgbPage'))
const NutzungsbedingungenPage = lazy(() => import('@/pages/NutzungsbedingungenPage'))
const RechtlicherHinweisPage = lazy(() => import('@/pages/RechtlicherHinweisPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/flugangst" element={<FlugangstPage />} />
            <Route path="/flugangst/ueberwinden" element={<TippsPage />} />
            <Route path="/panikattacke" element={<PanikattackePage />} />
            <Route path="/flugangst-app" element={<AppPage />} />
            <Route path="/flugangst-app/business-class" element={<BusinessClassPage />} />
            <Route path="/flugangst-app/trainingsplan/1-woche" element={<Trainingsplan1WochePage />} />
            <Route path="/flugangst-app/trainingsplan/3-monate" element={<Trainingsplan3MonatePage />} />
            <Route path="/flugangst-app/trainingsplan/12-monate" element={<Trainingsplan12MonatePage />} />
            <Route path="/flugangst-app/kurzvideo" element={<KurzvideoPage />} />
            <Route path="/presse-und-medien" element={<PressePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/agb" element={<AgbPage />} />
            <Route path="/nutzungsbedingungen" element={<NutzungsbedingungenPage />} />
            <Route path="/rechtlicher-hinweis" element={<RechtlicherHinweisPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
