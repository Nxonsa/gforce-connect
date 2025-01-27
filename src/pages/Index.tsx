import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => {
  useEffect(() => {
    console.log('Index page mounted');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;