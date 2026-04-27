import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MainPage from './pages/MainPage'
import BikePage from './pages/BikePage'
import UXPage from './pages/UXPage'
import './styles/main.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bike" element={<BikePage />} />
          <Route path="/ux" element={<UXPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
