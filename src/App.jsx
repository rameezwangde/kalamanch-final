import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SiteFooter from './components/SiteFooter/SiteFooter';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const VideoTrailers = lazy(() => import('./pages/VideoTrailers'));
const ProfessionalWork = lazy(() => import('./pages/ProfessionalWork'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const PromisePage = lazy(() => import('./pages/Promise'));
const Team = lazy(() => import('./pages/Team'));
const Moments = lazy(() => import('./pages/Moments'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ height: '100vh', display: 'grid', placeItems: 'center', background: '#3b2823', color: '#fff' }}>Loading Kalamanch...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video-trailers" element={<VideoTrailers />} />
          <Route path="/professional-work" element={<ProfessionalWork />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/promise" element={<PromisePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <SiteFooter />
    </BrowserRouter>
  );
}




