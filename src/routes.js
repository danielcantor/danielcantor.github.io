import { trabajos } from './data/trabajos.js'
import { servicios } from './data/servicios.js'
import { LANGS, homePath, trabajoPath, servicioPath } from './i18n/paths.js'

// "/trabajos/x/" → "trabajos/x/index.html"
const fileFor = (path) => `${path.slice(1)}index.html`

const alternates = (pathFor) => Object.fromEntries(LANGS.map((lang) => [lang, pathFor(lang)]))

// Rutas que se generan como HTML estático en el build, en español y en inglés.
// `file` es el archivo de salida dentro de dist/; `sitemap` indica si va en sitemap.xml;
// `alternates` son las versiones de la misma página en cada idioma (para hreflang).
export const prerenderRoutes = [
  ...LANGS.flatMap((lang) => [
    { path: homePath(lang), file: fileFor(homePath(lang)), sitemap: true, priority: '1.0', alternates: alternates(homePath) },
    ...servicios[lang].map((s) => ({
      path: servicioPath(s.slugs, lang),
      file: fileFor(servicioPath(s.slugs, lang)),
      sitemap: true,
      priority: '0.9',
      alternates: alternates((l) => servicioPath(s.slugs, l)),
    })),
    ...trabajos.map((t) => ({
      path: trabajoPath(t.slug, lang),
      file: fileFor(trabajoPath(t.slug, lang)),
      // Los proyectos de ejemplo no se indexan.
      sitemap: !t.ejemplo,
      priority: '0.7',
      alternates: alternates((l) => trabajoPath(t.slug, l)),
    })),
  ]),
  // GitHub Pages sirve 404.html con estado 404 para cualquier ruta desconocida.
  { path: '/404', file: '404.html', sitemap: false },
]
