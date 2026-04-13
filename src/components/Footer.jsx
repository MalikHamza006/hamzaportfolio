import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaEnvelope, url: "mailto:hamza.malik@example.com", label: "Email", color: "hover:text-red-400" },
    { icon: FaWhatsapp, url: "https://wa.me/923160442304", label: "WhatsApp", color: "hover:text-green-400" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/hamzamalik", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaGithub, url: "https://github.com/hamzamalik", label: "GitHub", color: "hover:text-gray-400" },
    { icon: FaTwitter, url: "https://twitter.com/hamza_dev", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: FaDiscord, url: "https://discord.gg/hamzamalik", label: "Discord", color: "hover:text-indigo-400" }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-['Syne'] text-2xl font-extrabold mb-4">
              Hamza Malik<span className="text-cyan-500">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies. 
              Let's create something amazing together! 🚀
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 hamza.malik@example.com</li>
              <li>📱 +92 316 0442304</li>
              <li>⏰ Available 24/7</li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              onClick={() => handleSocialClick(social.url)}
              className={`group w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/10 hover:scale-110`}
              aria-label={social.label}
            >
              <social.icon className="text-xl" />
            </button>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500">
            © 2026 Hamza Malik — Full-Stack Developer & Mentor
          </div>
          <div className="flex gap-6">
            <span className="text-cyan-400 font-semibold animate-pulse">
              ✨ Available for hire
            </span>
            <span className="text-gray-500">
              v2.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}