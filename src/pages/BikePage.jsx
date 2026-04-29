import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LanguageSwitch from '../components/LanguageSwitch'

const SOUND_MAP = {
  q: 'sounds/top1.wav',  w: 'sounds/top2.wav',  e: 'sounds/top3.wav',
  r: 'sounds/top4.wav',  t: 'sounds/top5.wav',
  a: 'sounds/mid1.wav',  s: 'sounds/mid2.wav',  d: 'sounds/mid3.wav',
  f: 'sounds/mid4.wav',  g: 'sounds/mid5.wav',
  z: 'sounds/kick1.wav', x: 'sounds/kick2.wav', c: 'sounds/kick3.wav',
  v: 'sounds/kick4.wav', b: 'sounds/kick5.wav',
}

const GROUPS = [
  { label: 'Top',  keys: ['q','w','e','r','t'] },
  { label: 'Mid',  keys: ['a','s','d','f','g'] },
  { label: 'Kick', keys: ['z','x','c','v','b'] },
]

function playSound(key) {
  const src = SOUND_MAP[key]
  if (!src) return
  new Audio(src).play()
}

export default function BikePage() {
  const { t, lang } = useLang()
  const [pressed, setPressed] = useState(null)

  function triggerKey(key) {
    playSound(key)
    setPressed(key)
    setTimeout(() => setPressed(null), 120)
  }

  useEffect(() => {
    const handler = e => triggerKey(e.key)
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <LanguageSwitch />
      <section id="bike-section">
        <a className="nav-link sub-back" href={lang === 'ru' ? '/ru#sound' : '/#sound'}>{t.bike.backLink}</a>
        <h2>{t.bike.title}</h2>
        <div className="content">
          <p className="section-blurb" style={{ marginBottom: '2rem' }}>
            {t.bike.hint}
          </p>
          <div className="drum-groups">
            {GROUPS.map(group => (
              <div className="drum-group" key={group.label}>
                <div className="drum-row">
                  {group.keys.map(key => (
                    <button
                      key={key}
                      className={`drum-btn${pressed === key ? ' pressed' : ''}`}
                      onClick={() => triggerKey(key)}
                    >
                      {key.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
