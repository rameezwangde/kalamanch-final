import { motion, useReducedMotion } from 'framer-motion';
import './ContactForm.css';

export default function ContactForm() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="contact-form-section">
      <motion.div className="contact-form-header" {...(reduceMotion ? {} : reveal)}>
        <h2 className="contact-form-title">Send Message</h2>
        <div className="contact-form-subtitle">Keep in Touch</div>
      </motion.div>

      <motion.form 
        className="contact-form" 
        onSubmit={(e) => e.preventDefault()}
        {...(reduceMotion ? {} : reveal)}
      >
        <div className="contact-form-row">
          <div className="contact-input-group">
            <input type="text" className="contact-input" placeholder="NAME *" required />
          </div>
          <div className="contact-input-group">
            <input type="email" className="contact-input" placeholder="E-MAIL *" required />
          </div>
          <div className="contact-input-group">
            <input type="tel" className="contact-input" placeholder="PHONE" />
          </div>
        </div>
        
        <div className="contact-input-group">
          <textarea className="contact-textarea" placeholder="MESSAGE *" required></textarea>
        </div>
        
        <button type="submit" className="contact-submit-btn">Send</button>
      </motion.form>

      <motion.div className="contact-privacy" {...(reduceMotion ? {} : reveal)}>
        <h3>Privacy Policy</h3>
        <p>
          Our Website gives you an option of giving us contact information (like name, e-mail id and telephone number) for the purposes of gathering information on people interested in the business of Kalamanch. Any communication between you and the website, along with queries and posts on our website are also included in this. Certain information, such as your name, e-mail addresses, is collected in order to, among other things; verify your identity and to provide information for the leads generated.
        </p>
        <p>
          To the extent possible, we provide you the option of not divulging any specific information that you wish for us not to collect, store or use. You may also choose not to use a particular service or feature on the Site, and opt out of any non-essential communications from the Kalamanch. Further, transacting over the internet has inherent risks which can only be avoided by following security practices such as ensuring that Your e-mail address and profile information is confidential. Any information sent to Us by Your e-mail address which has not been sent by You should be notified to our customer care team at the earliest.
        </p>
      </motion.div>
    </section>
  );
}
