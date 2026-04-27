import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LanguageSwitch from '../components/LanguageSwitch'

const SOUNDS = [
  { key: 'positive-feedback', label: 'Positive\nFeedback',  src: 'sounds/ux/Positive_feedback.wav' },
  { key: 'negative-feedback', label: 'Negative\nFeedback',  src: 'sounds/ux/Negative_feedback.wav' },
  { key: 'notification',      label: 'Notification',        src: 'sounds/ux/Notification.wav' },
  { key: 'thinking',          label: 'Thinking',            src: 'sounds/ux/Thinking.wav' },
  { key: 'call-incoming',     label: 'Call\nIncoming',      src: 'sounds/ux/Call_incoming.wav' },
  { key: 'call-accept',       label: 'Call\nAccept',        src: 'sounds/ux/Call_accept.wav' },
  { key: 'call-outgoing',     label: 'Call\nOutgoing',      src: 'sounds/ux/Call_outgoing.wav' },
  { key: 'call-end',          label: 'Call\nEnd',           src: 'sounds/ux/Call_end.wav' },
  { key: 'activated-action',  label: 'Activated\nAction',   src: 'sounds/ux/Activated_action.wav' },
  { key: 'no-connection',     label: 'No\nConnection',      src: 'sounds/ux/No_connection.wav' },
  { key: 'door-warning',      label: 'Door\nWarning',       src: 'sounds/ux/Door_open_warning.wav' },
  { key: 'parking-assist',    label: 'Parking\nAssist',     src: 'sounds/ux/Parking_assist.wav' },
]

export default function UXPage() {
  const { t } = useLang()
  const [pressed, setPressed] = useState(null)

  function triggerSound(key, src) {
    new Audio(src).play()
    setPressed(key)
    setTimeout(() => setPressed(null), 120)
  }

  return (
    <>
      <LanguageSwitch />
      <section id="ux-section">
        <a className="nav-link sub-back" href="/#sound">{t.ux.backLink}</a>
        <h2>{t.ux.title}</h2>
        <div className="content">
          <p className="section-blurb" style={{ marginBottom: '2rem' }}>
            {t.ux.hint}
          </p>
          <div className="drum-grid-ux">
            {SOUNDS.map(({ key, label, src }) => (
              <button
                key={key}
                className={`drum-btn${pressed === key ? ' pressed' : ''}`}
                onClick={() => triggerSound(key, src)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
