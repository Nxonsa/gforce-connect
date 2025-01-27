import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-light/80 backdrop-blur-lg shadow-lg' : 'bg-light'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a1686a99-749a-46ea-8ee9-a0c44ec4ba78.png" 
              alt="G-Force Logo" 
              className="h-12"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/" onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/media">In-Media</NavLink>
            <NavLink to="/cv">Submit CV</NavLink>
            <NavLink to="/vacancies">Vacancies</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

export default Navbar;