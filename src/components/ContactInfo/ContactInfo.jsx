import { motion, useReducedMotion } from 'framer-motion';
import './ContactInfo.css';

export default function ContactInfo() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="contact-info-section">
      <div className="contact-map-container">
        <div className="map-info-card">
          <div className="map-info-text">
            <h3>KalaManch</h3>
            <p>B-6/235, 1st Floor, Sector 3,<br/>Rohini, Delhi, 110085, India</p>
            <div className="map-info-rating">
              4.9 <span className="star">★</span> <a href="https://www.google.com/maps/place/KalaManch/@28.7186,77.1084,15z" target="_blank" rel="noopener noreferrer" style={{color: '#1a73e8', textDecoration: 'none'}}>(76)</a>
            </div>
          </div>
          <div className="map-info-actions">
            <a href="https://www.google.com/maps/place/KalaManch/@28.7186,77.1084,15z" target="_blank" rel="noopener noreferrer" className="map-action-btn" title="View larger map">
              <svg viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </a>
            <a href="https://www.google.com/maps/dir//KalaManch,+B-6%2F235,+1st+Floor,+Sector+3,+Rohini,+Delhi,+110085,+India" target="_blank" rel="noopener noreferrer" className="map-action-btn" title="Directions" style={{background: '#1a73e8', color: '#fff'}}>
              <svg viewBox="0 0 24 24">
                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.39.39-1.02 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
              </svg>
            </a>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.014299482811!2d77.1084!3d28.7186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014389052ea7%3A0x6b405f63116eb617!2sKalaManch!5e0!3m2!1sen!2sin!4v1689251034125!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="KalaManch Office Location"
        ></iframe>
      </div>

      <div className="contact-info-banner">
        <div className="contact-info-grid">
          
          <motion.div className="contact-info-item" {...(reduceMotion ? {} : reveal)}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact-info-content">
              <h3>Address</h3>
              <p>
                B-6/235, 1st Floor,<br/>
                Rohini Sector - 3,<br/>
                Delhi - 110085.
              </p>
            </div>
          </motion.div>

          <motion.div className="contact-info-item" {...(reduceMotion ? {} : reveal)} transition={{ delay: 0.1, duration: 0.8 }}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info-content">
              <h3>Phone</h3>
              <p>
                Telephone: <a href="tel:+919911089917">+91-9911089917</a><br/>
                Mobile: <a href="tel:+919769402412">+91-9769402412</a>
              </p>
            </div>
          </motion.div>

          <motion.div className="contact-info-item" {...(reduceMotion ? {} : reveal)} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-info-content">
              <h3>E-Mail</h3>
              <p>
                Email: <a href="mailto:kalamanch.co.in@gmail.com">kalamanch.co.in@gmail.com</a><br/>
                Email: <span>info@kalamanchindia.com</span><br/>
                Website: <a href="https://www.kalamanch.co.in" target="_blank" rel="noopener noreferrer">www.kalamanch.co.in</a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
