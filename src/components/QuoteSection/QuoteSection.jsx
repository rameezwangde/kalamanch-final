import { motion, useReducedMotion } from 'framer-motion';
import './QuoteSection.css';

const ease = [0.22, 1, 0.36, 1];

export default function QuoteSection() {
  const reduceMotion = useReducedMotion();

  const revealText = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
    viewport: { once: true, amount: 0.4 },
  });

  return (
    <section className="quote-section" aria-labelledby="quote-author">
      <motion.div 
        className="quote-mark"
        {...(reduceMotion ? {} : revealText(0))}
        aria-hidden="true"
      >
        “
      </motion.div>
      
      <motion.p 
        className="quote-text"
        {...(reduceMotion ? {} : revealText(0.1))}
      >
        Theatre is not merely about performing on a stage; it is the profound journey of discovering one's true voice. Watching a student transform into a confident storyteller is the most powerful magic we can ever witness.
      </motion.p>
      
      <motion.div 
        className="quote-separator"
        {...(reduceMotion ? {} : revealText(0.2))}
      />
      
      <motion.div 
        className="quote-author"
        id="quote-author"
        {...(reduceMotion ? {} : revealText(0.3))}
      >
        MAYANK JAIN
      </motion.div>
    </section>
  );
}
