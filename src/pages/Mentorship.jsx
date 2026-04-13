export default function Mentorship() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="mentorship" className="py-24 px-6 md:px-16 bg-[rgba(200,255,0,0.02)] border-y border-[rgba(200,255,0,0.1)]">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="reveal">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-5">
              <span className="w-8 h-px bg-[#c8ff00]"></span>
              Grow With Me
            </div>
            <h2 className="font-['Syne'] text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Mentorship That <br />Gets You <span className="text-[#c8ff00]">Hired.</span>
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            {[
              { icon: '🗺️', title: 'Structured Learning Path', desc: 'No more YouTube rabbit holes. I build a custom roadmap based on your goals and current level — and hold you accountable.' },
              { icon: '💻', title: 'Live Code Reviews', desc: 'We review your code together in real time. You learn to think like a senior developer — catch bugs before they ship.' },
              { icon: '🎯', title: 'Project-Based Learning', desc: 'Build real projects you can show employers. Not toy apps — production-level work that belongs in a portfolio.' },
              { icon: '📈', title: 'Career Strategy', desc: 'Resume reviews, interview prep, freelance pricing, client acquisition. I\'ve been through it — you benefit from my path.' }
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${i + 1} flex gap-5 pb-6 border-b border-white/10`}>
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-['Syne'] font-bold mb-1">{item.title}</h4>
                  <p className="text-[rgba(242,240,235,0.45)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-3 bg-white/5 border border-white/10 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c8ff00] to-[#ff4d6d]"></div>
          <h3 className="font-['Syne'] text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Level Up <span className="text-[#c8ff00]">Fast?</span>
          </h3>
          <p className="text-[rgba(242,240,235,0.45)] leading-relaxed mb-6">
            I take a limited number of mentorship students at a time. Each session is personalized, focused, and results-driven. Previous students have gone from zero to landing their first job in under 6 months.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[rgba(242,240,235,0.45)] text-sm">Currently accepting 3 new mentorship students</span>
          </div>
          <button onClick={() => scrollTo('contact')} className="btn-primary">
            Apply for Mentorship →
          </button>
        </div>
      </div>
    </section>
  );
}