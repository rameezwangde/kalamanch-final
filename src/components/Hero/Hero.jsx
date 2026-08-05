import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import MegaMenu from '../MegaMenu/MegaMenu';
import './Hero.css';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => setIsHeaderScrolled(window.scrollY > window.innerHeight - 150);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  const enter = (delay, y) =>
    reduceMotion
      ? {}
      : {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: y < 0 ? 1.1 : 1.2, delay, ease },
      };

  return (
    <>
      <motion.header
        className={'hero-header' + (isHeaderScrolled ? ' hero-header--scrolled' : '')}
        {...enter(0.15, -14)}
      >
        <button className="menu-trigger" type="button" aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-label">Menu</span>
        </button>


        <a className="wordmark" href="/" aria-label="KalaManch home">
          <div className="wordmark-top">
            <img src="/kalamanch-logo.jpg" alt="KalaManch Logo" className="wordmark-logo" />
            <span className="wordmark-name">KalaManch</span>
          </div>
          <span className="wordmark-subtitle">Theatre Production Company</span>
        </a>


      </motion.header>

      <section className="hero" aria-label="KalaManch event experiences">
        {/* Replace this placeholder video with the final KalaManch event showreel. */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="https://res.cloudinary.com/crw5jo8x/video/upload/v1785762834/IMG_0738_compressed_fqdcy9.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="hero-overlay"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease }}
        />


        <main className="hero-content">
        </main>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>


      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
