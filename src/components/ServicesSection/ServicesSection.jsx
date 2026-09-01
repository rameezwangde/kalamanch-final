import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ServicesSection.css';

const services = [
  {
    title: 'Annual Functions',
    description: 'Providing diverse and unique themes to our clients by deeply understanding their requirements and fulfilling them flawlessly. As experts in school event management, we handle set designing, stage lighting, custom costume designing, professional make-up, and song choreography—all perfectly aligned with the nature and perspective of your chosen theme.',
    image: '/images/GHERA_DSC_0046.JPG.jpg',
    alt: 'Students performing on stage during an annual day function',
  },
  {
    title: 'Theatre Workshop',
    description: 'Conducting comprehensive workshops on Theatre, Dance, Ballet, the Art of Perceiving, Body Movement, and Diction. The core idea of our educational workshop is to develop the overall personality of students. We introduce them to the fine nuances of all performance art forms, specifically focusing on building confidence and overcoming stage fear.',
    image: '/images/IMG_9482.JPG.jpg',
    alt: 'Students participating in a theatre workshop',
  },
  {
    title: 'Comedy & All Types of Plays',
    description: 'Scripting and directing theatrical plays of every genre, whether it is a performance based on Satire, Tragedy, Comedy, or Musicals. We also produce plays by eminent writers (Shakespeare, Prem Chand, Moliere, Anton Chekov, Bertolt Brecht, etc.) and specialize in the enactment and dramatization of new, current cultural themes.',
    image: '/images/14566468_10154705820559155_2256816755133575632_o.jpg',
    alt: 'Actors performing a play during a cultural festival',
  },
  {
    title: 'Fest & Shows',
    description: 'Organizing all types of cultural fests in schools and colleges for festive occasions like Diwali, Dushera, Christmas, and New Year, as well as days of celebration like Youth Day, Republic Day, Women’s Day, and Earth Day. We make each and every moment memorable by organizing thematic exhibitions as per client requirements and coordinating professional troupes to perform (Garba, Dandiya, Folk Dances, etc.).',
    image: '/images/STL_0531.JPG.jpg',
    alt: 'School students celebrating a festive cultural event',
  },
  {
    title: 'Performance Arts',
    description: 'Teaching students exactly how a final stage performance takes place. We introduce students to different art and dance forms, covering the basics of script writing, an introduction to stage lighting and professional make-up, character designing, acting improvisations, and voice modulation.',
    image: '/images/34674467_1755841814492306_6993979136272236544_o.jpg',
    alt: 'Student learning performance arts techniques',
  },
  {
    title: 'Media & Art',
    description: 'An introduction to Media and different types of cameras (Compact Camera, Box Camera, Reflex Camera, DSLR Camera, etc.) and various types of lenses. We teach how to make movies using professional cameras, shooting demo films and documentaries, and cover pre-production planning, post-production techniques, and the importance and basics of film editing.',
    image: '/images/DPS EXP 2.jpg',
    alt: 'Students exploring media and camera techniques',
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  const revealImage = {
    initial: { opacity: 0, clipPath: 'inset(0 15% 0 0)' },
    whileInView: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
    transition: { duration: 1.2, ease },
    viewport: { once: true, amount: 0.3 },
  };

  const revealText = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-header">
        <motion.span 
          className="services-eyebrow"
          {...revealText(0)}
          transition={reduceMotion ? undefined : { duration: 0.8, ease }}
        >
          What We Do
        </motion.span>
        <motion.h2 
          className="services-title" 
          id="services-heading"
          {...revealText(0.1)}
          transition={reduceMotion ? undefined : { duration: 0.8, delay: 0.1, ease }}
        >
          Our Services
        </motion.h2>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={service.title}>
            <div className="service-image-wrapper">
              <motion.div 
                className="service-image-container"
                {...(reduceMotion ? {} : revealImage)}
                initial={reduceMotion ? false : { opacity: 0, clipPath: index % 2 === 0 ? 'inset(0 0 0 15%)' : 'inset(0 15% 0 0)' }}
              >
                <img src={service.image} alt={service.alt} className="service-image" loading="lazy" />
              </motion.div>
            </div>
            
            <div className="service-content">
              <motion.h3 
                className="service-name"
                {...(reduceMotion ? {} : revealText(0.15))}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="service-desc"
                {...(reduceMotion ? {} : revealText(0.25))}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
