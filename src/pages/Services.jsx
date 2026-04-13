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
    <section id="services" className="py-24 px-6 md:px-16">
      <div className="reveal">
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-5">
          <span className="w-8 h-px bg-[#c8ff00]"></span>
          What I Offer
        </div>
        <h2 className="font-['Syne'] text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-tight tracking-[-0.03em]">
          End-to-End <br />Web Creation.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mt-16">
        {services.map((service, i) => (
          <div key={i} className={`reveal delay-${Math.min(i % 3 + 1, 4)} bg-black p-8 md:p-10 transition-colors hover:bg-white/5 group cursor-default`}>
            <div className="font-['Syne'] text-5xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)] mb-6 group-hover:[-webkit-text-stroke-color:rgba(200,255,0,0.2)] transition-colors">
              {service.num}
            </div>
            <span className="text-3xl mb-4 block">{service.icon}</span>
            <h3 className="font-['Syne'] text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-[rgba(242,240,235,0.45)] text-sm leading-relaxed">{service.desc}</p>
            <div className="mt-6 w-10 h-10 border border-white/10 flex items-center justify-center text-lg text-[rgba(242,240,235,0.45)] group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}