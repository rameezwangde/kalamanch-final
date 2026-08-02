import { motion, useReducedMotion } from 'framer-motion';
import './SiteFooter.css';

const ease = [0.22, 1, 0.36, 1];
const groups = [
  { title: 'Experiences', links: [
    { label: 'Annual Functions', href: '/gallery?album=annual-functions' },
    { label: 'Professional Shows', href: '/gallery?album=professional-shows' },
    { label: 'Makings', href: '/gallery?album=makings' },
    { label: 'Theatre Workshops', href: '/gallery?album=theatre-workshops' },
    { label: 'Teacher Masterclass', href: '/gallery?album=teacher-masterclass' }
  ] },
  { title: 'Kalamanch', links: [{ label: 'Our Promise', href: '/promise' }, { label: 'Our Team', href: '/team' }, { label: 'Our Moments', href: '/moments' }] },
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
          <img src="/kalamanch-logo.jpg" alt="Kalamanch Theatre Production Company Logo" style={{ width: '140px', height: '140px', objectFit: 'contain', borderRadius: '50%' }} />
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
              <p><a href="mailto:kalamanch.co.in@gmail.com">kalamanch.co.in@gmail.com</a></p>
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
              <a href="https://www.facebook.com/mayank.jain.007" target="_blank" rel="noreferrer" aria-label="Kalamanch on Facebook"><FacebookIcon /></a>
              <a href="https://www.instagram.com/kalamanchevents/" target="_blank" rel="noreferrer" aria-label="Kalamanch on Instagram"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/in/mayank-jain-kalamanch-founder/" target="_blank" rel="noreferrer" aria-label="Kalamanch on LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.youtube.com/@MayankJainKalaManch" target="_blank" rel="noreferrer" aria-label="Kalamanch on YouTube"><YoutubeIcon /></a>
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

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" stroke="none" /></svg>;
}

