import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Footer from './Footer.jsx'
import MobileCtaBar from './MobileCtaBar.jsx'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-night"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
