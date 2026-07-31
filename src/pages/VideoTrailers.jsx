import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

export default function VideoTrailers() {
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
    <main className="video-trailers-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <motion.h1 
          className="about-page-heading"
          {...(reduceMotion ? {} : revealText)}
        >
          Video Trailers
        </motion.h1>
      </div>

      {/* Content intentionally left blank for now */}
      <div style={{ minHeight: '40vh' }}></div>

    </main>
  );
}
