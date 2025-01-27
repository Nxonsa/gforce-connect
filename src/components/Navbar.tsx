import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-lg' : 'bg-secondary'
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
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/" onClick={() => scrollToSection('services')}>Services</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
              <NavLink to="/media" onClick={() => setIsOpen(false)}>In-Media</NavLink>
              <NavLink to="/cv" onClick={() => setIsOpen(false)}>Submit CV</NavLink>
              <NavLink to="/vacancies" onClick={() => setIsOpen(false)}>Vacancies</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-light transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

export default Navbar;