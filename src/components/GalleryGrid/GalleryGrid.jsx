import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './GalleryGrid.css';

const ALBUM_CONFIGS = [
  { id: 'annual', title: 'Annual Functions', tag: 'kalamanch-gallery', description: 'Experience the grandeur of our school Annual Functions. We manage everything from stunning stage designs to flawless performances, ensuring a memorable night for students and parents alike. Our expert team at Kalamanch meticulously orchestrates every detail, transforming ordinary school grounds into spectacular theatrical arenas. Browse through these captured moments to see the scale, energy, and unparalleled panache we bring to every celebration.' },
  { id: 'chalta', title: 'Chalta Purja', tag: 'Chalta Purja', description: 'A captivating theatrical performance that blends humor, emotion, and spectacular acting. See how Kalamanch brings stories to life with intricate set designs and expert direction. This album showcases the sheer talent of the performers and the high production value that defines our theatrical events. From costume design to atmospheric lighting, every element is curated to immerse the audience completely in the narrative.' },
  { id: 'ghera', title: 'Ghera', tag: 'Ghera', description: 'Immerse yourself in the world of \'Ghera\'. This production highlights our dedication to student-centric performances, complete with traditional elements and modern technical setups. The vivid imagery in this album captures the intense emotions and dramatic flair that our directors coax out of every cast member. It stands as a shining example of how we seamlessly merge cultural storytelling with state-of-the-art event execution.' },
  { id: 'kya-yehi', title: 'Kya Yehi Hai Sabhyata', tag: 'Kya Yehi Hai Sabhyata', description: 'Explore the thought-provoking play \'Kya Yehi Hai Sabhyata\', a prime example of our culturally rich and sophisticated theatrical event productions. This gallery highlights the compelling stage presence and dynamic blocking that keeps audiences on the edge of their seats. Our commitment to excellence is visible in every frame, demonstrating our ability to handle complex themes with maturity and artistic brilliance.' },
  { id: 'stage-setup', title: 'Stage Setup', tag: 'Stage Setup', description: 'A behind-the-scenes look at our meticulous stage setups. From lighting and sound to elaborate backdrops, see how we build the foundation for an unforgettable event. Kalamanch takes pride in its technical prowess, utilizing premium sound systems, dynamic LED lighting, and custom-fabricated props. These photos reveal the hard work and precision engineering required to create the flawless aesthetic that our clients expect.' },
  { id: 'workshops', title: 'Workshops', tag: 'Workshops', description: 'Discover our engaging and educational workshops. We focus on building confidence, teaching theatrical nuances, and developing the overall personality of students through performance arts. Led by our artistic director Mayank Jain and a team of seasoned professionals, these sessions are designed to break down stage fear and foster creativity. Look through these images to witness the transformative journey and genuine joy of our participants.' },
];

export default function GalleryGrid() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const reduceMotion = useReducedMotion();

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

  const allImages = albums.flatMap(album => 
    album.images.map(img => ({ ...img, albumTitle: album.title }))
  );

  return (
    <section className="gallery-albums-section">
      <div className="gallery-masonry">
        {allImages.map((img) => {
          const imgUrl = `https://res.cloudinary.com/crw5jo8x/image/upload/w_800,c_limit,f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`;
          return (
            <motion.div 
              key={img.public_id} 
              className="gallery-masonry-item"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={imgUrl} 
                alt={`${img.albumTitle} Event Experience`} 
                loading="lazy" 
                className="gallery-masonry-image"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
