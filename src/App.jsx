import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Proyecto from './pages/Proyecto.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trabajos/:slug" element={<Proyecto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
