import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './EventCollection.css';

const ease = [0.22, 1, 0.36, 1];
const events = [
  { id: 'annual-days', label: 'Annual Days', title: 'Annual Days', image: '/images/events/annual-day.jpg', alt: 'Students performing on a professionally lit stage during a school annual day' },
  { id: 'sports-events', label: 'Sports Events', title: 'Sports Events', image: '/images/events/sports-event.jpg', alt: 'Students participating in an energetic outdoor school sports event' },
  { id: 'talent-shows', label: 'Talent Shows', title: 'Talent Shows', image: '/images/events/talent-show.jpg', alt: 'A young student performing during a school talent show' },
  { id: 'graduation', label: 'Graduation Ceremonies', title: 'Graduation Ceremonies', image: '/images/events/graduation.jpg', alt: 'Students gathered in graduation attire during a school ceremony' },
  { id: 'cultural-festivals', label: 'Cultural Festivals', title: 'Cultural Festivals', image: '/images/events/cultural-festival.jpg', alt: 'Students performing a colourful cultural dance during a school festival' },
];
const tabOrder = [events[0], events[4], events[1], events[2], events[3]];

export default function EventCollection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef({});
  const reduceMotion = useReducedMotion();
  const activeEvent = events[activeIndex];
  const visibleEvents = [events[(activeIndex - 1 + events.length) % events.length], activeEvent, events[(activeIndex + 1) % events.length]];
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

  return (
    <section className="event-collection" aria-labelledby="event-collection-title">
      <div className="event-collection__intro">
        <motion.p className="event-collection__eyebrow" {...reveal(0.05, 14)}>Discover the</motion.p>
        <motion.h2 className="event-collection__title" id="event-collection-title" {...reveal(0.15, 24)}>Kalamanch Experience</motion.h2>
        <motion.div className="event-collection__tabs" role="tablist" aria-label="School event categories" {...reveal(0.3, 18)}>
          {tabOrder.map((event, tabIndex) => {
            const isActive = event.id === activeEvent.id;
            return (
              <button className={`event-tab${isActive ? ' event-tab--active' : ''}`} id={`event-tab-${event.id}`} key={event.id} type="button" role="tab" aria-selected={isActive} tabIndex={isActive ? 0 : -1} onClick={() => selectEvent(event.id)} onKeyDown={(keyboardEvent) => handleTabKeyDown(keyboardEvent, tabIndex)}>
                <span className="event-tab__line" aria-hidden="true" />{event.label}
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div className="event-collection__gallery-desktop" {...reveal(0.42, 36)}>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleEvents.map((event, index) => <EventCard event={event} isActive={index === 1} key={`${event.id}-${index}`} onSelect={selectEvent} />)}
        </AnimatePresence>
      </motion.div>

      <motion.div className="event-collection__gallery-mobile" {...reveal(0.42, 36)}>
        {tabOrder.map((event) => <EventCard event={event} isActive={event.id === activeEvent.id} key={event.id} onSelect={selectEvent} cardRef={(node) => { cardRefs.current[event.id] = node; }} />)}
      </motion.div>
    </section>
  );
}

function EventCard({ event, isActive, onSelect, cardRef }) {
  return (
    <motion.article ref={cardRef} className={`event-card${isActive ? ' event-card--active' : ''}`} aria-label={`${event.title}. Discover this event category.`} role="button" tabIndex={0} layout initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.65, ease }} onClick={() => onSelect(event.id)} onKeyDown={(keyboardEvent) => { if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') { keyboardEvent.preventDefault(); onSelect(event.id); } }}>
      <img className="event-card__image" src={event.image} alt={event.alt} loading="lazy" />
      <span className="event-card__overlay" aria-hidden="true" />
      <div className="event-card__content">
        <h3>{event.title}</h3>
        <span className="event-card__cta">Discover<span aria-hidden="true" /></span>
      </div>
    </motion.article>
  );
}
