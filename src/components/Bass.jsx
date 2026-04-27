import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

function VideoEmbed({ src }) {
  return (
    <div>
      <div className="iframe-aspect-ratio">
        <iframe
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function Bass() {
  const { t } = useLang()
  const ref = useInView()

  return (
    <section id="bass" ref={ref}>
      <h2>{t.bass.title}</h2>

      <div className="content">
        <p className="section-blurb">{t.bass.blurb}</p>

        <div className="videos">
          <VideoEmbed src="https://www.youtube.com/embed/6sszQIAcvBs?si=-xU3mqfmrbM-9V-P" />
          <VideoEmbed src="https://www.youtube.com/embed/fm25aZRtSL4?si=6typotgjqZKX_PFl" />
        </div>

        <a
          className="more-videos"
          href="https://youtube.com/playlist?list=PLnggjYkbmAYRdzCvsXTFa_NMc-6WFFzjN&si=6ZrbuTIdah1bga1S"
          target="_blank"
          rel="noreferrer"
        >
          {t.bass.moreVideos}
        </a>

        <div className="spotify">
          <h3>{t.bass.spotifyTitle}</h3>
          <iframe
            title="Tracks Ksenia has performed on — Spotify playlist"
            style={{ borderRadius: '8px' }}
            src="https://open.spotify.com/embed/playlist/4ZUiWnlPpBr1buIvkFiyx6?utm_source=generator"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
