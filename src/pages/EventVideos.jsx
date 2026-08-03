import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

function VideoTitle({ videoId, fallback }) {
  const [title, setTitle] = useState(fallback);

  useEffect(() => {
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`)
      .then(res => res.json())
      .then(data => {
        if (data.title) setTitle(data.title);
      })
      .catch(() => {});
  }, [videoId]);

  return <>{title}</>;
}

const EVENT_VIDEOS_DATA = {
  'annual-functions': {
    title: 'Annual Functions',
    videos: [
      { id: 'noRspurU3m4' },
      { id: '5ekC6fqFFso' },
      { id: 'F4F455W91lI' },
      { id: 'YGC27iZKG4E' },
      { id: 'MjJ_Zapwxjc' },
      { id: 'HkcOyrNEjhg' },
      { id: '2mQLb1p8OOQ' },
      { id: 'N-Z0HXII-vg' },
      { id: 'dWgJ5kJbkr4' },
      { id: 'IF1cUhDGcyA' },
      { id: 'Zmw9SQEklOw' },
      { id: 'JXOsd5xGC00' },
      { id: 'WgBg9bE6yUY' },
      { id: 'mYg94Xh_PqE' }
    ]
  },
  'theatre-workshops': {
    title: 'Theatre Workshops',
    videos: [
      { id: 'nbSC4_C2sFw' },
      { id: '-_UbUcgIiDA' },
      { id: 'sDpuCfeL83k' },
      { id: '2xhCmGuanws' },
      { id: 'FUUFr9McV9c' }
    ]
  },
  'professional-shows': {
    title: 'Professional Shows',
    videos: [
      { id: 'vG0mGPyc9Ow' },
      { id: '8kpE_Ml6Cd8' },
      { id: 'txb4PRAIOqU' }
    ]
  },
  'nukkad-natak': {
    title: 'Nukkad Natak',
    videos: [
      { id: 'hnb6nW1jCLg' },
      { id: 'b9dNT_SIaFg' },
      { id: 'X5ptYbx7ZcY' },
      { id: 'B3j9P24HDuU' },
      { id: 'GKthi7S40oE' },
      { id: 'p-GWVqur_YU' },
      { id: 'eZi7u05dYKY' }
    ]
  },
  'makings': {
    title: 'Makings',
    videos: [
      { id: 'YCNARKbVtzE' },
      { id: 'gIxWUmyp21c' },
      { id: 'fMKpyd0010E' },
      { id: '00lD2PvQB3Y' },
      { id: 'twVrJGfbTBQ' },
      { id: 'Ubgk8aMUmII' },
      { id: 'plnwmrljtjw' },
      { id: 'TOR-3HWSwIU' },
      { id: 'J8v4oo0hD8U' },
      { id: '0Vi4uvhw1t0' }
    ]
  },
  'teacher-masterclass': {
    title: 'Teacher Masterclass',
    videos: [
      { id: 'RN62UpogU-0' },
      { id: 'Uwd8LUNdkRY' },
      { id: 'DnmEohT1zDo' },
      { id: 'Y6Wn4NNo4X4' }
    ]
  }
};

export default function EventVideos() {
  const { eventId } = useParams();
  const reduceMotion = useReducedMotion();
  const eventData = EVENT_VIDEOS_DATA[eventId];

  useEffect(() => {
    // Ensure we start at the top of the page when navigating here
    window.scrollTo(0, 0);
  }, []);

  if (!eventData) {
    return <Navigate to="/" replace />;
  }

  const revealText = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main className="event-videos-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(50px, 8vw, 90px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em', padding: '0 20px' }}
          {...(reduceMotion ? {} : revealText)}
        >
          {eventData.title} Videos
        </motion.h1>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px', minHeight: '40vh' }}>
        
        {eventData.videos.map((video, index) => (
          <motion.div 
            key={video.id}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 10) * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`${eventData.title} Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                loading="lazy"
                allowFullScreen>
              </iframe>
            </div>
            <div style={{ padding: '0 8px' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px', fontWeight: 600, color: '#34302f', margin: '0 0 10px 0', letterSpacing: '0.02em', lineHeight: '1.4' }}>
                <VideoTitle videoId={video.id} fallback={`${eventData.title} Part ${index + 1}`} />
              </h3>
            </div>
          </motion.div>
        ))}
        
      </div>

    </main>
  );
}
