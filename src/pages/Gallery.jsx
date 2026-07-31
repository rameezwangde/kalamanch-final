import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';
import MomentsCollage from '../components/MomentsCollage/MomentsCollage';

export default function Gallery() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    // Ensure we start at the top of the page when navigating here
    window.scrollTo(0, 0);
  }, []);

  const revealText = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main className="gallery-page" style={{ background: '#fff', paddingBottom: '100px' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <motion.h1 
          className="about-page-heading"
          {...(reduceMotion ? {} : revealText)}
        >
          Our Gallery
        </motion.h1>
      </div>

      <MomentsCollage />
    </main>
  );
}
