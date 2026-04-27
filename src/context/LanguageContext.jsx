import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import ru from '../i18n/ru'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const t = lang === 'en' ? en : ru
  const toggle = () => setLang(l => {
    const next = l === 'en' ? 'ru' : 'en'
    localStorage.setItem('lang', next)
    return next
  })

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
