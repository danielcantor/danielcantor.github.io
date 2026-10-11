import { Link } from 'react-router'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada"
        description="La página que buscás no existe o cambió de dirección."
        noindex
      />
      <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-32">
        <p className="font-display text-sm font-bold text-brand-text">Error 404</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Esta página no existe
        </h1>
        <p className="text-muted">
          Puede que el link esté mal escrito o que la página haya cambiado de dirección.
        </p>
        <Link
          to="/"
          className="inline-flex h-13 items-center rounded-full bg-brand px-6 font-semibold text-on-night hover:bg-brand-dark"
        >
          Volver al inicio
        </Link>
      </section>
    </>
  )
}
