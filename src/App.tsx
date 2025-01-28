import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './pages/Portfolio';
import SubmitCV from './pages/SubmitCV';
import About from './pages/About';
import Media from './pages/Media';
import Vacancies from './pages/Vacancies';
import { Toaster } from './components/ui/toaster';
import Chatbot from './components/Chatbot';
import { useEffect, useState } from 'react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div 
          className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-50"
        >
          <div 
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/submit-cv" element={<SubmitCV />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
        <Toaster />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;