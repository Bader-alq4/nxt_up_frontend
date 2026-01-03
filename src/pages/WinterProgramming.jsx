import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/WinterProgramming.css';

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
        <h1 className="winter-heading">
          WINTER PROGRAMMING
        </h1>
        <p className="winter-subheading">Details will be released soon.</p>

        <p className="winter-description">
          Our winter schedule is in the works. Full program info, registration dates, and session details will be available soon.
        </p>

        <hr className="winter-hr" />

        <p className="winter-note">
          Stay tuned for updates on our website and Instagram.
        </p>
      </div>
    </motion.div>
  );
}
