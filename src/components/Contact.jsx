import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

// Sign up at formspree.io, create a form, and replace this with your form ID
const FORMSPREE_URL = 'https://formspree.io/f/mjgjlwwk';

export default function Contact() {
  const { t } = useLang();
  const ref = useInView();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref}>
      <h2>{t.contact.title}</h2>

      <div className="content">
        <p className="contact-intro">{t.contact.intro}</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder={t.contact.namePlaceholder}
            required
          />
          <input
            name="email"
            type="email"
            className="feedback-input"
            placeholder={t.contact.emailPlaceholder}
            required
          />
          <textarea
            name="message"
            className="feedback-input"
            placeholder={t.contact.commentPlaceholder}
            required
          />
          <button
            className="submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? '...' : t.contact.submit}
          </button>
        </form>

        {status === 'success' && (
          <p className="success-msg">{t.contact.successMessage}</p>
        )}
        {status === 'error' && (
          <p className="success-msg" style={{ color: 'red' }}>
            Something went wrong. Please try again.
          </p>
        )}

        <div className="social-links">
          <a
            href="https://www.facebook.com/ksenia.vasilyeva.3"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/fb.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/mrs.esper/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/ig.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/ksenia-vasileva/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/li.png" alt="linkedin" />
          </a>
          <a
            href="https://www.youtube.com/@KsuBass/videos"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/yt.png" alt="youtube" />
          </a>
        </div>
      </div>
    </section>
  );
}
