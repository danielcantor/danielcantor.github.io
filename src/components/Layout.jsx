import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Footer from './Footer.jsx'
import MobileCtaBar from './MobileCtaBar.jsx'
import SugerenciaIdioma from './SugerenciaIdioma.jsx'
import { useT } from '../i18n/index.js'

export default function Layout() {
  const t = useT()

  return (
    <>
      <ScrollToTop />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-surface"
      >
        {t.saltar}
      </a>
      <SugerenciaIdioma />
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
