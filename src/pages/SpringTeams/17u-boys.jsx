import { motion } from 'framer-motion';
import '../../css_files/SpringTeams.css'; // Adjust path as needed

function SeventeenBoysSpring() {
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
          17U Spring Boys Team <span className="spring-teams-age-range">(Coming Soon)</span>
        </h1>
        <p className="spring-teams-subheading">Team details are currently being finalized.</p>
        <p className="spring-teams-description">
          Coaching lineup, tournament schedule, and player evaluations are being confirmed. Check back soon for full information.
        </p>
      </div>
    </motion.div>
  );
}

export default SeventeenBoysSpring;
