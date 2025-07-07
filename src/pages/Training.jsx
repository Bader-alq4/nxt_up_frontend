// src/pages/Training.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Training.css';

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="training-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="training-container">
        <h1 className="training-heading">CAMPS & TRAINING</h1>
        <p className="training-intro">
          We are launching Next Up Camps during summer and winter breaks to give athletes more access to high-level training when the club season is on pause.
        </p>

        <ul className="training-list">
          <li className="training-list-item">Advanced skill breakdowns (shooting, ball handling, finishing)</li>
          <li className="training-list-item">Position-specific training for guards, wings, and bigs</li>
          <li className="training-list-item">Competitive team and individual drills</li>
          <li className="training-list-item">Leadership and mindset development</li>
          <li className="training-list-item">Goal setting and confidence-building sessions</li>
          <li className="training-list-item">High-rep, high-feedback environments</li>
          <li className="training-list-item">Professional media coverage</li>
          <li className="training-list-item">Guest speakers and surprise giveaways</li>
        </ul>

        <hr className="training-hr" />

        <p className="training-description">
          We'll also offer year-round personal and small group training with our coaching staff for players who want extra support outside the season.
        </p>
        <p className="training-note">
          All camp info and registration will be posted online when released.
        </p>
      </div>
    </motion.div>
  );
}