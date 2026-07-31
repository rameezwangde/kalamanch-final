import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import VideoTrailers from './pages/VideoTrailers';
import SiteFooter from './components/SiteFooter/SiteFooter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video-trailers" element={<VideoTrailers />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}




