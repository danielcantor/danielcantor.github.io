import { whatsappUrl } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'
import { WhatsAppIcon } from './icons.jsx'

const sizes = {
  sm: 'h-11 gap-2 px-[18px] text-[15px]',
  md: 'h-13 gap-2.5 px-6',
}

export default function WhatsAppButton({
  children = 'Escribime por WhatsApp',
  message,
  size = 'md',
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
      className={`inline-flex items-center justify-center rounded-lg bg-wa font-semibold text-white no-underline transition-colors hover:bg-[#186540] ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon size={size === 'sm' ? 18 : 20} />
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  )
}
