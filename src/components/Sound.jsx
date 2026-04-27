import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

function VideoEmbed({ src }) {
  return (
    <div className="iframe-aspect-ratio">
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export default function Sound() {
  const { t } = useLang()
  const ref = useInView()

  return (
    <section id="sound" ref={ref}>
      <h2>{t.sound.title}</h2>

      <div className="content">
        <p className="section-blurb">{t.sound.blurb}</p>

        <div className="project-videos">
          <div className="project-video sound-box">
            <div className="featured-project-inner">
              <div className="featured-video">
                <VideoEmbed src="https://www.youtube.com/embed/g0TnVF7yP6Q?si=8DM-0IqFEzrhtr99" />
              </div>
              <div className="featured-text">
                <h3>{t.sound.kssl.title}</h3>
                <p className="project-tag">{t.sound.kssl.subtitle}</p>
                <p>{t.sound.kssl.semifinal}</p>
                <p>
                  {t.sound.kssl.readMore}{' '}
                  <a
                    href="https://blog.bela.io/microtonal-synth-at-guthman/"
                    className="glowing-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.sound.kssl.belaLink}
                  </a>
                </p>
                <p className="project-desc">{t.sound.kssl.description}</p>
              </div>
            </div>
          </div>

          <div className="project-video sound-box">
            <h3>{t.sound.soundReplacement}</h3>
            <p className="project-tag">{t.sound.soundReplacementDesc}</p>
            <VideoEmbed src="https://www.youtube.com/embed/3ggFThMATzk?si=RX_49lnwSE-zMB6D" />
          </div>

          <div className="project-video sound-box">
            <h3>{t.sound.audio3d}</h3>
            <p className="project-tag">{t.sound.audio3dDesc}</p>
            <VideoEmbed src="https://www.youtube.com/embed/QlKQpWC-YvA?si=zlp33jrdkTCvEUwx" />
          </div>

          <div className="project-video sound-box">
            <h3>{t.sound.immersive}</h3>
            <p className="project-tag">{t.sound.immersiveDesc}</p>
            <VideoEmbed src="https://www.youtube.com/embed/wxC5nutnEyA?si=jpNL74Nh851uAXLO" />
          </div>
        </div>

        <div className="sound-box project-links">
          <p className="links-title">{t.sound.linksTitle}</p>
          <ul>
            <li>
              <a href="https://ide.csound.com/editor/lmLHgV0qpqUUxLSvGETq" className="glowing-3" target="_blank" rel="noreferrer">
                {t.sound.links.generative}
              </a>
            </li>
            <li>
              <Link to="/ux" className="glowing-2">{t.sound.links.ux}</Link>
            </li>
            <li>
              <Link to="/bike" className="glowing-4">{t.sound.links.bike}</Link>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLnggjYkbmAYQJW-3J2xver7lKZX9fLEfj" className="glowing-5" target="_blank" rel="noreferrer">
                {t.sound.links.modular}
              </a>
            </li>
            <li>
              <a href="https://kseniia.bandcamp.com/album/ambient" className="glowing-1" target="_blank" rel="noreferrer">
                {t.sound.links.bandcamp}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
