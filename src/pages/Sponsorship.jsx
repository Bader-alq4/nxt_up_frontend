import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Sponsorship.css'; 

export default function SupportPartners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="partner-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="partner-container">
        <h1 className="partner-heading">PARTNER WITH NEXT UP</h1>
        <p className="partner-intro">
          We’re looking for mission-driven partners to help us empower the next generation of leaders and athletes.
        </p>

        <h2 className="partner-subheading">Your support directly contributes to:</h2>
        <ul className="partner-list">
          <li className="partner-list-item">Lowered program costs for families in need</li>
          <li className="partner-list-item">Travel and tournament entry support</li>
          <li className="partner-list-item">Training equipment, gear, uniforms, and shoes</li>
          <li className="partner-list-item">Access for underserved schools and communities</li>
          <li className="partner-list-item">Mentorship and long-term player development</li>
        </ul>

        <h2 className="partner-subheading">In return, you’ll receive:</h2>
        <ul className="partner-list">
          <li className="partner-list-item">Brand presence on team gear, social channels, and events</li>
          <li className="partner-list-item">Visibility on our site and within community media</li>
          <li className="partner-list-item">Tailored packages that reflect your mission</li>
          <li className="partner-list-item">Impact metrics and real success stories</li>
        </ul>

        <p className="partner-contact">
          Want to join us? Reach out at{' '}
          <a href="mailto:yassir@nextup.ca" className="partner-link">
            yassir@nextup.ca
          </a>.
        </p>
      </div>
    </motion.div>
  );
}
