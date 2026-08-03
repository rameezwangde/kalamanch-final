import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import './TeamStorySection.css';

const ease = [0.22, 1, 0.36, 1];
const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function TeamStorySection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -35]);
  const smoothImageY = useSpring(imageY, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <section className="team-story" ref={sectionRef} aria-labelledby="team-story-title">
      <div className="team-story__grid">
        <motion.div className="team-story__content" variants={contentVariants} initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="team-story__content-inner">
            <motion.h2 id="team-story-title" variants={itemVariants}>
              The Heart of<br />Every Celebration...
            </motion.h2>
            <div className="team-story__copy">
              <motion.p variants={itemVariants}>Behind every KalaManch experience is a team that understands how much a school event truly means. We work closely with educators, students and families to transform ideas into celebrations filled with confidence, creativity and joy.</motion.p>
              <motion.p variants={itemVariants}>From the first rehearsal to the final applause, every detail is handled with care — so every student feels seen, supported and proud to take the stage.</motion.p>
            </div>
            <motion.a className="team-story__link" href="#team" variants={itemVariants}>
              <span>Meet the KalaManch Team</span>
              <span className="team-story__link-line" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="team-story__image-wrapper" initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.25, ease }}>
          <motion.img style={{ y: reduceMotion ? 0 : smoothImageY }} src="/images/kalamanch-team-school-event.jpg" alt="KalaManch team supporting students during a school event" />
        </motion.div>
      </div>
    </section>
  );
}
