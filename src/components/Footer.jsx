import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const socialLinks = [
    { icon: FaEnvelope, url: "mailto:hamzamalik789890@gmail.com", label: "Email", color: "hover:text-red-400", bg: "hover:bg-red-400/10" },
    { icon: FaWhatsapp, url: "https://wa.me/923160442304", label: "WhatsApp", color: "hover:text-green-400", bg: "hover:bg-green-400/10" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/muhammad-hamza-yousuf/", label: "LinkedIn", color: "hover:text-blue-400", bg: "hover:bg-blue-400/10" },
    { icon: FaGithub, url: "https://github.com/hamzamalik", label: "GitHub", color: "hover:text-gray-400", bg: "hover:bg-gray-400/10" },
    { icon: FaTwitter, url: "", label: "Twitter", color: "hover:text-cyan-400", bg: "hover:bg-cyan-400/10" },
    { icon: FaDiscord, url: "", label: "Discord", color: "hover:text-indigo-400", bg: "hover:bg-indigo-400/10" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Mentorship", href: "#mentorship" },
    { name: "Contact", href: "#contact" }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Hamza Malik
              </span>
              <span className="text-cyan-600 dark:text-cyan-400">.</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies. 
              Let's create something amazing together! 🚀
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Available for work</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 text-sm flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white relative inline-block">
              Contact Info
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group">
                <span className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">📧</span>
                <a href="mailto:hamza.malik@example.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  hamza.malik@example.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group">
                <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">📱</span>
                <a href="tel:+923160442304" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  +92 316 0442304
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-blue-600 dark:text-blue-400">⏰</span>
                <span>Available 24/7</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-purple-600 dark:text-purple-400">📍</span>
                <span>Remote / Worldwide</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white relative inline-block">
              Stay Updated
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get updates about new projects and opportunities
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Links - Enhanced */}
        <div className="flex flex-wrap justify-center gap-6 my-8 pt-8 border-t border-gray-200 dark:border-white/10">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              onClick={() => handleSocialClick(social.url)}
              className={`group relative w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${social.color} ${social.bg} hover:scale-110 hover:shadow-lg`}
              aria-label={social.label}
            >
              <social.icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-900 dark:text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.label}
              </span>
            </button>
          ))}
        </div>
        
        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-600 dark:text-gray-500 text-center md:text-left">
            © 2026 Hamza Malik — Full-Stack Developer & Mentor
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold animate-pulse flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              ✨ Available for hire
            </span>
            <span className="text-gray-500 text-xs">
              v2.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}