// src/pages/Training.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/Training.css';

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
        <p className="training-subheading">Details Coming Soon</p>
        <p className="training-note">
          Full information will be available soon. Stay tuned for updates on schedules, registration, and training opportunities.
        </p>
      </div>
    </motion.div>
  );
}
