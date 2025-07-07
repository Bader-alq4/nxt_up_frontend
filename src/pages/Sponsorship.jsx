import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Sponsorship.css';

export default function Sponsorship() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="sponsorship-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sponsorship-container">
        <h1 className="sponsorship-heading">SPONSORSHIP OPPORTUNITIES</h1>
        <p className="sponsorship-intro">
          We are actively looking for impact-focused sponsors and partners to help us grow the next generation of leaders and athletes.
        </p>

        <h2 className="sponsorship-subheading">
          At Next Up Hoops, your sponsorship directly supports:
        </h2>
        <ul className="sponsorship-list">
          <li className="sponsorship-list-item">Subsidized club fees for families in need</li>
          <li className="sponsorship-list-item">Tournament entry fees and travel costs</li>
          <li className="sponsorship-list-item">Training equipment, gear, uniforms, and shoes</li>
          <li className="sponsorship-list-item">Expansion into underserved schools and communities</li>
          <li className="sponsorship-list-item">Player development programs, mentorship, and outreach</li>
        </ul>

        <h2 className="sponsorship-subheading">
          What sponsors receive:
        </h2>
        <ul className="sponsorship-list">
          <li className="sponsorship-list-item">High-visibility branding on team gear, social media, and tournaments</li>
          <li className="sponsorship-list-item">Recognition on our website, at events, and through media content</li>
          <li className="sponsorship-list-item">Custom packages tailored to align with your brand’s mission</li>
          <li className="sponsorship-list-item">Measurable community impact through athlete stories and stats</li>
        </ul>

        <p className="sponsorship-contact">
          To become a sponsor or partner, contact us at{' '}
          <a href="mailto:yassir@nextup.ca" className="sponsorship-link">
            yassir@nextup.ca
          </a>.
        </p>
      </div>
    </motion.div>
  );
}
