import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

function VideoPlaceholder({ label }) {
  return (
    <div className="iframe-aspect-ratio">
      <div className="dev-placeholder">
        <span>{label}</span>
      </div>
    </div>
  )
}

export default function Dev() {
  const { t } = useLang()
  const ref = useInView()

  return (
    <section id="dev" ref={ref}>
      <p className="eyebrow">{t.dev.eyebrow}</p>
      <h2>{t.dev.title}</h2>

      <div className="content">
        <p className="section-blurb">{t.dev.blurb}</p>

        <div className="dev-videos">
          <div className="dev-project">
            <h3>{t.dev.project1}</h3>
            <VideoPlaceholder label={t.dev.comingSoon} />
          </div>
          <div className="dev-project">
            <h3>{t.dev.project2}</h3>
            <VideoPlaceholder label={t.dev.comingSoon} />
          </div>
        </div>
      </div>
    </section>
  )
}
