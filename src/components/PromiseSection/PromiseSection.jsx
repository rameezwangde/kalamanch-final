import { motion, useReducedMotion } from 'framer-motion';
import './PromiseSection.css';

const ease = [0.22, 1, 0.36, 1];

export default function PromiseSection() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay, offset) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, ...offset },
          whileInView: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 0.9, delay, ease },
          viewport: { once: true, amount: 0.28 },
        };

  return (
    <section className="promise-section" aria-labelledby="promise-heading">
      <div className="promise-inner">
        <div className="promise-statement">
          <motion.p className="promise-eyebrow" {...reveal(0.05, { y: 18 })}>
            Experiences Beyond the Stage
          </motion.p>
          <div className="promise-heading">
            <motion.div
              className="promise-script"
              aria-hidden="true"
              {...reveal(0.15, { y: 28 })}
              transition={reduceMotion ? undefined : { duration: 1.15, delay: 0.15, ease }}
            >
              KalaManch
            </motion.div>
            <motion.h2
              className="promise-serif"
              id="promise-heading"
              aria-label="KalaManch is where talent shines"
              {...reveal(0.27, { y: 34 })}
              transition={reduceMotion ? undefined : { duration: 1.1, delay: 0.27, ease }}
            >
              <span>is where</span>
              <span>talent shines</span>
            </motion.h2>
          </div>
        </div>
        <div className="promise-copy">
          <motion.p {...reveal(0.38, { y: 22 })}>
            Led by Founder & Creative Head Mayank Jain—a nationally acclaimed theatre expert and NSD professional—KalaManch is a premier hub for artistic innovation. With deep roots in Mandi House and the Natya Ballet Centre, we fuse music, dance drama, and performance arts to deliver high-quality theatre productions, educational workshops, and cultural events that inspire diverse audiences.
          </motion.p>
          <motion.div
            className="promise-signature"
            {...reveal(0.44, { y: 15 })}
          >
            Mayank Jain
          </motion.div>
          <motion.a className="promise-link" href="#about" {...reveal(0.5, { x: -15 })}>
            <span>Discover KalaManch</span>
            <span className="promise-link-line" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
