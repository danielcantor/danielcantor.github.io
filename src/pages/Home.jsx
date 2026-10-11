import Seo from '../components/Seo.jsx'
import { professionalService } from '../data/schema.js'

export default function Home() {
  return (
    <>
      <Seo
        title="Diseño web en Buenos Aires para pymes"
        jsonLd={[professionalService]}
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-display text-5xl font-extrabold tracking-tight">
          Sitios web y tiendas online que <span className="text-brand">venden de verdad</span>.
        </h1>
      </section>
    </>
  )
}
