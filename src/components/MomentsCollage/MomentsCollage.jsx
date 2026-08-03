import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MomentsCollage.css';

const ease = [0.22, 1, 0.36, 1];
const baseImages = [
  { src: 'https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v1785521435/DSC01367_euhkac.jpg', alt: 'Students performing during a warmly lit school annual-day celebration', delay: 0 },
  { src: 'https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v1785521377/0M6A2787_pkismx.jpg', alt: 'Mayank Jain conducting a workshop at Birla Science Centre', delay: 0.1 },
  { src: 'https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v1785521378/CL_3_aswrae.jpg', alt: 'Group of students performing a colourful cultural dance at a school event', delay: 0.2 },
  { src: 'https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v1785521383/DSC00961_mkh8e2.jpg', alt: 'Students celebrating during an outdoor school sports and activity day', delay: 0.3 },
];

const ALBUM_CONFIGS = [
  { tag: 'KalaManch-gallery' },
  { tag: 'Chalta Purja' },
  { tag: 'Ghera' },
  { tag: 'Kya Yehi Hai Sabhyata' },
  { tag: 'Stage Setup' },
  { tag: 'Workshops' },
];

function getViewportMode() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth <= 1100) return 'tablet';
  return 'desktop';
}

export default function MomentsCollage() {
  const sectionRef = useRef(null);
  const [viewportMode, setViewportMode] = useState(getViewportMode);
  // Default 15 skeletons
  const [fetchedImages, setFetchedImages] = useState(Array.from({ length: 15 }).map(() => ({ isLoading: true })));
  
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], viewportMode === 'mobile' ? [20, -22] : [35, -35]);
  const springConfig = { stiffness: 85, damping: 24, mass: 0.35 };
  const smoothTitleY = useSpring(titleY, springConfig);

  // Generate parallax transforms for all 20 grid items
  const yTransforms = Array.from({ length: 20 }).map((_, i) => {
    const range = viewportMode === 'mobile' ? [20, -20] : (i % 2 === 0 ? [50, -50] : [90, -90]);
    return useTransform(scrollYProgress, [0, 1], range);
  });
  const smoothValues = yTransforms.map(y => useSpring(y, springConfig));

  useEffect(() => {
    const updateMode = () => setViewportMode(getViewportMode());
    window.addEventListener('resize', updateMode);
    return () => window.removeEventListener('resize', updateMode);
  }, []);

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const results = await Promise.all(
          ALBUM_CONFIGS.map(async (config) => {
            const url = `https://res.cloudinary.com/crw5jo8x/image/list/${encodeURIComponent(config.tag)}.json`;
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            return (data.resources || []).filter(img => !img.public_id.toLowerCase().includes('collage'));
          })
        );
        
        let allFetched = results.flat();
        
        // Shuffle to get random images
        allFetched = allFetched.sort(() => 0.5 - Math.random());
        
        // Take 15 extra images
        const extraImages = allFetched.slice(0, 15).map((img, i) => ({
          src: `https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`,
          alt: 'Gallery Event Photo',
          delay: (i % 4) * 0.1,
          isLoading: false
        }));
        
        // If we got fewer than 15 images for some reason, just set what we have
        setFetchedImages(extraImages);
      } catch (error) {
        console.error("Error fetching gallery images for collage:", error);
        setFetchedImages([]); // fallback, clear skeletons
      }
    }
    
    fetchGalleryImages();
  }, []);

  const displayImages = [...baseImages, ...fetchedImages];

  return (
    <section className="moments-collage" ref={sectionRef} aria-labelledby="moments-collage-title">
      <div className="moments-collage__inner">
        <motion.h2 className="moments-collage__title" id="moments-collage-title" style={{ y: reduceMotion ? 0 : smoothTitleY }}>
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }} viewport={{ once: true, amount: 0.35 }}>
            Unforgettable Moments
          </motion.span>
        </motion.h2>

        <div className="moments-collage__canvas">
          {displayImages.map((image, index) => {
            if (image.isLoading) {
              return (
                <motion.figure className="moment-image" key={`skeleton-${index}`} style={{ y: reduceMotion ? 0 : smoothValues[index] }}>
                  <div className="moment-image__skeleton" style={{ width: '100%', height: '100%', background: '#eaeaea', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                </motion.figure>
              );
            }

            return (
              <motion.figure className="moment-image" key={`${image.src}-${index}`} style={{ y: reduceMotion ? 0 : smoothValues[index] }}>
                <motion.div className="moment-image__reveal" initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(15% 0 0 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.1, delay: reduceMotion ? 0 : image.delay, ease }} viewport={{ once: true, amount: 0.1 }}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </motion.div>
              </motion.figure>
            );
          })}
          
          {/* 20th Item: Creative Gallery Link */}
          <motion.figure className="moment-image moment-image--link" style={{ y: reduceMotion ? 0 : smoothValues[displayImages.length] }}>
            <Link to="/gallery" className="gallery-link-card">
              <motion.div className="gallery-link-card__reveal" initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }} viewport={{ once: true, amount: 0.22 }}>
                <h3>View Full Gallery</h3>
                <div className="gallery-link-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </motion.div>
            </Link>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
