// Genera un HTML estático por ruta a partir del build SSR, para que
// buscadores y redes sociales reciban el contenido y los metadatos completos.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8')
const { render, prerenderRoutes } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

for (const route of prerenderRoutes) {
  const { html, head } = render(route.path)
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outFile = path.join(distDir, route.file)
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, page)
  console.log(`  prerender  ${route.path}  →  dist/${route.file}`)
}

// sitemap.xml con las rutas indexables (los proyectos de ejemplo quedan afuera).
const { site } = await import(pathToFileURL(path.join(root, 'src', 'config', 'site.js')).href)
const lastmod = new Date().toISOString().slice(0, 10)
const urls = prerenderRoutes
  .filter((route) => route.sitemap)
  .map(
    (route) =>
      `  <url>\n    <loc>${new URL(route.path, site.url)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${route.priority}</priority>\n  </url>`,
  )
await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`  sitemap    ${urls.length} URL(s)  →  dist/sitemap.xml`)

await fs.rm(ssrDir, { recursive: true, force: true })
