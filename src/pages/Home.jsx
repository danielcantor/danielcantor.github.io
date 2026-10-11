import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
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
    </>
  )
}
