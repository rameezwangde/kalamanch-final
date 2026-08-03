import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';

const VIDEO_DATA = [
  {
    id: '8kpE_Ml6Cd8',
    title: 'Dr. Syama Prasad Mookerjee: A Theatrical Tribute',
    description: 'A powerful theatrical production by <strong>KalaManch</strong> detailing the life and political mission of <strong>Dr. Syama Prasad Mookerjee</strong>, highlighting his steadfast advocacy for a unified India.',
  },
  {
    id: 'mYg94Xh_PqE',
    title: 'Saint Kabir Das: An Annual Function Tribute',
    description: 'A captivating annual function at <strong>CL Gupta World School</strong> honoring the life and teachings of <strong>Saint Kabir Das</strong> through powerful theatrical performances and devotional music.',
  },
  {
    id: 'YGC27iZKG4E',
    title: 'DPS Dwarka: Krishna – The Eternal Enchanter',
    description: 'A spectacular Annual Function at <strong>DPS Dwarka Expressway</strong>, produced by <strong>KalaManch</strong>. A mesmerizing theatrical performance taking audiences on a soulful journey through Lord Krishna\'s life.',
  },
  {
    id: 'TdqBVJ14MK4',
    title: 'DPS Panvel: The Count of Monte Cristo',
    description: 'A spectacular musical Broadway adaptation of <strong>The Count of Monte Cristo</strong> performed by the talented students of <strong>DPS Panvel School</strong>. Experience the drama, intrigue, and unforgettable music of this timeless masterpiece.',
  },
  {
    id: 'gIxWUmyp21c',
    title: 'KalaManch Event Showcase',
    description: 'Experience another incredible event showcase brought to life by <strong>KalaManch</strong>. Witness spectacular stage production and masterful storytelling.',
  },
  {
    id: 'nXMelNQkKeA',
    title: 'Dalmiya Vidya Mandir: Bhagat Singh',
    description: 'An inspiring theatrical performance by <strong>Dalmiya Vidya Mandir Chirawa</strong> honoring the life of <strong>Bhagat Singh</strong>. A powerful portrayal of revolutionary ideas and patriotic fervor.',
  },
  {
    id: 'osRnFTGDWV8',
    title: 'Manoj Tiwari Appreciates KalaManch',
    description: 'A proud moment as <strong>Manoj Tiwari Ji</strong> shares his heartfelt appreciation for our Dr. Syama Prasad Mookerjee theatre production by <strong>KalaManch</strong>. A true testament to the impact of our storytelling.',
  },
  {
    id: 'o38HCbjMe2g',
    title: 'GD Goenka Surat: Annual Function Magic',
    description: 'Witness how <strong>KalaManch</strong> creates magic at the spectacular Annual Function for <strong>GD Goenka International School, Surat</strong>. A brilliant showcase of theatrical excellence and student talent.',
  },
  {
    id: '0Vi4uvhw1t0',
    title: 'A Musical Tribute: Dr. Shyama Prasad Mukherjee',
    description: 'A powerful musical tribute to <strong>Dr. Shyama Prasad Mukherjee</strong> presented by BJP and <strong>KalaManch</strong>. A mesmerizing theatrical celebration of his lasting legacy.',
  },
  {
    id: '_K_BNUL-pfA',
    title: 'CL Gupta World School: Tribute to Saint Kabir',
    description: 'A breathtaking Annual Function at <strong>CL Gupta World School</strong> paying tribute to <strong>Saint Kabir</strong>. Powered by the incredible stage production of <strong>KalaManch</strong>.',
  },
  {
    id: 'N6zTyo2tEEU',
    title: 'Dr. Shyama Prasad Mukherjee: Live Performance',
    description: 'Experience another mesmerizing segment of our powerful musical tribute to <strong>Dr. Shyama Prasad Mukherjee</strong>. A live theatrical showcase presented by BJP and <strong>KalaManch</strong>.',
  },
  {
    id: '7mFOCQobxmQ',
    title: 'APJ Abdul Kalam: Wings of Fire',
    description: 'An inspiring Annual Function performance based on <strong>APJ Abdul Kalam\'s "Wings of Fire"</strong>. A beautiful theatrical tribute highlighting the legacy of the Missile Man of India.',
  },
  {
    id: 'HEkYmz4x9eM',
    title: 'DPS Dwarka: Divine Leela of Lord Krishna',
    description: 'Celebrate the Divine Leela of <strong>Lord Krishna</strong> at the spectacular 2025 Annual Function of <strong>DPS Dwarka Expressway</strong>. Brought to life by KalaManch.',
  },
  {
    id: 'IF1cUhDGcyA',
    title: 'Bhagat Singh: A Revolutionary Idea',
    description: 'Experience another captivating segment from the <strong>Dalmiya Vidya Mandir Chirawa</strong> theatrical production of <strong>Bhagat Singh: A Revolutionary Idea</strong>.',
  },
  {
    id: 'yvXUH9C-Als',
    title: 'LK International: Bagiya Bancharam Ki',
    description: 'An unforgettable musical play titled <strong>"Bagiya Bancharam Ki"</strong>, beautifully staged at the Annual Function of <strong>LK International School</strong>.',
  },
  {
    id: 'YCvvUnv4wKY',
    title: 'Wings of Fire: Theatrical Highlight',
    description: 'Experience another inspiring segment highlighting the legacy of the Missile Man of India. An unforgettable theatrical tribute based on <strong>APJ Abdul Kalam\'s "Wings of Fire"</strong>.',
  },
  {
    id: 'M8lqMMZzVxo',
    title: 'KalaManch: Taj Mahal ka Tender',
    description: '<strong>KalaManch</strong> proudly presents the Grand Theatre Festival featuring a spectacular theatrical performance of the critically acclaimed play <strong>"Taj Mahal ka Tender"</strong>.',
  },
  {
    id: '4YQahDoAicQ',
    title: 'Bharat: Incredible India',
    description: 'A breathtaking Annual Function performance celebrating the vibrant spirit and rich heritage of <strong>Incredible India</strong>. Brought to life by <strong>KalaManch</strong>.',
  }
];

export default function VideoTrailers() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    // Ensure we start at the top of the page when navigating here
    window.scrollTo(0, 0);
  }, []);

  const revealText = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main className="video-trailers-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '40px', textAlign: 'center' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(70px, 9vw, 110px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em' }}
          {...(reduceMotion ? {} : revealText)}
        >
          Video Trailers
        </motion.h1>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px', minHeight: '40vh' }}>
        
        {VIDEO_DATA.map((video, index) => (
          <motion.div 
            key={video.id}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                loading="lazy"
                allowFullScreen>
              </iframe>
            </div>
            <div style={{ padding: '0 8px' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px', fontWeight: 600, color: '#34302f', margin: '0 0 10px 0', letterSpacing: '0.02em' }}>
                {video.title}
              </h3>
              <p 
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', lineHeight: 1.7, color: '#5d5856', margin: 0 }}
                dangerouslySetInnerHTML={{ __html: video.description }}
              />
            </div>
          </motion.div>
        ))}
        
      </div>

    </main>
  );
}
