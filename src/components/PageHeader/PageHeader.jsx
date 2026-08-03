import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import MegaMenu from '../MegaMenu/MegaMenu';
import '../Hero/Hero.css'; // Reusing hero-header styles for consistency

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => setIsHeaderScrolled(window.scrollY > 50);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const enter = {
    initial: { opacity: 0, y: -14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <>
      <motion.header
        className={'hero-header hero-header--scrolled'}
        {...(reduceMotion ? {} : enter)}
      >
        <button className="menu-trigger" type="button" aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-label">Menu</span>
        </button>

        <a className="wordmark" href="/" aria-label="KalaManch home">
          <span className="wordmark-name">KalaManch</span>
          <span className="wordmark-subtitle">Theatre Production Company</span>
        </a>


      </motion.header>

      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
