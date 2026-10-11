import { trabajos, trabajoPath } from './data/trabajos.js'

// Rutas que se generan como HTML estático en el build.
// `file` es el archivo de salida dentro de dist/; `sitemap` indica si va en sitemap.xml.
export const prerenderRoutes = [
  { path: '/', file: 'index.html', sitemap: true, priority: '1.0' },
  ...trabajos.map((t) => ({
    path: trabajoPath(t.slug),
    file: `trabajos/${t.slug}/index.html`,
    // Los proyectos de ejemplo no se indexan.
    sitemap: !t.ejemplo,
    priority: '0.7',
  })),
  // GitHub Pages sirve 404.html con estado 404 para cualquier ruta desconocida.
  { path: '/404', file: '404.html', sitemap: false },
]
