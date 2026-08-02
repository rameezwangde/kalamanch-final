import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './GalleryGrid.css';

const ALBUM_CONFIGS = [
  { id: 'annual', title: 'Annual Functions', tag: 'kalamanch-gallery' },
  { id: 'chalta', title: 'Chalta Purja', tag: 'Chalta Purja' },
  { id: 'ghera', title: 'Ghera', tag: 'Ghera' },
  { id: 'kya-yehi', title: 'Kya Yehi Hai Sabhyata', tag: 'Kya Yehi Hai Sabhyata' },
  { id: 'stage-setup', title: 'Stage Setup', tag: 'Stage Setup' },
  { id: 'workshops', title: 'Workshops', tag: 'Workshops' },
];

export default function GalleryGrid() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Tracks which album is currently open in the lightbox
  const [activeAlbum, setActiveAlbum] = useState(null);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const results = await Promise.all(
          ALBUM_CONFIGS.map(async (config) => {
            const url = `https://res.cloudinary.com/crw5jo8x/image/list/${encodeURIComponent(config.tag)}.json`;
            const response = await fetch(url);
            
            if (!response.ok) {
              console.warn(`Failed to fetch album: ${config.title}`);
              return { ...config, images: [] };
            }
            
            const data = await response.json();
            return { ...config, images: data.resources || [] };
          })
        );
        
        // Only keep albums that actually have images
        setAlbums(results.filter(album => album.images.length > 0));
      } catch (err) {
        console.error("Error loading gallery albums:", err);
        setError("Unable to load the gallery albums at this time.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchAlbums();
  }, []);

  // Update active album when albums or location.search changes
  useEffect(() => {
    if (albums.length > 0) {
      const params = new URLSearchParams(location.search);
      const albumId = params.get('album');
      if (albumId) {
        const targetAlbum = albums.find(a => a.id === albumId);
        if (targetAlbum) {
          setActiveAlbum(targetAlbum);
        }
      }
    }
  }, [albums, location.search]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeAlbum) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeAlbum]);

  if (loading) {
    return (
      <div className="gallery-grid-status">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-grid-status">
        <p>{error}</p>
      </div>
    );
  }

  if (albums.length === 0) {
    return null;
  }

  return (
    <section className="gallery-albums-section">
      
      {/* Grid of Album Cards */}
      <div className="album-cards-grid">
        {albums.map((album) => {
          const coverImage = album.images[0];
          if (!coverImage) return null;
          
          const coverUrl = `https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v${coverImage.version}/${coverImage.public_id}.${coverImage.format}`;

          return (
            <motion.div 
              key={album.id}
              className="album-card"
              onClick={() => setActiveAlbum(album)}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="album-card__image-wrapper">
                <img src={coverUrl} alt={`${album.title} Cover`} className="album-card__image" loading="lazy" />
                <div className="album-card__overlay">
                  <span className="album-card__view-text">View Gallery</span>
                </div>
              </div>
              <div className="album-card__info">
                <h3 className="album-card__title">{album.title}</h3>
                <p className="album-card__count">{album.images.length} Photos</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {activeAlbum && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="gallery-lightbox__header">
              <h2 className="gallery-lightbox__title">{activeAlbum.title}</h2>
              <button 
                className="gallery-lightbox__close"
                onClick={() => {
                  setActiveAlbum(null);
                  if (location.search) {
                    navigate(location.pathname, { replace: true });
                  }
                }}
                aria-label="Close Gallery"
              >
                ✕
              </button>
            </div>
            
            <div className="gallery-lightbox__content">
              <div className="gallery-masonry">
                {activeAlbum.images.map((img) => {
                  const imgUrl = `https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`;
                  return (
                    <motion.div 
                      key={img.public_id} 
                      className="gallery-masonry-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${activeAlbum.title} Event Experience`} 
                        loading="lazy" 
                        className="gallery-masonry-image"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
