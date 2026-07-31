import { motion, useReducedMotion } from 'framer-motion';
import './SiteFooter.css';

const ease = [0.22, 1, 0.36, 1];
const groups = [
  { title: 'Experiences', links: [{ label: 'Chalta Purja', href: '#event-tab-chalta-purja' }, { label: 'Ghera', href: '#event-tab-ghera' }, { label: 'Kya Yehi Sabhyata', href: '#event-tab-kya-yehi-sabhyata' }] },
  { title: 'Kalamanch', links: [{ label: 'Our Promise', href: '#promise-heading' }, { label: 'Our Team', href: '#team-story-title' }, { label: 'Our Moments', href: '#moments-collage-title' }] },
];

export default function SiteFooter() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay, y = 22) => reduceMotion ? {} : {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, delay, ease },
  };

  return (
    <footer className="site-footer" id="enquire">
      <div className="site-footer__inner">
        <motion.a className="site-footer__wordmark" href="/" aria-label="Kalamanch home" {...reveal(0.05, 18)}>
          <img src="/kalamanch-logo.jpg" alt="Kalamanch Theatre Production Company Logo" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
        </motion.a>

        <motion.div className="site-footer__trust" aria-label="Kalamanch values" {...reveal(0.15, 16)}>
          <span>School Events</span>
          <span>Creative Production</span>
          <span>Student-Centred Experiences</span>
        </motion.div>

        <motion.div className="site-footer__navigation" {...reveal(0.25, 24)}>
          {groups.map((group) => (
            <nav className="site-footer__group" aria-label={group.title} key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
              </ul>
            </nav>
          ))}

          <div className="site-footer__group site-footer__contact-group">
            <h2>Useful Information</h2>
            <div className="site-footer__contact-item">
              <strong>Location</strong>
              <p>Kalamanch<br/>B-6/235, Ist Floor, Rohini Sector 3 Delhi 110085</p>
            </div>
            <div className="site-footer__contact-item">
              <strong>Telephone</strong>
              <p>+91-9911089917, +91-9769402412</p>
            </div>
            <div className="site-footer__contact-item">
              <strong>Mail Us</strong>
              <p><a href="mailto:info@kalamanch.co.in">info@kalamanch.co.in</a></p>
            </div>
            <div className="site-footer__contact-item">
              <strong>Website</strong>
              <p><a href="http://www.kalamanch.co.in" target="_blank" rel="noreferrer">www.kalamanch.co.in</a></p>
            </div>
          </div>

          <div className="site-footer__group site-footer__social-group">
            <h2>Connect</h2>
            <p>Follow the moments that make every celebration memorable.</p>
            <div className="site-footer__socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Kalamanch on Facebook"><FacebookIcon /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Kalamanch on Instagram"><InstagramIcon /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Kalamanch on YouTube"><YoutubeIcon /></a>
            </div>
          </div>
        </motion.div>

        <motion.div className="site-footer__bottom" {...reveal(0.35, 14)}>
          <p>© 2026 Kalamanch. All Rights Reserved.</p>
          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.3V6.5c0-.8.5-1 1-1h2.5V2.2L14.8 2c-3.1 0-4.7 1.8-4.7 5v1.3H7v4h3.1V22h4.1v-9.7h3.1l.5-4h-3.6Z" fill="currentColor" stroke="none" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></svg>;
}

function YoutubeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.3 4.7 12 4.7 12 4.7s-5.3 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.7.5 7 .5 7 .5s5.3 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="m10 15.3 5-3.3-5-3.3v6.6Z" fill="currentColor" stroke="none" /></svg>;
}

