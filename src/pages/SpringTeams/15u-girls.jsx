import { motion } from 'framer-motion';

function FifteenGirlsSpring() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1>info 15</h1>
        <p>15 girls.</p>
      </motion.div>
    );
  }
  
  export default FifteenGirlsSpring;
  