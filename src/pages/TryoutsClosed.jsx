import { motion } from 'framer-motion';
import { useEffect } from 'react';
import '../css_stuff/TryoutsClosed.css';

function TryoutsClosed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tryouts-closed-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="tryouts-closed-title">Tryout Registrations Are Currently Closed</h1>
      <p className="tryouts-closed-message">
        Registrations are closed right now, but they’ll be opening back up soon.
        Please check back later for updates!
      </p>
    </motion.div>
  );
}

export default TryoutsClosed;
