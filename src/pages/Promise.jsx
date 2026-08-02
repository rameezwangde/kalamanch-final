import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Promise() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    document.title = "Our Promise | Kalamanch Event Experiences";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover the Kalamanch Promise. We are committed to delivering exceptional, high-quality event experiences that blend tradition with modern technology in New Delhi.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Discover the Kalamanch Promise. We are committed to delivering exceptional, high-quality event experiences that blend tradition with modern technology in New Delhi.";
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
          Our Promise
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
            At Kalamanch, our promise is to consistently exceed expectations. We understand that every event is a unique reflection of your vision, whether it's a dynamic school annual day, a vibrant cultural fest, or a corporate milestone. We are dedicated to delivering not just an event, but a truly unforgettable experience.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Our commitment is rooted in our meticulous attention to detail, our passion for the performing arts, and our drive for technical perfection. We promise to handle every aspect of your production with utmost care, ensuring seamless execution from the initial concept to the final curtain call.
          </p>
          <p>
            When you choose Kalamanch, you are choosing a partner who values your moments as much as you do. We guarantee creativity, professionalism, and an unwavering dedication to making your celebration an absolute masterpiece.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
