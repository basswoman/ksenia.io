import { useLang } from '../context/LanguageContext'

export default function LanguageSwitch() {
  const { lang, toggle } = useLang()

  return (
    <div className="lang-switch">
      <button
        onClick={toggle}
        className={lang === 'en' ? 'active-lang' : 'inactive-lang'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="divider">|</span>
      <button
        onClick={toggle}
        className={lang === 'ru' ? 'active-lang' : 'inactive-lang'}
        aria-label="Переключить на русский"
      >
        RU
      </button>
    </div>
  )
}
