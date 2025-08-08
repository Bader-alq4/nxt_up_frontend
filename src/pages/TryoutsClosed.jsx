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
      <h1 className="tryouts-closed-title">Tryouts Registration Coming Soon</h1>
      <p className="tryouts-closed-message">
        Online tryout registration through our website will be available soon.
        For now, you can register by clicking the link below:
      </p>
      <a
        href="https://registration.teamsnap.com/form/32154"
        className="tryouts-closed-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a>
    </motion.div>
  );
}

export default TryoutsClosed;
