import Hero from '../components/Hero/Hero';
import PromiseSection from '../components/PromiseSection/PromiseSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import EventCollection from '../components/EventCollection/EventCollection';
import MomentsCollage from '../components/MomentsCollage/MomentsCollage';

export default function Home() {
  return (
    <main>
      <Hero />
      <PromiseSection />
      <EventCollection />
      <MomentsCollage />
      <ServicesSection />
      <QuoteSection />
    </main>
  );
}
