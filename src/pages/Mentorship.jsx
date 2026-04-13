export default function Mentorship() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="mentorship" className="relative py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Simple Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0e27] to-[#0f172a]"></div>
      
      {/* Simple Glass Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-5">
              <span className="w-8 h-px bg-cyan-400"></span>
              Grow With Me
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Mentorship That <br />Gets You <span className="text-cyan-400">Hired.</span>
            </h2>

            <div className="mt-10 space-y-6">
              {[
                { icon: '🗺️', title: 'Structured Learning Path', desc: 'No more YouTube rabbit holes. I build a custom roadmap based on your goals and current level — and hold you accountable.' },
                { icon: '💻', title: 'Live Code Reviews', desc: 'We review your code together in real time. You learn to think like a senior developer — catch bugs before they ship.' },
                { icon: '🎯', title: 'Project-Based Learning', desc: 'Build real projects you can show employers. Not toy apps — production-level work that belongs in a portfolio.' },
                { icon: '📈', title: 'Career Strategy', desc: 'Resume reviews, interview prep, freelance pricing, client acquisition. I\'ve been through it — you benefit from my path.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 pb-6 border-b border-white/10 group hover:pl-2 transition-all duration-300">
                  <div className="w-12 h-12 flex-shrink-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - CTA CARD */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative hover:border-cyan-400/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-2xl"></div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Ready to Level Up <span className="text-cyan-400">Fast?</span>
            </h3>
            
            <p className="text-white/60 leading-relaxed mb-6">
              I take a limited number of mentorship students at a time. Each session is personalized, focused, and results-driven. Previous students have gone from zero to landing their first job in under 6 months.
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white/60 text-sm">Currently accepting 3 new mentorship students</span>
            </div>
            
            <button 
              onClick={() => scrollTo('contact')} 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              Apply for Mentorship →
            </button>
          </div>
          
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