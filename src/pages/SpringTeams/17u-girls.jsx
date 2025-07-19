import { motion } from 'framer-motion';
import '../../css_stuff/SpringTeams.css'; // Adjust path if needed

function SeventeenGirlsSpring() {
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
          17U Spring Girls Team <span className="spring-teams-age-range">(Coming Soon)</span>
        </h1>
        <p className="spring-teams-subheading">Team details are currently being finalized.</p>
        <p className="spring-teams-description">
          Stay tuned for coach announcements, tournament plans, and team structure. Full information will be released soon.
        </p>
      </div>
    </motion.div>
  );
}

export default SeventeenGirlsSpring;
