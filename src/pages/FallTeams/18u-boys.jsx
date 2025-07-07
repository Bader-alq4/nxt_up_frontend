import { motion } from 'framer-motion';

function EighteenBoysFall() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1>info 18</h1>
        <p>18 boys.</p>
      </motion.div>
    );
  }
  
  export default EighteenBoysFall;
  