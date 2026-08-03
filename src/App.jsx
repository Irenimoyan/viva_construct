import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { BackToTop } from './components/common/BackToTop';
import { Loader } from './components/common/Loader';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Team } from './pages/Team';
import { Testimonials } from './pages/Testimonials';
import { Process } from './pages/Process';
import { Certifications } from './pages/Certifications';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/process" element={<Process />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
