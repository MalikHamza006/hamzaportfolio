const projects = [
  { num: '01', title: 'GymPro Management System', desc: 'Full-stack gym platform with member management, billing, class scheduling & analytics', tags: ['React', 'Node.js', 'PostgreSQL'] },
  { num: '02', title: 'BrewHouse Coffee POS', desc: 'Real-time point-of-sale system for café chain — orders, inventory, staff & daily reports', tags: ['Next.js', 'Prisma', 'Stripe'] },
  { num: '03', title: 'Developer Portfolio CMS', desc: 'Custom headless CMS for developers to manage and showcase their projects dynamically', tags: ['Next.js', 'TypeScript', 'Tailwind'] },
  { num: '04', title: 'REST API Boilerplate', desc: 'Production-ready Node/Express starter with auth, rate limiting, logging & Postgres', tags: ['Node.js', 'Express', 'JWT'] },
  { num: '05', title: 'Freelance Client Projects (10+)', desc: 'Landing pages, dashboards, SaaS MVPs, and business websites for clients worldwide', tags: ['Various', 'Full-Stack'] }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Simple Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0e27] to-[#0f172a]"></div>
      
      {/* Simple Glass Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-px bg-cyan-400"></span>
            Selected Work
            <span className="w-8 h-px bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Projects That <br />Made an <span className="text-cyan-400">Impact.</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="mt-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group border-b border-white/10 py-8 first:border-t transition-all duration-300 hover:pl-6 relative backdrop-blur-sm hover:bg-white/5 rounded-xl`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-1 rounded-r-full"></div>
              
              <div className="grid grid-cols-[80px_1fr_auto] items-center gap-6 md:gap-12">
                {/* Project Number */}
                <div className="text-xs font-bold tracking-[0.1em] text-white/40 font-mono">
                  {project.num}
                </div>
                
                {/* Project Info */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-white/40 border border-white/10 px-3 py-1 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <span>Have a project in mind?</span>
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