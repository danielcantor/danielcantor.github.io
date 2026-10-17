import { whatsappUrl } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'
import { WhatsAppIcon } from './icons.jsx'

// solido: píldora verde · contorno: píldora con borde del color del texto · link: texto con flecha.
const variantes = {
  solido: 'btn h-13 gap-2.5 bg-wa px-6 text-white hover:bg-[#186540]',
  contorno: 'btn btn-outline h-13 gap-2.5 px-6',
  link: 'inline-flex min-h-11 items-center gap-1.5 font-medium underline-offset-4 hover:underline',
}

export default function WhatsAppButton({
  children = 'Escribime por WhatsApp',
  message,
  variante = 'solido',
  className = '',
  ubicacion,
  onClick,
}) {
  function handleClick(event) {
    trackEvent('click_whatsapp', { ubicacion })
    onClick?.(event)
  }

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${variantes[variante]} ${className}`}
    >
      {variante !== 'link' && <WhatsAppIcon size={19} />}
      {children}
      {variante === 'link' && <span aria-hidden="true">↗</span>}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  )
}
