import ContactForm from './ContactForm.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'
import { site } from '../config/site.js'
import { useT } from '../i18n/index.js'
import { trackEvent } from '../lib/analytics.js'

export default function Contacto() {
  const t = useT()

  return (
    <section id="contacto" data-oculta-barra-cta aria-labelledby="contacto-titulo" className="overflow-x-clip bg-night text-on-night">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-20 sm:gap-12 sm:px-6 sm:py-24 lg:px-10">
        <p className="text-sm text-night-text">
          <span className="font-semibold text-night-accent">(07) </span>
          {t.contacto.eyebrow}
        </p>
        <h2 id="contacto-titulo" className="scroll-desliza text-[clamp(4.25rem,13vw,10.5rem)] leading-[0.88] font-semibold tracking-[-0.05em]">
          {t.contacto.titulo}
          <span aria-hidden="true" className="barra text-accent" />
        </h2>
        <div className="grid gap-x-6 gap-y-12 border-t border-night-line pt-8 lg:grid-cols-12">
          <Reveal className="flex flex-col gap-5 lg:col-span-5">
            <p className="text-xl leading-snug sm:text-[1.375rem]">
              {t.contacto.bajada}
            </p>
            <p className="text-[0.9375rem] text-night-text">{t.contacto.nota}</p>
            <div className="mt-2 flex flex-col items-start gap-1.5 border-t border-night-line pt-5">
              <p className="text-[0.8125rem] text-night-text">{t.cta.directo}</p>
              <a
                href={`mailto:${site.email}`}
                onClick={() => trackEvent('click_email', { ubicacion: 'contacto' })}
                className="serif text-[1.625rem] leading-tight break-all underline decoration-night-accent decoration-1 underline-offset-[6px] sm:text-[2rem]"
              >
                {site.email}
              </a>
              {t.contacto.whatsapp && (
                <WhatsAppButton ubicacion="contacto" variante="link">
                  WhatsApp
                </WhatsAppButton>
              )}
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
