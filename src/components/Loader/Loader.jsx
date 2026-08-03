import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = React.memo(() => {
  return (
    <motion.div 
      className="KalaManch-loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="KalaManch-loader-content">
        <div className="loader-spinner"></div>
        <motion.div 
          className="loader-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          KalaManch
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Loader;
