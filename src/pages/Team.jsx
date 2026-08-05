import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader/PageHeader';
import './Team.css';

const teamMembers = [
  {
    name: "Raghvendra Bhattacharya (Senior Sound Manager)",
    description: "Raghvendra Bhattacharya is a classically trained Musician and Sound Engineer. He has more than 28 years of experience working with Theatre, Voice-Overs, Dialogue Dubbing, Musicians and Background Scores. He is well-versed in both Live Stage Performances and Studio Audio Productions. Raghvendra is working with 'Kalamanch' last 10 years in all the productions as Sound Engineer."
  },
  {
    name: "Sandy (Choreographer)",
    description: "Sandeep Singh Sajwan is a professionally trained choreographer, educated at the Natya Ballet Centre, Mandi House, New Delhi. He has received training in classical and contemporary dance forms, with specialization in Chhau and Contemporary dance. He has been associated with an event management company, Kalamanch for last 12 years as a Senior Choreographer and a Team Leader. Over the years, he has worked with some of the India's most prestigious institutions, including Welham Boys' School, Dehradun, and Rashtriya Military School, Dholpur, among others."
  },
  {
    name: "Ms Kavitha P (Creative Head)",
    description: "Ms Kavitha P is a professional academician also an expert in dramatics. She visualizes the unified action and each play is designed keeping in mind specified demands of the play and uses her creative license to figure out how the scripts should translate to the stage, which involves all the aspects ranging from portrayal of characters, scenes to staging , lighting , sound and music"
  },
  {
    name: "Arvind Sharma (Assistant Director)",
    description: "Arvind Sharma is a dynamic young talent who is consistently working with KalaManch for over 5 years. He is a trained actor from S.R.C(Shri ram center)Mandi house who has shown commendable works in the field of Indian Theatre direction and Acting. He is professionally trained in Chao Dance ( Mayur Bhanj).\nHe is working as an Assistant Director Along with some of the eminent directors like Sameep Singh, Niloy Roy, Ks Rajendran, Robin Das, Sawroopa Ghosh and also associated with some of the prestigious institutions namely MPSD (Madhya Pradesh School of Drama) and NSD(National School of Drama)."
  }
];

export default function Team() {
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    document.title = "Our Team | KalaManch Event Experiences";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet the creative minds and expert event managers behind KalaManch. Our team is dedicated to producing high-quality theatrical events and cultural fests.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet the creative minds and expert event managers behind KalaManch. Our team is dedicated to producing high-quality theatrical events and cultural fests.";
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
  }, []);

  const revealText = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingBottom: '0' }}>
      <PageHeader />
      
      <div style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.h1 
          style={{ fontFamily: "'Bon Vivant', 'Allura', cursive", fontSize: 'clamp(70px, 9vw, 110px)', fontWeight: 400, color: '#34302f', margin: '0 0 30px 0', fontStyle: 'normal', letterSpacing: '-0.02em' }}
          {...(reduceMotion ? {} : revealText)}
        >
          Our Team
        </motion.h1>
      </div>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 40px 24px' }}>
        <motion.div
           style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(15px, 1.2vw, 18px)', color: '#5d5856', lineHeight: 1.85, letterSpacing: '0.04em' }}
           initial={reduceMotion ? false : { opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true, amount: 0.1 }}
        >
          <p style={{ marginBottom: '24px' }}>
            The KalaManch team is a collective of passionate artists, seasoned directors, and expert event managers who share a singular vision: to create magical, unforgettable experiences. Led by our visionary founder, Mayank Jain, our team brings decades of professional theatrical experience to every project.
          </p>
          <p style={{ marginBottom: '24px' }}>
            From creative scriptwriters and talented choreographers to technical directors and stage designers, each member of our crew plays a vital role in bringing stories to life. We pride ourselves on our collaborative spirit and our ability to seamlessly blend different artistic disciplines.
          </p>
          <p>
            Whether we are teaching workshops to aspiring young actors or orchestrating a massive college festival, our team's dedication and professionalism shine through. Get to know the people who make the magic happen and trust us to bring your next big event to life.
          </p>
        </motion.div>
      </section>

      <section className="team-core-section">
        <div className="team-core-inner">
          <motion.h2 
            className="team-core-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Core Team
          </motion.h2>

          <div className="team-core-list">
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-member-card" 
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="team-member-content">
                  <p className="team-member-desc">
                    {/* We make the first name bold since the user's screenshot has it bold */}
                    <strong>{member.description.split(' ')[0]} {member.description.split(' ')[1]} {member.description.split(' ')[2]?.includes('is') ? '' : member.description.split(' ')[2]}</strong> 
                    {member.description.substring(member.description.indexOf(' is ') === -1 ? member.description.indexOf(' ') : member.description.indexOf(' is '))}
                  </p>
                  <p className="team-member-name">{member.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
