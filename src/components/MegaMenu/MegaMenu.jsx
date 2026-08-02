import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import './MegaMenu.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Video Trailers', href: '/video-trailers' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' }
];

export default function MegaMenu({ isOpen, onClose }) {
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
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
  };

  const panelVariants = {
    hidden: { x: '-100%' },
    visible: { 
      x: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05, delayChildren: 0.1 } 
    },
    exit: { 
      x: '-100%', 
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mega-menu-overlay"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div 
            className="mega-menu-sidebar"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mega-menu-sidebar__header">
              <button 
                className="mega-menu-sidebar__close" 
                onClick={onClose}
                aria-label="Close menu"
              >
                <X strokeWidth={1.5} /> Close
              </button>
            </div>
            
            <nav className="mega-menu-sidebar__nav">
              <ul className="mega-menu-sidebar__list">
                {links.map((link) => (
                  <motion.li key={link.label} className="mega-menu-sidebar__item" variants={itemVariants}>
                    <a href={link.href} onClick={onClose}>{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div className="mega-menu-sidebar__footer" variants={itemVariants}>
              <a href="/contact" className="mega-menu-sidebar__cta" onClick={onClose}>
                Let's Talk
                <span className="mega-menu-sidebar__cta-icon">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
