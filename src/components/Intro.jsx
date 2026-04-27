import { useLang } from '../context/LanguageContext'

export default function Intro() {
  const { t } = useLang()

  return (
    <section id="intro">
      <div className="intro-left">
        <p className="intro-greeting">{t.intro.greeting}</p>
        <h1>{t.intro.name}</h1>
        <div className="intro-rule" aria-hidden="true" />
        <p className="intro-tagline">{t.intro.tagline}</p>

        <nav>
          <ul>
            <li><a href="#bass"     className="nav-link">{t.nav.bass}</a></li>
            <li><a href="#sound"    className="nav-link">{t.nav.sound}</a></li>
            {/* <li><a href="#dev" className="nav-link">{t.nav.dev}</a></li> */}
            <li><a href="#articles" className="nav-link">{t.nav.articles}</a></li>
            <li><a href="#about"    className="nav-link">{t.nav.about}</a></li>
            <li><a href="#contact"  className="nav-link">{t.nav.contact}</a></li>
          </ul>

          <div className="nav-socials">
            <a href="https://www.youtube.com/@KsuBass/videos" target="_blank" rel="noreferrer">
              <img src="/assets/yt.png" alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/mrs.esper/" target="_blank" rel="noreferrer">
              <img src="/assets/ig.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/ksenia.vasilyeva.3" target="_blank" rel="noreferrer">
              <img src="/assets/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/ksenia-vasileva/" target="_blank" rel="noreferrer">
              <img src="/assets/li.png" alt="LinkedIn" />
            </a>
          </div>
        </nav>
      </div>

      <div className="intro-photo">
        <img src="/assets/main-pic-wide.jpg" alt="Ksenia playing bass" />
      </div>
    </section>
  )
}
