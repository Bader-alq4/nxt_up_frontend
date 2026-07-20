import React, { useState, useEffect } from 'react';
import '../css_files/StickyRegister.css';

const REGISTRATION_URL = 'https://registration.teamsnap.com/form/69129';

export default function StickyRegister({
  label = 'Fall 2026 Tryouts',
  note = 'Evaluation Fee $20',
  // The page's own register button. The sticky bar hides as soon as this
  // scrolls into view, so the two never appear on screen together.
  watchSelector = '[data-register-cta]',
}) {
  const [pastHero, setPastHero] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  // Show the bar only once the athlete has scrolled past the hero.
  // `nearBottom` is a safety net: if the observer below is unsupported or
  // never fires, this still gets the bar out of the way before the footer.
  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > 620);
      setNearBottom(
        window.innerHeight + window.scrollY > document.body.scrollHeight - 420
      );
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide the bar the moment the page's real register button appears, so the
  // hand-off keeps working no matter how the page content changes.
  useEffect(() => {
    const target = document.querySelector(watchSelector);
    if (!target || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setCtaInView(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [watchSelector]);

  const shown = pastHero && !ctaInView && !nearBottom;

  return (
    <div className={`sticky-register ${shown ? 'is-visible' : ''}`}>
      <div className="sticky-register-inner">
        <div className="sticky-register-copy">
          <span className="sticky-register-label">{label}</span>
          <span className="sticky-register-note">{note}</span>
        </div>
        <a
          className="sticky-register-btn"
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
    </div>
  );
}
