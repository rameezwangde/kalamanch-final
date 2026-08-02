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


        <a className="wordmark" href="/" aria-label="Kalamanch home">
          <span className="wordmark-name">Kalamanch</span>
          <span className="wordmark-subtitle">Event Experiences</span>
        </a>


      </motion.header>

      <section className="hero" aria-label="Kalamanch event experiences">
        {/* Replace this placeholder video with the final Kalamanch event showreel. */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/crw5jo8x/video/upload/v1785663887/The_Count_of_Monte_Cristo_-_Trailer_95MB_ystiva.jpg"
          aria-hidden="true"
        >
          <source src="https://res.cloudinary.com/crw5jo8x/video/upload/v1785663887/The_Count_of_Monte_Cristo_-_Trailer_95MB_ystiva.mp4" type="video/mp4" />
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
