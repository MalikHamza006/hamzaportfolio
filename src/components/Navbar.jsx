import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

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
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="nav-logo cursor-pointer" onClick={() => scrollTo('home')}>
          HM<span className="text-[#06b6d4]">.</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          {['home', 'skills', 'services', 'projects', 'mentorship', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-white/60 text-sm font-medium uppercase tracking-wider hover:text-cyan-400 transition-all duration-300"
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
            className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-cyan-400 text-lg" />
            )}
          </button>
          
          {/* Hire Me Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary hidden md:block"
          >
            Hire Me →
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl glass w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass mt-2 p-4 rounded-2xl animate__animated animate__fadeInDown">
          {['home', 'skills', 'services', 'projects', 'mentorship', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-white/80 hover:text-cyan-400 transition-colors"
            >
              {item.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary w-full mt-3"
          >
            Hire Me →
          </button>
        </div>
      )}
    </nav>
  );
}