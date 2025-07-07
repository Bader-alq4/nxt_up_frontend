import { motion } from 'framer-motion';
import { useEffect } from 'react';

function TryoutsClosed() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
            <p>
                tryouts are closed and will open on...
            </p>
        </motion.div>
    )
}

export default TryoutsClosed;