import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export { prerenderRoutes } from './routes.js'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )

  const { helmet } = helmetContext
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((tag) => tag.toString())
    .join('\n    ')

  // Atributos de <html> (el idioma de la página), para reemplazarlos en la plantilla.
  const htmlAttributes = helmet.htmlAttributes.toString()

  return { html, head, htmlAttributes }
}
