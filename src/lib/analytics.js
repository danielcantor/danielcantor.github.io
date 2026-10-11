// Google Analytics 4 (gtag.js). Se carga solo en producción y si VITE_GA_ID está
// configurado. En desarrollo los eventos se muestran en la consola para probarlos.
const GA_ID = import.meta.env.VITE_GA_ID
const enabled = import.meta.env.PROD && Boolean(GA_ID)

let started = false

export function initAnalytics() {
  if (!enabled || started || typeof window === 'undefined') return
  started = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Las vistas de página se mandan a mano (ver trackPageView), porque la navegación
  // entre páginas no recarga el sitio.
  window.gtag('config', GA_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  if (!enabled) {
    if (import.meta.env.DEV) console.debug('[analytics]', name, params)
    return
  }
  window.gtag?.('event', name, params)
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
