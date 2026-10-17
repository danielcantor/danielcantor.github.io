import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import Servicios from '../components/Servicios.jsx'
import Trabajos from '../components/Trabajos.jsx'
import Proceso from '../components/Proceso.jsx'
import SobreMi from '../components/SobreMi.jsx'
import FAQ from '../components/FAQ.jsx'
import Contacto from '../components/Contacto.jsx'
import { sitio, persona, professionalService, faqPage } from '../data/schema.js'
import { useLang, useT, homePath } from '../i18n/index.js'

export default function Home() {
  const lang = useLang()
  const t = useT()

  return (
    <>
      <Seo
        title={t.seo.homeTitle}
        path={homePath(lang)}
        alternates={{ es: homePath('es'), en: homePath('en') }}
        jsonLd={[sitio, persona(lang), professionalService(lang), faqPage(lang)]}
      />
      <Hero />
      <Trabajos />
      <Servicios />
      <Proceso />
      <SobreMi />
      <FAQ />
      <Contacto />
    </>
  )
}
