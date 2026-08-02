import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Moments() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    document.title = "Our Moments | Kalamanch Event Experiences";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore unforgettable moments captured at Kalamanch events. From school annual functions to grand theatrical performances, witness the magic we create.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Explore unforgettable moments captured at Kalamanch events. From school annual functions to grand theatrical performances, witness the magic we create.";
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
  }, []);

  const revealText = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingBottom: '0' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(70px, 9vw, 110px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em' }}
          {...(reduceMotion ? {} : revealText)}
        >
          Our Moments
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
            Every event we organize is a collection of fleeting, beautiful moments that are cherished for a lifetime. "Our Moments" is a tribute to the joy, the drama, and the spectacular celebrations we have had the privilege to be a part of over the years.
          </p>
          <p style={{ marginBottom: '24px' }}>
            From the nervous excitement backstage before a school play to the roaring applause of a crowded college fest, these are the memories that fuel our passion. We capture the essence of every performance, ensuring that the spirit of the event lives on long after the lights go down.
          </p>
          <p>
            Take a journey through some of our most memorable experiences. These moments highlight our commitment to excellence and showcase the unparalleled panache that Kalamanch brings to every stage we touch.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
