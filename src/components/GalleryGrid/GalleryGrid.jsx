import { motion, useReducedMotion } from 'framer-motion';
import './GalleryGrid.css';

const LOCAL_IMAGES = [
  { id: 'new1', src: '/images/-crop .jpg', title: 'KalaManch Event Experience' },
  { id: 'new2', src: '/images/24.jpg', title: 'KalaManch Event Experience' },
  { id: 'new3', src: '/images/444.JPG', title: 'KalaManch Event Experience' },
  { id: 'new4', src: '/images/BSHIM.jpg', title: 'KalaManch Event Experience' },
  { id: 'new5', src: '/images/DJI_0028 (1).JPG', title: 'KalaManch Event Experience' },
  { id: 'new6', src: '/images/IMG_2574.JPG', title: 'KalaManch Event Experience' },
  { id: 'new7', src: '/images/setup.jpg', title: 'KalaManch Event Experience' },
  { id: '1', src: '/images/13268420_10154352488429155_1164193968630627791_o.jpg', title: 'KalaManch Event Experience' },
  { id: '2', src: '/images/13305214_10154352488514155_8829674275236500939_o.jpg', title: 'KalaManch Event Experience' },
  { id: '3', src: '/images/13308398_10154352492789155_4986881584189289076_o.jpg', title: 'KalaManch Event Experience' },
  { id: '4', src: '/images/13308478_10154352491479155_8782721113584052630_o.jpg', title: 'KalaManch Event Experience' },
  { id: '5', src: '/images/13329528_10154352493319155_7966798548092784002_o.jpg', title: 'KalaManch Event Experience' },
  { id: '6', src: '/images/14481926_10154705811154155_7749548386138963213_o.jpg', title: 'KalaManch Event Experience' },
  { id: '7', src: '/images/14500277_10154705818304155_8115181340969177597_o.jpg', title: 'KalaManch Event Experience' },
  { id: '8', src: '/images/14566468_10154705820559155_2256816755133575632_o.jpg', title: 'KalaManch Event Experience' },
  { id: '9', src: '/images/2041C394-0253-42F7-B8A3-56F78D3A9851.JPEG', title: 'KalaManch Event Experience' },
  { id: '10', src: '/images/20D5E5F6-3EBA-4EF7-8728-5A25280BAB4B.JPEG', title: 'KalaManch Event Experience' },
  { id: '11', src: '/images/32730646_1735109546565533_6868066144150880256_o.jpg', title: 'KalaManch Event Experience' },
  { id: '12', src: '/images/32863842_1736966676379820_5407486352491020288_o.jpg', title: 'KalaManch Event Experience' },
  { id: '13', src: '/images/32864668_1736966703046484_1504000832985628672_o.jpg', title: 'KalaManch Event Experience' },
  { id: '14', src: '/images/32933236_1736966156379872_3356469662824005632_o.jpg', title: 'KalaManch Event Experience' },
  { id: '15', src: '/images/33030778_1736966379713183_1886080290414133248_o.jpg', title: 'KalaManch Event Experience' },
  { id: '16', src: '/images/33035528_1736966659713155_5229266611529056256_o.jpg', title: 'KalaManch Event Experience' },
  { id: '17', src: '/images/33036203_1736966183046536_8848558624709017600_o.jpg', title: 'KalaManch Event Experience' },
  { id: '18', src: '/images/33038129_1736966849713136_799387791396962304_o.jpg', title: 'KalaManch Event Experience' },
  { id: '19', src: '/images/34674467_1755841814492306_6993979136272236544_o.jpg', title: 'KalaManch Event Experience' },
  { id: '20', src: '/images/410E6A1C-337B-4C38-81FF-7E6FB1358E61.JPEG', title: 'KalaManch Event Experience' },
  { id: '21', src: '/images/53BB7AB0-13A4-4A94-9E27-8C771732E9FD.JPEG', title: 'KalaManch Event Experience' },
  { id: '22', src: '/images/758C8DBD-1F56-496C-AFF9-FF39D64E6FEC.JPEG', title: 'KalaManch Event Experience' },
  { id: '23', src: '/images/7638867F-E62E-4A36-A1EE-50B1BFE4EAB0.JPEG', title: 'KalaManch Event Experience' },
  { id: '24', src: '/images/847F03E6-CC12-459B-8B36-7E5A0BA94E15.JPEG', title: 'KalaManch Event Experience' },
  { id: '25', src: '/images/850AE2E5-A0F0-403C-82E5-BEF55969A045.JPEG', title: 'KalaManch Event Experience' },
  { id: '26', src: '/images/8CE2BD10-D832-4643-BBB3-98BD807C7857.JPEG', title: 'KalaManch Event Experience' },
  { id: '27', src: '/images/B021605F-AB81-4997-B4D2-EEE94F969E20.JPEG', title: 'KalaManch Event Experience' },
  { id: '28', src: '/images/BC7F8281-A846-41A7-95B3-8A104CF2621B.JPEG', title: 'KalaManch Event Experience' },
  { id: '29', src: '/images/C1278223-4159-4665-B9B2-6632B00D931B.JPEG', title: 'KalaManch Event Experience' },
  { id: '30', src: '/images/kalamanch-team-school-event.jpg', title: 'KalaManch Team School Event' },
];

export default function GalleryGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gallery-albums-section">
      <div className="gallery-masonry">
        {LOCAL_IMAGES.map((img) => (
          <motion.div 
            key={img.id} 
            className="gallery-masonry-item"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              loading="lazy" 
              className="gallery-masonry-image"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
