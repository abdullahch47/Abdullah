import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onHireMeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-bold text-slate-100 flex items-center gap-1 cursor-pointer"
        >
          Abdullah<span className="text-red-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-slate-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onHireMeClick}
            className="px-5 py-2 rounded-full bg-slate-800 text-white text-sm font-medium border border-slate-700 hover:border-red-500 hover:text-red-400 transition-all cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200 hover:text-red-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden flex flex-col p-6 shadow-2xl">
           {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`}
              className="py-3 text-slate-300 hover:text-red-400 transition-colors border-b border-slate-800 last:border-0 cursor-pointer"
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              onHireMeClick();
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 w-full py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;