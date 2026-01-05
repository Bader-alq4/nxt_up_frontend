import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/TryoutsClosed.css';

function TryoutsClosed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tryouts-closed-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="tryouts-closed-card"
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="tryouts-badge">Tryouts</span>

        <h1 className="tryouts-closed-title">
          Registration Currently Closed
        </h1>

        <p className="tryouts-closed-message">
          Our current tryout window has ended. New opportunities will be announced
          soon for upcoming club teams.
        </p>

        <p className="tryouts-closed-subtext">
          Stay connected so you don’t miss important updates.
        </p>

        <div className="tryouts-closed-actions">
          <Link to="/ClubTeams" className="primary-btn">
            View Club Teams
          </Link>
          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TryoutsClosed;
