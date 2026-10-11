import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// En `vite preview` imitamos a GitHub Pages: las rutas desconocidas
// devuelven dist/404.html con estado 404 en lugar de index.html.
function githubPages404() {
  return {
    name: 'github-pages-404',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname)
        // Archivos con extensión (JS, CSS, imágenes…) los sirve Vite normalmente.
        if (path.extname(pathname)) return next()
        const page = path.join(outDir, pathname, 'index.html')
        const found = page.startsWith(outDir) && fs.existsSync(page)
        res.statusCode = found ? 200 : 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(found ? page : path.join(outDir, '404.html')))
      })
    },
  }
}

// Dominio propio en GitHub Pages: el sitio se sirve desde la raíz.
export default defineConfig(({ isPreview }) => ({
  base: '/',
  appType: isPreview ? 'mpa' : 'spa',
  plugins: [react(), tailwindcss(), githubPages404()],
  ssr: {
    // react-helmet-async se publica como CommonJS: lo empaquetamos en el build SSR.
    noExternal: ['react-helmet-async'],
  },
}))
