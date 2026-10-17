import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Proyecto from './pages/Proyecto.jsx'
import NotFound from './pages/NotFound.jsx'

// El español va en la raíz y el inglés bajo /en/. Las páginas toman el idioma de la URL.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trabajos/:slug" element={<Proyecto />} />
        <Route path="en">
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<Proyecto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
