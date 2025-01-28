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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;