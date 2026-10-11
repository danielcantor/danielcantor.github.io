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

await fs.rm(ssrDir, { recursive: true, force: true })
