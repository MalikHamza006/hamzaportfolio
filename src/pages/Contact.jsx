import { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', budget: '', message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending your message...' });
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: `✓ Message received, ${formData.name}! I'll get back to you within 24 hours.` 
      });
      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+92 316 0442304', color: '#25D366', link: 'https://wa.me/923160442304' },
    { icon: FaEnvelope, label: 'Email', value: 'hama.yousuf@example.com', color: '#c8ff00', link: 'mailto:hama.yousuf@example.com' },
    { icon: FaPhoneAlt, label: 'Phone', value: '+92 316 0442304', color: '#c8ff00', link: 'tel:+923160442304' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Pakistan — Available Worldwide', color: '#c8ff00', link: null },
    { icon: FaClock, label: 'Response Time', value: 'Within 24 hours', color: '#c8ff00', link: null }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-4">
            <span className="w-8 h-px bg-[#c8ff00]"></span>
            Get In Touch
            <span className="w-8 h-px bg-[#c8ff00]"></span>
          </div>
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-extrabold">
            Let's Work <span className="text-[#c8ff00]">Together</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            Have a project in mind? I'm just one message away. Let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c8ff00]/10 transition-colors">
                      <item.icon size={20} className="text-[#c8ff00]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-white hover:text-[#c8ff00] transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-[#c8ff00]/10 to-[#ff4d6d]/10 border border-[#c8ff00]/20 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">Available for immediate hire</span>
              </div>
              <p className="text-white/60 text-sm">Response within 24 hours. Let's discuss your project!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white/40 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#c8ff00]/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-white/40 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#c8ff00]/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white/40 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#c8ff00]/50 focus:outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option>Landing Page / Portfolio</option>
                    <option>Full-Stack Web App</option>
                    <option>API Development</option>
                    <option>UI/UX to Code</option>
                    <option>Performance Optimization</option>
                    <option>1-on-1 Mentorship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-white/40 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#c8ff00]/50 focus:outline-none"
                  >
                    <option value="">Select range...</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                    <option>Mentorship / Hourly</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white/40 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#c8ff00]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c8ff00] text-black py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
              
              {status.message && (
                <div className={`p-4 rounded-lg text-sm ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-[#c8ff00]/10 text-[#c8ff00]'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}