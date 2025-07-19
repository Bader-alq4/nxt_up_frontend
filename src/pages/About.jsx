import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_stuff/About.css';

export default function About() {
  const location = useLocation();

  // Scroll to top on mount if no hash
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="about-nextup-container">
        {/* Section 1 */}
        <section className="about-nextup-section">
          <div className="about-nextup-text">
            <h1 className="about-nextup-title">About Next Up Hoops</h1>
            <p className="about-nextup-paragraph">
              Next Up Hoops isn't just a club — it's a movement built for the serious. 
              Founded by Yassir Madih in Edmonton, Alberta, we serve athletes who are 
              overlooked, underfunded, and underestimated — but ready to outwork anyone.
            </p>
            <p className="about-nextup-paragraph">
              We exist for the next generation of elite athletes: those who chase excellence, 
              crave growth, and are committed to the grind.
            </p>
          </div>
          <div className="about-nextup-image">
            <img src="/coach.jpg" alt="Coach mentoring athletes" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="about-nextup-section" id="mission">
          <div className="about-nextup-image">
            <img src="/team.jpg" alt="Team huddle" />
          </div>
          <div className="about-nextup-text">
            <h2 className="about-nextup-subtitle">Our Mission & Values</h2>
            <p className="about-nextup-paragraph">
              We've seen too many athletes priced out of opportunity. At Next Up, 
              we believe that talent and discipline should never be limited by finances. 
              We're changing youth basketball by combining elite coaching, professional 
              exposure, and a player-first culture rooted in care and excellence.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="about-nextup-section" id="why-choose-us">
          <div className="about-nextup-text">
            <h2 className="about-nextup-subtitle">What Makes Us Different</h2>
          </div>
          <div className="about-nextup-bullets">
            <ul className="about-nextup-list">
              <li>High-quality coaching from proven mentors who prioritize character and development</li>
              <li>Smaller roster sizes to ensure meaningful playing time</li>
              <li>Detailed evaluations and monthly growth reports</li>
              <li>Top-tier tournaments with strategic scheduling</li>
              <li>Intentional culture with leadership and accountability</li>
              <li>Professional media coverage and branding</li>
              <li>Faith and community-led leadership</li>
            </ul>
            <p className="about-nextup-closing">
              Whether you're preparing for high school, prep, or post-secondary competition — this is where you start leveling up.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
