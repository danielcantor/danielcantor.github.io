import { Link } from 'react-router'
import Seo from '../components/Seo.jsx'
import Acento from '../components/Acento.jsx'
import { useLang, useT, homePath } from '../i18n/index.js'

export default function NotFound() {
  const lang = useLang()
  const t = useT().noEncontrada

  return (
    <>
      <Seo title={t.titulo} description={t.descripcion} noindex />
      <section className="mx-auto flex max-w-page flex-col items-start gap-6 px-4 pt-16 pb-32 sm:px-6 sm:pt-24 lg:px-10">
        <p className="text-sm text-muted">
          <span className="font-semibold text-accent-text">(404) </span>
          {t.titulo}
        </p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
          <Acento partes={t.h1} />
          <span aria-hidden="true" className="barra text-accent" />
        </h1>
        <p className="max-w-xl text-soft sm:text-lg">{t.texto}</p>
        <Link to={homePath(lang)} className="btn btn-accent h-14 px-6.5">
          {t.volver} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
