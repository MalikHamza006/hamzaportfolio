import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Mentorship from './pages/Mentorship';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Parallax effect on scroll
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const background = document.querySelector('body');
      if (background) {
        background.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
    
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Services />
        <Projects />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}