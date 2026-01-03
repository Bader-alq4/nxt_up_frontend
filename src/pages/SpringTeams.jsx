// src/pages/SpringTeams.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/SpringTeams.css';

export default function SpringTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="spring-teams-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="spring-teams-container coming-soon">
        <h1 className="spring-teams-heading">SPRING/SUMMER SEASON</h1>
        <p className="spring-teams-subheading">Details Coming Soon</p>
        <p className="spring-teams-description">
          Full information will be available soon. Stay tuned for updates on tryouts, teams, and season details.
        </p>
      </div>
    </motion.div>
  );
}
