import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './MegaMenu.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Video Trailers', href: '/video-trailers' },
  { label: 'Professional Work', href: '/professional-work' },
  { label: 'Contact Us', href: '/contact' }
];

export default function MegaMenu({ isOpen, onClose }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mega-menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mega-menu__image-pane">
            <img src="/images/events/annual-day.jpg" alt="Kalamanch Event" loading="lazy" />
          </div>
          
          <div className="mega-menu__content-pane">
            <header className="mega-menu__header">
              <button 
                className="mega-menu__close" 
                onClick={onClose}
                aria-label="Close menu"
              >
                <X strokeWidth={1.5} /> Close
              </button>
              
              <a href="/" className="mega-menu__wordmark" onClick={onClose}>
                <span className="mega-menu__wordmark-name">Kalamanch</span>
                <span className="mega-menu__wordmark-subtitle">Event Experiences</span>
              </a>
              
              <a href="/contact" className="mega-menu__enquire" onClick={onClose}>
                Enquire Now
              </a>
            </header>
            
            <nav className="mega-menu__nav">
              <ul className="mega-menu__list">
                {links.map((link) => (
                  <motion.li key={link.label} className="mega-menu__item" variants={itemVariants}>
                    <a href={link.href} onClick={onClose}>{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
