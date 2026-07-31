import { useEffect } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import ServicesSection from '../components/ServicesSection/ServicesSection';

export default function Services() {
  useEffect(() => {
    // Ensure we start at the top of the page when navigating here
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page" style={{ background: '#fff' }}>
      <PageHeader />
      <div style={{ paddingTop: '100px' }}>
        <ServicesSection />
      </div>
    </main>
  );
}
