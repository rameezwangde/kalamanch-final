import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './EventCollection.css';

const ease = [0.22, 1, 0.36, 1];
const events = [
  { id: 'annual-functions', label: 'Annual Functions', title: 'Annual Functions', image: 'https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521728/DSC_0278_fx912k.jpg', alt: 'Students performing on a professionally lit stage during a school annual day', link: 'https://youtu.be/o38HCbjMe2g?si=7jWczrLaP9391XRs' },
  { id: 'professional-shows', label: 'Professional Shows', title: 'Professional Shows', image: 'https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521950/14481926_10154705811154155_7749548386138963213_o_zifmoc.jpg', alt: 'Students performing a colourful cultural dance during a school festival', link: 'https://youtu.be/8kpE_Ml6Cd8?si=r3LwhNwwT7Bbu-K6' },
  { id: 'makings', label: 'Makings', title: 'Makings', image: 'https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521769/DSC_0021_cyzna8.jpg', alt: 'Students participating in an energetic outdoor school sports event', link: 'https://youtu.be/asnBD7xijew?si=dc4fknt_Xku9sXEQ' },
  { id: 'theatre-workshops', label: 'Theatre Workshops', title: 'Theatre Workshops', image: 'https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521820/DSC_0236_g3efgo.jpg', alt: 'A young student performing during a school talent show', link: 'https://youtu.be/-_UbUcgIiDA?si=wEIZPQGo1sadQ9Dp' },
  { id: 'teacher-masterclass', label: 'Teacher Masterclass', title: 'Teacher Masterclass', image: 'https://res.cloudinary.com/crw5jo8x/image/upload/f_auto,q_auto/v1785521382/DPS_EXP_2_pjpvm1.jpg', alt: 'Students gathered in graduation attire during a school ceremony', link: 'https://youtu.be/DnmEohT1zDo?si=OUp-0Xogw-M81onA' },
];
const tabOrder = events;

export default function EventCollection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef({});
  const reduceMotion = useReducedMotion();
  const activeEvent = events[activeIndex];
  const visibleEvents = [
    events[activeIndex],
    events[(activeIndex + 1) % events.length],
    events[(activeIndex + 2) % events.length]
  ];
  const reveal = (delay, y) => reduceMotion ? {} : {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.9, delay, ease },
  };
  const selectEvent = (eventId) => {
    const nextIndex = events.findIndex((event) => event.id === eventId);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
  };
  const handleTabKeyDown = (keyboardEvent, tabIndex) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(keyboardEvent.key)) return;
    keyboardEvent.preventDefault();
    let nextTabIndex = tabIndex;
    if (keyboardEvent.key === 'ArrowRight') nextTabIndex = (tabIndex + 1) % tabOrder.length;
    if (keyboardEvent.key === 'ArrowLeft') nextTabIndex = (tabIndex - 1 + tabOrder.length) % tabOrder.length;
    if (keyboardEvent.key === 'Home') nextTabIndex = 0;
    if (keyboardEvent.key === 'End') nextTabIndex = tabOrder.length - 1;
    const nextEvent = tabOrder[nextTabIndex];
    selectEvent(nextEvent.id);
    document.getElementById(`event-tab-${nextEvent.id}`)?.focus();
  };

  useEffect(() => {
    if (!window.matchMedia('(max-width: 767px)').matches) return;
    cardRefs.current[activeEvent.id]?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  }, [activeEvent.id, reduceMotion]);

  const tabsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeft(tabsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="event-collection" aria-labelledby="event-collection-title">
      <div className="event-collection__intro">
        <motion.p className="event-collection__eyebrow" {...reveal(0.05, 14)}>Discover the</motion.p>
        <motion.h2 className="event-collection__title" id="event-collection-title" {...reveal(0.15, 24)}>Kalamanch Experience</motion.h2>
        <motion.div
          className="event-collection__tabs"
          role="tablist"
          aria-label="School event categories"
          {...reveal(0.3, 18)}
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {tabOrder.map((event, tabIndex) => {
            const isActive = event.id === activeEvent.id;
            return (
              <button
                className={`event-tab${isActive ? ' event-tab--active' : ''}`}
                id={`event-tab-${event.id}`}
                key={event.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectEvent(event.id)}
                onKeyDown={(keyboardEvent) => handleTabKeyDown(keyboardEvent, tabIndex)}
                style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
              >
                <span className="event-tab__line" aria-hidden="true" />{event.label}
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div className="event-collection__gallery-desktop" {...reveal(0.42, 36)}>
        <AnimatePresence initial={false} mode="popLayout">
          {tabOrder.map((event) => (
            <EventCard 
              event={event} 
              isActive={event.id === activeEvent.id} 
              key={event.id} 
              onSelect={selectEvent} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div className="event-collection__gallery-mobile" {...reveal(0.42, 36)}>
        {tabOrder.map((event) => <EventCard event={event} isActive={event.id === activeEvent.id} key={event.id} onSelect={selectEvent} cardRef={(node) => { cardRefs.current[event.id] = node; }} />)}
      </motion.div>
    </section>
  );
}

function EventCard({ event, isActive, onSelect, cardRef }) {
  const handleSelect = () => {
    if (event.link) {
      window.open(event.link, '_blank', 'noopener,noreferrer');
    } else {
      onSelect(event.id);
    }
  };

  const handleKeyDown = (keyboardEvent) => {
    if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
      keyboardEvent.preventDefault();
      handleSelect();
    }
  };

  return (
    <motion.article 
      ref={cardRef} 
      className={`event-card${isActive ? ' event-card--active' : ''}`} 
      aria-label={`${event.title}. Discover this event category.`} 
      role="button" 
      tabIndex={0} 
      layout 
      initial={{ opacity: 0, x: 24 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -24 }} 
      transition={{ duration: 0.65, ease }} 
      onClick={handleSelect} 
      onKeyDown={handleKeyDown}
    >
      <div className="event-card__image-wrapper">
        <img className="event-card__image" src={event.image} alt={event.alt} loading="lazy" />
        <span className="event-card__overlay" aria-hidden="true" />
      </div>
      <div className="event-card__content">
        <h3>{event.title}</h3>
        <span className="event-card__cta">Discover<span aria-hidden="true" /></span>
      </div>
    </motion.article>
  );
}
