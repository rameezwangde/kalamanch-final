import { motion, useReducedMotion } from 'framer-motion';
import './AboutWelcome.css';

const ease = [0.22, 1, 0.36, 1];

export default function AboutWelcome() {
  const reduceMotion = useReducedMotion();

  const revealText = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
    viewport: { once: true, amount: 0.3 },
  });

  const revealImage = {
    initial: { opacity: 0, clipPath: 'inset(0 0 15% 0)' },
    whileInView: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
    transition: { duration: 1.2, ease },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="about-welcome" aria-labelledby="about-page-title">
      <motion.div 
        className="about-page-heading-wrapper"
        {...(reduceMotion ? {} : revealText(0))}
      >
        <h1 id="about-page-title" className="about-page-heading">About Us</h1>
      </motion.div>

      <div className="about-welcome__grid">
        <div className="about-welcome__content">
          <motion.div 
            className="about-welcome__eyebrow"
            {...(reduceMotion ? {} : revealText(0))}
          >
            Welcome to KalaManch
          </motion.div>
          <motion.h2 
            id="about-welcome-title"
            className="about-welcome__title"
            {...(reduceMotion ? {} : revealText(0.1))}
          >
            Premier Event Management in Delhi
          </motion.h2>
          <motion.p 
            className="about-welcome__text"
            {...(reduceMotion ? {} : revealText(0.2))}
          >
            KalaManch is a leading event management company based in New Delhi, specializing in curating impeccable, high-impact experiences. We offer a diverse portfolio of services, from spectacular Annual Functions for Schools to vibrant Cultural Fests and Shows for Colleges. By seamlessly blending traditional cultural values with state-of-the-art technical facilities, we transform every event into a flamboyant celebration, delivering the perfect balance of panache and pizzazz.
          </motion.p>
        </div>

        <motion.div 
          className="about-welcome__image-wrapper"
          {...(reduceMotion ? {} : revealImage)}
        >
          <img 
            src="https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521374/_DSC1640_w0hiiq.jpg" 
            alt="Vibrant cultural festival performance by KalaManch" 
            className="about-welcome__image" 
            loading="lazy" 
          />
        </motion.div>
      </div>
    </section>
  );
}
