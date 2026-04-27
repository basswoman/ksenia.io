import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

export default function Articles() {
  const { t } = useLang()
  const ref = useInView()

  return (
    <section id="articles" ref={ref}>
      <h2>{t.articles.title}</h2>

      <div className="content">
        <div className="articles-grid">
          {t.articles.items.map((article, i) => (
            <a key={i} className="article-card" href={article.url} target="_blank" rel="noreferrer">
              <p className="article-publication">{article.publication}</p>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <span className="article-read-more">Read →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
