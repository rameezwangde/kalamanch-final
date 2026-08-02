import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Team() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    document.title = "Our Team | Kalamanch Event Experiences";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet the creative minds and expert event managers behind Kalamanch. Our team is dedicated to producing high-quality theatrical events and cultural fests.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet the creative minds and expert event managers behind Kalamanch. Our team is dedicated to producing high-quality theatrical events and cultural fests.";
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
          Our Team
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
            The Kalamanch team is a collective of passionate artists, seasoned directors, and expert event managers who share a singular vision: to create magical, unforgettable experiences. Led by our visionary founder, Mayank Jain, our team brings decades of professional theatrical experience to every project.
          </p>
          <p style={{ marginBottom: '24px' }}>
            From creative scriptwriters and talented choreographers to technical directors and stage designers, each member of our crew plays a vital role in bringing stories to life. We pride ourselves on our collaborative spirit and our ability to seamlessly blend different artistic disciplines.
          </p>
          <p>
            Whether we are teaching workshops to aspiring young actors or orchestrating a massive college festival, our team's dedication and professionalism shine through. Get to know the people who make the magic happen and trust us to bring your next big event to life.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
