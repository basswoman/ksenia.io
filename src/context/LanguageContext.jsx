import { createContext, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import en from '../i18n/en'
import ru from '../i18n/ru'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const isRu = location.pathname.startsWith('/ru')
  const lang = isRu ? 'ru' : 'en'
  const t = isRu ? ru : en

  const toggle = () => {
    if (isRu) {
      const newPath = location.pathname.slice(3) || '/'
      navigate(newPath + location.hash)
    } else {
      const newPath = '/ru' + (location.pathname === '/' ? '' : location.pathname)
      navigate(newPath + location.hash)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
