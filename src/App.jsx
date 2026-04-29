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
      <LanguageProvider>
        <SEO />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bike" element={<BikePage />} />
            <Route path="/ux" element={<UXPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  )
}
