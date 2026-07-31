import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import './MomentsCollage.css';

const ease = [0.22, 1, 0.36, 1];
const images = [
  { className: 'moment-image--one', src: '/images/moments/annual-day-stage.jpg', alt: 'Students performing during a warmly lit school annual-day celebration', delay: 0.05 },
  { className: 'moment-image--two', src: '/images/moments/student-performer.jpg', alt: 'Student presenting confidently on stage during a school cultural programme', delay: 0.16 },
  { className: 'moment-image--three', src: '/images/moments/cultural-dance.jpg', alt: 'Group of students performing a colourful cultural dance at a school event', delay: 0.27 },
  { className: 'moment-image--four', src: '/images/moments/school-celebration.jpg', alt: 'Students celebrating during an outdoor school sports and activity day', delay: 0.38 },
];

const ranges = {
  desktop: [[110, -100], [150, -150], [210, -190], [260, -220]],
  tablet: [[82, -75], [112, -112], [158, -142], [195, -165]],
  mobile: [[55, -45], [80, -65], [100, -85], [120, -95]],
};

function getViewportMode() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth <= 1100) return 'tablet';
  return 'desktop';
}

export default function MomentsCollage() {
  const sectionRef = useRef(null);
  const [viewportMode, setViewportMode] = useState(getViewportMode);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const selectedRanges = ranges[viewportMode];

  const yOne = useTransform(scrollYProgress, [0, 1], selectedRanges[0]);
  const yTwo = useTransform(scrollYProgress, [0, 1], selectedRanges[1]);
  const yThree = useTransform(scrollYProgress, [0, 1], selectedRanges[2]);
  const yFour = useTransform(scrollYProgress, [0, 1], selectedRanges[3]);
  const titleY = useTransform(scrollYProgress, [0, 1], viewportMode === 'mobile' ? [20, -22] : [35, -35]);
  const springConfig = { stiffness: 85, damping: 24, mass: 0.35 };
  const smoothValues = [
    useSpring(yOne, springConfig),
    useSpring(yTwo, springConfig),
    useSpring(yThree, springConfig),
    useSpring(yFour, springConfig),
  ];
  const smoothTitleY = useSpring(titleY, springConfig);

  useEffect(() => {
    const updateMode = () => setViewportMode(getViewportMode());
    window.addEventListener('resize', updateMode);
    return () => window.removeEventListener('resize', updateMode);
  }, []);

  return (
    <section className="moments-collage" ref={sectionRef} aria-labelledby="moments-collage-title">
      <div className="moments-collage__inner">
        <motion.h2 className="moments-collage__title" id="moments-collage-title" style={{ y: reduceMotion ? 0 : smoothTitleY }}>
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }} viewport={{ once: true, amount: 0.35 }}>
            Unforgettable Moments
          </motion.span>
        </motion.h2>

        <div className="moments-collage__canvas">
          {images.map((image, index) => (
            <motion.figure className={`moment-image ${image.className}`} key={image.src} style={{ y: reduceMotion ? 0 : smoothValues[index] }}>
              <motion.div className="moment-image__reveal" initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(15% 0 0 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.1, delay: reduceMotion ? 0 : image.delay, ease }} viewport={{ once: true, amount: 0.22 }}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </motion.div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
