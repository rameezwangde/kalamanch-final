import { motion, useReducedMotion } from 'framer-motion';
import './FeatureImage.css';

export default function FeatureImage() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="feature-section" aria-labelledby="feature-title">
      <div className="feature-container">
        
        <div className="feature-content">
          <motion.h2 
            id="feature-title"
            className="feature-title"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Magical Performances
          </motion.h2>
          <motion.p 
            className="feature-text"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Experience the magic of theatre where every stage becomes a world of its own. We bring stories to life with breathtaking costumes, intricate set designs, and captivating performances.
          </motion.p>
        </div>

        <motion.div 
          className="feature-image-wrapper"
          initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(15% 0 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img 
            src="https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785578331/Screenshot_2026-07-27_at_11.52.46_PM_k1u4kw.png" 
            alt="KalaManch Stage Performance" 
            className="feature-image"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
