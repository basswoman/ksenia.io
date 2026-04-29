import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext'
import SEO from './components/SEO'
import MainPage from './pages/MainPage'
import BikePage from './pages/BikePage'
import UXPage from './pages/UXPage'
import './styles/main.css'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <SEO />
          <Routes>
            <Route path="/"        element={<MainPage />} />
            <Route path="/ru"      element={<MainPage />} />
            <Route path="/bike"    element={<BikePage />} />
            <Route path="/ru/bike" element={<BikePage />} />
            <Route path="/ux"      element={<UXPage />} />
            <Route path="/ru/ux"   element={<UXPage />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
