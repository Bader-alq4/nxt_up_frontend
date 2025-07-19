import { motion } from 'framer-motion';
import '../../css_stuff/SpringTeams.css'; // Adjusted path for subfolder

function FifteenBoysSpring() {
  return (
    <motion.div
      className="spring-teams-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="spring-teams-container">
        <h1 className="spring-teams-heading">
          15U Spring Boys Team <span className="spring-teams-age-range">(Coming Soon)</span>
        </h1>
        <p className="spring-teams-subheading">Details are being finalized and will be posted here soon.</p>
        <p className="spring-teams-description">
          Tryout times, coaching staff, and tournament schedules are on the way. Stay tuned!
        </p>
      </div>
    </motion.div>
  );
}

export default FifteenBoysSpring;
