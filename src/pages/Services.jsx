const services = [
  { num: '01', icon: '⚡', title: 'Landing Pages & Portfolios', desc: 'Blazing-fast, conversion-optimized pages with pixel-perfect design. Responsive across every device.' },
  { num: '02', icon: '🏗️', title: 'Full-Stack Web Apps', desc: 'Complete systems from database to dashboard — gym management, e-commerce, SaaS platforms, booking systems.' },
  { num: '03', icon: '🔌', title: 'API Development & Integration', desc: 'Secure, scalable REST APIs. Third-party integrations — payment gateways, auth systems, data pipelines.' },
  { num: '04', icon: '🎨', title: 'UI/UX Design to Code', desc: 'Got a Figma mockup? I translate designs to pixel-perfect, animated, accessible code.' },
  { num: '05', icon: '🚀', title: 'Performance Optimization', desc: 'I diagnose and fix slow web apps. Faster load times, better Core Web Vitals.' },
  { num: '06', icon: '📚', title: '1-on-1 Mentorship', desc: 'Personalized guidance for junior devs. Code reviews, career coaching, live pair programming.' }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Simple Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0e27] to-[#0f172a]"></div>
      
      {/* Simple Glass Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-px bg-cyan-400"></span>
            What I Offer
            <span className="w-8 h-px bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            End-to-End <br />Web <span className="text-cyan-400">Creation.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/30 hover:transform hover:-translate-y-2"
            >
              {/* Service Number */}
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5 mb-4 font-mono">
                {service.num}
              </div>
              
              {/* Service Icon */}
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              
              {/* Arrow Icon */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:border-transparent group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                →
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/60 mb-4">Need a custom solution?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Discuss Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
        
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}