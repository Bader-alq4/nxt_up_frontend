// src/pages/Tournaments.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Tournaments.css';

export default function Tournaments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tournaments-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tournaments-container">
        <h1 className="tournaments-heading">NEXT UP INVITATIONAL TOURNAMENT</h1>
        <p className="tournaments-intro">
          Coming soon: The Next Up Invitational — a one-of-a-kind, invite-only tournament built for elite programs only.
        </p>

        <p className="tournaments-description">
          This will be one of Western Canada's most competitive and exclusive youth basketball events, featuring boys and girls divisions from U11 to U18.
        </p>

        <h2 className="tournaments-subheading">Event Highlights</h2>
        <ul className="tournaments-list">
          <li>Invite-only bracket with limited club entries</li>
          <li>Friday to Sunday event structure (dates TBA)</li>
          <li>Friday night: off-court bonding activity for all teams</li>
          <li>Saturday night: All-Star Night with 3PT contest, dunk comp, skills challenge</li>
          <li>Player of the Game shirts every game</li>
          <li>Team welcome packages</li>
          <li>MVP, All-Tournament, and championship trophy presentations</li>
          <li>Professional media coverage with interviews, content, and highlight reels</li>
          <li>Discounted hotel blocks for out-of-town clubs</li>
          <li>Games officiated by high-level referees</li>
          <li>Big-time energy in a professional venue with announcers and music</li>
        </ul>

        <hr className="tournaments-hr" />

        <p className="tournaments-note">
          If you get invited — you've earned it. More details coming soon.
        </p>
      </div>
    </motion.div>
  );
}