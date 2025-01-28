import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './pages/Portfolio';
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
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;