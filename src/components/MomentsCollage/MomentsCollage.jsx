import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import './MomentsCollage.css';

const ease = [0.22, 1, 0.36, 1];

// Auto-populate all 94 local gallery images
const LOCAL_GALLERY_FILES = [
  "-crop .jpg", "0E3A6958.JPG.jpg", "0E3A7357.JPG.jpg", "0E3A7477.JPG.jpg", "0E3A7536.JPG.jpg",
  "0E3A7745.JPG.jpg", "0M6A2776.jpg", "0M6A2787.jpg", "13268420_10154352488429155_1164193968630627791_o.jpg",
  "13305214_10154352488514155_8829674275236500939_o.jpg", "13308398_10154352492789155_4986881584189289076_o.jpg",
  "13308478_10154352491479155_8782721113584052630_o.jpg", "13329528_10154352493319155_7966798548092784002_o.jpg",
  "14481926_10154705811154155_7749548386138963213_o.jpg", "14500277_10154705818304155_8115181340969177597_o.jpg",
  "14566468_10154705820559155_2256816755133575632_o.jpg", "17264285_640539459472592_3718686259694422890_n.jpg",
  "2041C394-0253-42F7-B8A3-56F78D3A9851.JPEG", "20D5E5F6-3EBA-4EF7-8728-5A25280BAB4B.JPEG", "24.jpg",
  "32730646_1735109546565533_6868066144150880256_o.jpg", "32863842_1736966676379820_5407486352491020288_o.jpg",
  "32864668_1736966703046484_1504000832985628672_o.jpg", "32933236_1736966156379872_3356469662824005632_o.jpg",
  "33030778_1736966379713183_1886080290414133248_o.jpg", "33035528_1736966659713155_5229266611529056256_o.jpg",
  "33036203_1736966183046536_8848558624709017600_o.jpg", "33038129_1736966849713136_799387791396962304_o.jpg",
  "34674467_1755841814492306_6993979136272236544_o.jpg", "410E6A1C-337B-4C38-81FF-7E6FB1358E61.JPEG",
  "444.JPG", "53BB7AB0-13A4-4A94-9E27-8C771732E9FD.JPEG", "758C8DBD-1F56-496C-AFF9-FF39D64E6FEC.JPEG",
  "7638867F-E62E-4A36-A1EE-50B1BFE4EAB0.JPEG", "7E5A9154.JPG.jpg", "847F03E6-CC12-459B-8B36-7E5A0BA94E15.JPEG",
  "850AE2E5-A0F0-403C-82E5-BEF55969A045.JPEG", "8CE2BD10-D832-4643-BBB3-98BD807C7857.JPEG",
  "B021605F-AB81-4997-B4D2-EEE94F969E20.JPEG", "BC7F8281-A846-41A7-95B3-8A104CF2621B.JPEG", "BSHIM.jpg",
  "C1278223-4159-4665-B9B2-6632B00D931B.JPEG", "CHALTA_PURJA_DSC_0018.JPG.jpg", "CHALTA_PURJA_DSC_0099.JPG.jpg",
  "CHALTA_PURJA_DSC_0103.JPG.jpg", "CHALTA_PURJA_DSC_0278.JPG.jpg", "CL 1.jpg", "CL 3.jpg", "CL 5.jpg", "CL 7.jpg",
  "DJI_0028 (1).JPG", "DPS EXP 2.jpg", "DSC00961.jpg", "DSC01367.jpg", "DSC01406.jpg", "DSC_0312.JPG.jpg",
  "DSC_0363.JPG.jpg", "DSC_0494.JPG.jpg", "GHERA_DSC_0018.JPG.jpg", "GHERA_DSC_0021.JPG.jpg", "GHERA_DSC_0046.JPG.jpg",
  "IMG_2574.JPG", "IMG_8422.JPG.jpg", "IMG_9482.JPG.jpg", "IMG_9700.JPG.jpg", "KYA_YAHI_SABHYATA_DSC_0092.JPG.jpg",
  "KYA_YAHI_SABHYATA_DSC_0115.JPG.jpg", "KYA_YAHI_SABHYATA_DSC_0144.JPG.jpg", "KYA_YAHI_SABHYATA_DSC_0236.JPG.jpg",
  "KYA_YAHI_SABHYATA_DSC_0239.JPG.jpg", "Kabir.jpg", "SAM_4504.JPG.jpg", "SAM_4526 copy.JPG.jpg", "SAM_4710.JPG.jpg",
  "SAM_4791.JPG.jpg", "SAM_4896.JPG.jpg", "SAM_4914.JPG.jpg", "STL_0531.JPG.jpg",
  "Screenshot 2025-01-19 at 8.47.13 PM.jpg", "Screenshot 2025-01-19 at 8.48.04 PM.jpg",
  "Screenshot 2025-01-19 at 8.54.37 PM.jpg", "Screenshot 2025-01-19 at 9.06.42 PM.jpg", "Take.jpg",
  "_A3A7368.JPG.jpg", "_DSC1640.jpg", "_DSC1683.JPG.jpg", "_DSC1693.JPG.jpg", "_DSC2061.jpg",
  "collage 3.png", "collage 4.png", "collage.png", "dps fzr 1.jpg", "kalamanch-team-school-event.jpg", "setup.jpg"
].map((file, idx) => ({
  id: idx,
  src: `/images/${file}`,
  alt: 'KalaManch Unforgettable Moments'
}));

function getViewportMode() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth <= 1100) return 'tablet';
  return 'desktop';
}

export default function MomentsCollage() {
  const sectionRef = useRef(null);
  const [viewportMode, setViewportMode] = useState(getViewportMode);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], viewportMode === 'mobile' ? [20, -22] : [35, -35]);
  const springConfig = { stiffness: 85, damping: 24, mass: 0.35 };
  const smoothTitleY = useSpring(titleY, springConfig);

  const galleryRef = useRef(null);
  
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.offsetWidth * 0.75;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updateMode = () => setViewportMode(getViewportMode());
    window.addEventListener('resize', updateMode);
    return () => window.removeEventListener('resize', updateMode);
  }, []);

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : LOCAL_GALLERY_FILES.length - 1));
    }
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(prev => (prev < LOCAL_GALLERY_FILES.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section className="moments-collage" ref={sectionRef} aria-labelledby="moments-collage-title">
      <div className="moments-collage__inner">
        <motion.h2 className="moments-collage__title" id="moments-collage-title" style={{ y: reduceMotion ? 0 : smoothTitleY }}>
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }} viewport={{ once: true, amount: 0.35 }}>
            Unforgettable Moments
          </motion.span>
        </motion.h2>

        <div className="moments-collage__slider-wrapper">
          <button 
            className="moments-collage__nav-button moments-collage__nav-button--prev"
            aria-label="Previous photos"
            onClick={() => scrollGallery('left')}
          >
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button 
            className="moments-collage__nav-button moments-collage__nav-button--next"
            aria-label="Next photos"
            onClick={() => scrollGallery('right')}
          >
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="moments-collage__canvas" ref={galleryRef}>
            {LOCAL_GALLERY_FILES.map((image, index) => (
              <motion.figure 
                className="moment-image" 
                key={`${image.src}-${index}`}
                onClick={() => setSelectedIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <motion.div className="moment-image__reveal" initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(15% 0 0 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.1, delay: reduceMotion ? 0 : (index % 4) * 0.08, ease }} viewport={{ once: true, amount: 0.1 }}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </motion.div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && LOCAL_GALLERY_FILES[selectedIndex] && (
          <motion.div 
            className="moments-collage__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="moments-collage__lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close image">
              <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>

            <button className="moments-collage__lightbox-nav moments-collage__lightbox-nav--prev" onClick={handlePrevLightbox} aria-label="Previous image">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="moments-collage__lightbox-nav moments-collage__lightbox-nav--next" onClick={handleNextLightbox} aria-label="Next image">
              <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <motion.div 
              className="moments-collage__lightbox-content"
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={LOCAL_GALLERY_FILES[selectedIndex].src} alt={LOCAL_GALLERY_FILES[selectedIndex].alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
