import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactInfo/ContactInfo';

export default function Contact() {
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
    <main className="contact-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center', display: 'none' }}>
        <motion.h1 
          className="about-page-heading"
          {...(reduceMotion ? {} : revealText)}
        >
          Contact Us
        </motion.h1>
      </div>

      <div style={{ paddingTop: '100px' }}>
        <ContactForm />
      </div>

      <ContactInfo />

    </main>
  );
}
