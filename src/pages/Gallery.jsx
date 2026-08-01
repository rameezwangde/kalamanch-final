import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

import GalleryGrid from '../components/GalleryGrid/GalleryGrid';

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
    <main className="gallery-page" style={{ background: '#fff', paddingBottom: '0' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(80px, 10vw, 130px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em' }}
          {...(reduceMotion ? {} : revealText)}
        >
          Gallery
        </motion.h1>
        <motion.p
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 1.1vw, 17px)', color: '#5d5856', lineHeight: 1.85, letterSpacing: '0.04em', margin: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Explore our portfolio of expertly curated events across New Delhi and beyond. From breathtaking school annual functions and theatrical plays to vibrant college cultural fests, our gallery showcases the passion, precision, and panache that Kalamanch brings to every stage. We pride ourselves on delivering premium event management services that turn concepts into unforgettable experiences.
        </motion.p>
      </div>


      
      {/* Dynamic Cloudinary Masonry Grid */}
      <GalleryGrid />
    </main>
  );
}
