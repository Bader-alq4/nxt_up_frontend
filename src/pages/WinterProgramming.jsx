// src/pages/WinterProgramming.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/WinterProgramming.css';

export default function WinterProgramming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="winter-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="winter-container">
        <h1 className="winter-heading">WINTER PROGRAMMING</h1>
        <p className="winter-intro">
          Basketball doesn't stop in the off-season — and neither do we.
        </p>
        <p className="winter-description">
          Our Winter Open Runs League is an 8-week in-house season built for extra game reps in a competitive, high-energy environment. Whether you're trying new moves, refining your game, or just staying sharp — this league gives athletes a place to play freely while staying accountable.
        </p>

        <ul className="winter-list">
          <li>Week 1: Player evaluations and team formation</li>
          <li>Weeks 2–6: Regular season standings tracked</li>
          <li>Weeks 7–8: Bracket-style playoff tournament</li>
          <li>Player of the Game shirts and awards</li>
          <li>MVPs, championship t-shirts, and media coverage</li>
          <li>Refs, music, pro-style flow</li>
          <li>Open to athletes from all schools and clubs</li>
        </ul>

        <hr className="winter-hr" />

        <p className="winter-note">
          Registration opens soon.
        </p>
      </div>
    </motion.div>
  );
}