import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import './VideoModal.css';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    videoRef.current?.play().catch(() => {});

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Kalamanch showreel"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <button className="video-modal-close" type="button" aria-label="Close video" onClick={onClose}>
            <X aria-hidden="true" />
          </button>

          <motion.div
            className="video-modal-player"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <video ref={videoRef} controls playsInline preload="metadata">
              <source src="/videos/kalamanch-hero.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
