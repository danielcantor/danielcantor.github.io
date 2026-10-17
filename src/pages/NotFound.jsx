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
      <section className="mx-auto flex max-w-page flex-col items-start gap-6 px-4 pt-16 pb-32 sm:px-6 sm:pt-24 lg:px-10">
        <p className="text-sm text-muted">
          <span className="font-semibold text-accent-text">(404) </span>Página no encontrada
        </p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
          Esta página <span className="serif">no existe</span>
          <span className="text-accent">/</span>
        </h1>
        <p className="max-w-xl text-soft sm:text-lg">
          Puede que el link esté mal escrito o que la página haya cambiado de dirección.
        </p>
        <Link to="/" className="btn btn-accent h-14 px-6.5">
          Volver al inicio <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
