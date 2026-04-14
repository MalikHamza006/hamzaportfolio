import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      // Default to dark mode
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light mode
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      // Switch to dark mode
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollTo = (id) => {
    if (id === 'home') {
      // Scroll to top of page for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="nav-logo cursor-pointer text-2xl font-bold" onClick={() => scrollTo('home')}>
          HM<span className="text-cyan-500">.</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          {['home', 'skills', 'services', 'projects', 'mentorship', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-white/70 hover:text-cyan-400 text-sm font-medium uppercase tracking-wider transition-all duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-4 items-center">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-cyan-400 text-lg" />
            )}
          </button>
          
          {/* Hire Me Button - Added 5px left and right padding */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-[5px] py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Hire Me →
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slideDown">
          <div className="container mx-auto px-6 py-4">
            {['home', 'skills', 'services', 'projects', 'mentorship', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-3 text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full mt-4 px-[5px] py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold"
            >
              Hire Me →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}