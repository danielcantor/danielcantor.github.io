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
      aria-labelledby="contacto-titulo"
      className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-20 lg:grid-cols-2 lg:py-24"
    >
      <Reveal className="flex flex-col gap-5">
        <SectionHeading
          id="contacto-titulo"
          eyebrow="Contacto"
          title="Contame de tu proyecto"
          intro="Respondo en menos de 24 horas hábiles. Si preferís algo más rápido, escribime por WhatsApp y lo charlamos."
        />
        <WhatsAppButton ubicacion="contacto" className="self-start" />
        <p className="text-[15px] text-muted">
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
