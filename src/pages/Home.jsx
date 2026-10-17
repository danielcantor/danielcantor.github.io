import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import Servicios from '../components/Servicios.jsx'
import Trabajos from '../components/Trabajos.jsx'
import Proceso from '../components/Proceso.jsx'
import SobreMi from '../components/SobreMi.jsx'
import FAQ from '../components/FAQ.jsx'
import Contacto from '../components/Contacto.jsx'
import { professionalService } from '../data/schema.js'

export default function Home() {
  return (
    <>
      <Seo
        title="Diseño web en Buenos Aires para pymes"
        path="/"
        jsonLd={[professionalService]}
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
