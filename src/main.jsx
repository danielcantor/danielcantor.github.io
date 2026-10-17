import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource-variable/schibsted-grotesk'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import './index.css'
import App from './App.jsx'
import { initAnalytics } from './lib/analytics.js'

initAnalytics()

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const root = document.getElementById('root')

// En producción el HTML viene prerenderizado: se hidrata en lugar de renderizar de cero.
// (En desarrollo #root solo trae el comentario <!--app-html-->, sin elementos.)
if (root.firstElementChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
