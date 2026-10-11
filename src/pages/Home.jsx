import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import Servicios from '../components/Servicios.jsx'
import Trabajos from '../components/Trabajos.jsx'
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
      <Servicios />
      <Trabajos />
    </>
  )
}
