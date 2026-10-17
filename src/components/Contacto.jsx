import SectionHeading from './SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'
import { site } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'

export default function Contacto() {
  return (
    <section
      id="contacto"
      data-oculta-barra-cta
      aria-labelledby="contacto-titulo"
      className="mx-auto grid max-w-page items-start gap-10 px-6 py-14 sm:gap-14 sm:py-20 lg:grid-cols-2 lg:py-24"
    >
      <Reveal className="flex flex-col gap-5">
        <SectionHeading
          id="contacto-titulo"
          eyebrow="Diagnóstico gratis"
          title="Pedí tu diagnóstico gratis"
          intro="Contame qué te pasa con tu sitio o tienda y te digo qué está frenando tus ventas. Te respondo en menos de 24 horas hábiles; si preferís algo más rápido, escribime por WhatsApp."
        />
        <p className="font-script text-[1.625rem] leading-tight font-bold text-brand-text sm:text-[1.875rem]">
          Te respondo yo, sin intermediarios.
        </p>
        <WhatsAppButton ubicacion="contacto" className="self-start" />
        <p className="text-[0.9375rem] text-muted">
          También podés escribirme a{' '}
          <a
            href={`mailto:${site.email}`}
            onClick={() => trackEvent('click_email', { ubicacion: 'contacto' })}
            className="font-semibold break-all"
          >
            {site.email}
          </a>
        </p>
      </Reveal>
      <Reveal delay={100}>
        <ContactForm />
      </Reveal>
    </section>
  )
}
