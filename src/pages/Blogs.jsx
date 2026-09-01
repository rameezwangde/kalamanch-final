import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Blogs() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    // Basic SEO Setup
    document.title = "Our Blogs | KalaManch Event Experiences";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read the latest insights and stories from KalaManch. We specialize in exceptional and engaging events, seamlessly merging traditions with state-of-the-art technology.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Read the latest insights and stories from KalaManch. We specialize in exceptional and engaging events, seamlessly merging traditions with state-of-the-art technology.";
      document.head.appendChild(meta);
    }
    
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
    <main className="blogs-page" style={{ background: '#fff', minHeight: '100vh', paddingBottom: '0' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(80px, 10vw, 130px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em' }}
          {...(reduceMotion ? {} : revealText)}
        >
          Blogs
        </motion.h1>
      </div>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 120px 24px' }}>
        <motion.div
           style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(15px, 1.2vw, 18px)', color: '#5d5856', lineHeight: 1.85, letterSpacing: '0.04em' }}
           initial={reduceMotion ? false : { opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true, amount: 0.1 }}
        >
          <p style={{ marginBottom: '24px' }}>
            KalaManch is a company which specializes in a wide range of exceptional and engaging events. With a focus on excellence, we deliver remarkable Annual Functions and Founders Day for Schools, dynamic Festivals and Shows for Colleges, and tailor-made events for Corporates.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Our approach seamlessly merges timeless traditions with state-of-the-art technology, resulting in extraordinary experiences that exude elegance and sophistication. From conceptualization to execution, we meticulously ensure that every detail is carefully curated, leaving no room for mediocrity.
          </p>
          <p>
            With KalaManch, your event is elevated to new heights, characterized by a perfect blend of refinement and excitement. Trust our expertise to infuse your celebration with unparalleled panache and create an ambiance that inspires genuine celebration. Experience the professionalism and dedication of KalaManch as we transform your event into a truly remarkable and memorable occasion.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '60px' }}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <img src="/images/0E3A7745.JPG.jpg" alt="KalaManch Event Experience 1" loading="lazy" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <img src="/images/_A3A7368.JPG.jpg" alt="KalaManch Event Experience 2" loading="lazy" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <img src="/images/DPS EXP 2.jpg" alt="KalaManch Event Experience 3" loading="lazy" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <img src="/images/KYA_YAHI_SABHYATA_DSC_0239.JPG.jpg" alt="KalaManch Event Experience 4" loading="lazy" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
        </motion.div>
      </section>
    </main>
  );
}
