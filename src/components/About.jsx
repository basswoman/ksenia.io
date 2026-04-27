import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useLang();
  const ref = useInView();

  return (
    <section id="about" ref={ref}>
      <div className="about-inner">
        <div className="about-photo">
          <img src="/assets/6.jpg" alt="Ksenia with bass guitar" />
        </div>
        <div className="about-text">
          <h2>{t.about.title}</h2>
          {t.about.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
