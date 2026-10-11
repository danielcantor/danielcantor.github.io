// Rutas que se generan como HTML estático en el build.
// `file` es el archivo de salida dentro de dist/.
export const prerenderRoutes = [
  { path: '/', file: 'index.html' },
  // GitHub Pages sirve 404.html con estado 404 para cualquier ruta desconocida.
  { path: '/404', file: '404.html' },
]
