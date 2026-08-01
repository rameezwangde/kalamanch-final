import { motion, useReducedMotion } from 'framer-motion';
import './ArtisticDirector.css';

const ease = [0.22, 1, 0.36, 1];

export default function ArtisticDirector() {
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
    <section className="artistic-section" aria-labelledby="artistic-heading">
      <div className="artistic-inner">
        <div className="artistic-statement">
          <motion.p className="artistic-eyebrow" {...reveal(0.05, { y: 18 })}>
            Experiences Beyond the Stage
          </motion.p>
          <div className="artistic-heading">
            <motion.div
              className="artistic-script"
              aria-hidden="true"
              {...reveal(0.15, { y: 28 })}
              transition={reduceMotion ? undefined : { duration: 1.15, delay: 0.15, ease }}
            >
              Kalamanch
            </motion.div>
            <motion.h2
              className="artistic-serif"
              id="artistic-heading"
              aria-label="Kalamanch is where talent shines"
              {...reveal(0.27, { y: 34 })}
              transition={reduceMotion ? undefined : { duration: 1.1, delay: 0.27, ease }}
            >
              <span>is where</span>
              <span>talent shines</span>
            </motion.h2>
          </div>
        </div>
        <div className="artistic-copy">
          <motion.p {...reveal(0.38, { y: 22 })}>
            Founder and Creative Head Mayank Jain is an authentic spearheading leader, nationally acclaimed for his expertise in theatre and an extensive artistic programme of music, performance arts, comedy, debates, film walks, educational workshops, tours, and talks.
          </motion.p>
          <motion.p {...reveal(0.40, { y: 22 })}>
            He is a trained actor from Shri Ram Centre (Mandi House) and a professional actor with the National School of Drama (NSD) for 5 years. He is also trained professionally at the Natya Ballet Centre for 5 years in dance forms like Musical Ballet, Chau, Contemporary Dance, as well as Semi-Classical and Classical dance forms.
          </motion.p>
          <motion.p {...reveal(0.42, { y: 22 })}>
            He has created a premier hub for artistic innovation, with the marriage between music and drama at its heart. His main objective is to produce high-quality theatre, accessible to a diverse audience, with integrity and passion, producing the highest quality Theatre, Dance Drama, and Ballet.
          </motion.p>
          <motion.div
            className="artistic-signature"
            {...reveal(0.44, { y: 15 })}
          >
            Mayank Jain
          </motion.div>
        </div>
      </div>
    </section>
  );
}
