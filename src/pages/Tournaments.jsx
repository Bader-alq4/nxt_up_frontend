// src/pages/Tournaments.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/Tournaments.css';

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
        <h1 className="tournaments-heading">TOURNAMENTS</h1>
        <p className="tournaments-subheading">Details Coming Soon</p>
        <p className="tournaments-note">
          Full information will be available soon. Stay tuned for updates on tournament formats, invites, and event schedules.
        </p>
      </div>
    </motion.div>
  );
}
