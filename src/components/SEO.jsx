import { Helmet } from 'react-helmet-async'
import { useLang } from '../context/LanguageContext'

const META = {
  en: {
    title: 'Ksenia Vasileva — Bass Player, Sound Designer & Music Teacher | NYC',
    description:
      'Ksenia Vasileva is a professional bass player, sound designer, and music teacher based in Brooklyn, NYC. 20+ years touring Europe, Russia, and the globe. Available for sessions, collaborations, and bass guitar & music production lessons.',
    keywords:
      'bass player, bassist, bass guitar, sound designer, UX sound design, music teacher, bass lessons, music production lessons, Brooklyn, New York, NYC, session musician, music director, creative technologist',
    lang: 'en',
  },
  ru: {
    title: 'Ксения Васильева — Бас-гитаристка, Саунд дизайнер и Преподаватель | Нью-Йорк',
    description:
      'Ксения Васильева — профессиональная бас-гитаристка, саунд дизайнер и преподаватель музыки в Бруклине, Нью-Йорк. 20 лет на сцене — гастроли по Европе, России и миру. Уроки бас-гитары и музыкального продакшена.',
    keywords:
      'бас-гитаристка, бас-гитара, саунд дизайнер, UX звук, преподаватель музыки, уроки бас-гитары, уроки музыкального продакшена, музыкальный директор, Нью-Йорк, Бруклин, сессионный музыкант',
    lang: 'ru',
  },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ksenia Vasileva',
  alternateName: 'Ксения Васильева',
  url: 'https://ksenia.io',
  image: 'https://ksenia.io/assets/main-pic.jpg',
  jobTitle: 'Bass Player, Sound Designer, Music Teacher',
  description:
    'Professional bass player, sound designer, music director, and music teacher based in Brooklyn, NYC.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brooklyn',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  knowsLanguage: ['en', 'ru'],
  sameAs: [
    'https://www.youtube.com/@KsuBass/videos',
    'https://www.instagram.com/mrs.esper/',
    'https://www.facebook.com/ksenia.vasilyeva.3',
    'https://www.linkedin.com/in/ksenia-vasileva/',
    'https://kseniia.bandcamp.com/',
  ],
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Bass Player',
      alternateName: 'Бас-гитаристка',
    },
    {
      '@type': 'Occupation',
      name: 'Sound Designer',
      alternateName: 'Саунд дизайнер',
    },
    {
      '@type': 'Occupation',
      name: 'Music Teacher',
      alternateName: 'Преподаватель музыки',
    },
  ],
  offers: {
    '@type': 'Service',
    name: 'Bass Guitar & Music Production Lessons',
    alternateName: 'Уроки бас-гитары и музыкального продакшена',
    provider: { '@type': 'Person', name: 'Ksenia Vasileva' },
    areaServed: ['New York', 'Online'],
  },
}

export default function SEO() {
  const { lang } = useLang()
  const m = META[lang]

  return (
    <Helmet>
      <html lang={m.lang} />
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta name="keywords" content={m.keywords} />
      <meta name="author" content="Ksenia Vasileva" />
      <link rel="canonical" href="https://ksenia.io/" />

      {/* hreflang */}
      <link rel="alternate" hreflang="en" href="https://ksenia.io/" />
      <link rel="alternate" hreflang="ru" href="https://ksenia.io/" />
      <link rel="alternate" hreflang="x-default" href="https://ksenia.io/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ksenia.io/" />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:image" content="https://ksenia.io/assets/main-pic.jpg" />
      <meta property="og:locale" content={lang === 'ru' ? 'ru_RU' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'ru' ? 'en_US' : 'ru_RU'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content="https://ksenia.io/assets/main-pic.jpg" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
    </Helmet>
  )
}
