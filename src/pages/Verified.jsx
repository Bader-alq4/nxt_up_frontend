import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/Verified.css';

export default function Verified() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="verified-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="verified-wrapper">
        <header className="verified-header">
          <span className="verified-eyebrow">Canada Basketball</span>
          <h1>We Are Verified</h1>
          <p>
            Next Up Hoops is a Canada Basketball Verified club, recognized for meeting the
            national standards for safe sport, governance, and quality programming.
          </p>
        </header>

        <figure className="verified-figure">
          <img
            src="/We%20Are%20Verified%20-%20Alberta.jpg"
            alt="Next Up Hoops is Canada Basketball Verified"
            loading="eager"
          />
        </figure>

        <a
          className="verified-link"
          href="https://www.basketball.ca/verified"
          target="_blank"
          rel="noopener noreferrer"
        >
          basketball.ca/verified
        </a>
      </div>
    </motion.div>
  );
}
