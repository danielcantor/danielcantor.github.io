// Google Analytics 4 (gtag.js) y Microsoft Clarity (grabaciones y mapas de calor).
// Cada uno se carga solo en producción y si su ID está configurado.
// En desarrollo los eventos se muestran en la consola para probarlos.
const GA_ID = import.meta.env.VITE_GA_ID
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID
const gaEnabled = import.meta.env.PROD && Boolean(GA_ID)
const clarityEnabled = import.meta.env.PROD && Boolean(CLARITY_ID)

let started = false

function loadScript(src) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (started || typeof window === 'undefined') return
  started = true

  if (gaEnabled) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    // Las vistas de página se mandan a mano (ver trackPageView), porque la navegación
    // entre páginas no recarga el sitio.
    window.gtag('config', GA_ID, { send_page_view: false })
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
  }

  if (clarityEnabled) {
    // Cola de llamadas hasta que carga el script (equivale al snippet oficial).
    window.clarity =
      window.clarity ||
      function clarity() {
        ;(window.clarity.q = window.clarity.q || []).push(arguments)
      }
    loadScript(`https://www.clarity.ms/tag/${CLARITY_ID}`)
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  if (!gaEnabled && !clarityEnabled) {
    if (import.meta.env.DEV) console.debug('[analytics]', name, params)
    return
  }
  if (gaEnabled) window.gtag?.('event', name, params)
  // En Clarity el evento permite filtrar grabaciones (p. ej. quienes tocaron WhatsApp).
  // Las vistas de página las detecta solo.
  if (clarityEnabled && name !== 'page_view') window.clarity?.('event', name)
}

let lastPath = null

// Se llama desde <Seo> cuando Helmet ya aplicó el título de la página.
// Ignora repeticiones de la misma ruta (Helmet avisa en cada cambio del <head>).
export function trackPageView(title) {
  if (typeof window === 'undefined') return
  const path = window.location.pathname
  if (path === lastPath) return
  lastPath = path
  trackEvent('page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  })
}
