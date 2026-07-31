import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ServicesSection.css';

const services = [
  {
    title: 'Annual Functions',
    description: 'We specialize in conceptualizing and executing spectacular school annual functions tailored to your unique themes. From immersive set design and professional stage lighting to custom costume designing and expert choreography, our team brings your vision to life, ensuring a flawless and memorable celebration.',
    image: '/images/events/annual-day.jpg',
    alt: 'Students performing on stage during an annual day function',
  },
  {
    title: 'Theatre Workshop',
    description: 'Our comprehensive theatre workshops for students focus on building confidence and overcoming stage fright. We provide professional training in drama, dance ballet, body movement, and diction to develop well-rounded personalities and introduce students to the nuanced art of perceiving.',
    image: '/images/events/talent-show.jpg',
    alt: 'Students participating in a theatre workshop',
  },
  {
    title: 'Comedy & All Types of Plays',
    description: 'Experience high-quality professional play production across all genres. Whether it is a witty satire, musical comedy, gripping tragedy, or adaptations of eminent writers like Shakespeare and Anton Chekhov, we script, direct, and dramatize compelling theatrical performances.',
    image: '/images/events/cultural-festival.jpg',
    alt: 'Actors performing a play during a cultural festival',
  },
  {
    title: 'Fest & Shows',
    description: 'Elevate your school or college celebrations with our cultural fest organization services. We curate unforgettable events for occasions like Diwali, Republic Day, and Women’s Day. From thematic exhibitions to professional dance troupes performing Garba and Folk Dances, we make every moment spectacular.',
    image: '/images/moments/school-celebration.jpg',
    alt: 'School students celebrating a festive cultural event',
  },
  {
    title: 'Performance Arts',
    description: 'Our performance arts education programs teach students the anatomy of a final stage production. We cover the essentials of script writing, stage lighting, professional make-up, character designing, voice modulation, and creative improvisations.',
    image: '/images/moments/student-performer.jpg',
    alt: 'Student learning performance arts techniques',
  },
  {
    title: 'Media & Art',
    description: 'Step behind the lens with our media and camera training courses. Students learn the intricacies of DSLR and reflex cameras, lens selection, and professional movie-making. We guide them through shooting documentary films, pre-production planning, and post-production editing techniques.',
    image: '/images/events/graduation.jpg',
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
            <motion.div 
              className="service-image-container"
              {...(reduceMotion ? {} : revealImage)}
              initial={reduceMotion ? false : { opacity: 0, clipPath: index % 2 === 0 ? 'inset(0 0 0 15%)' : 'inset(0 15% 0 0)' }}
            >
              <img src={service.image} alt={service.alt} className="service-image" loading="lazy" />
            </motion.div>
            
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
