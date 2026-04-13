const projects = [
  { num: '01', title: 'GymPro Management System', desc: 'Full-stack gym platform with member management, billing, class scheduling & analytics', tags: ['React', 'Node.js', 'PostgreSQL'] },
  { num: '02', title: 'BrewHouse Coffee POS', desc: 'Real-time point-of-sale system for café chain — orders, inventory, staff & daily reports', tags: ['Next.js', 'Prisma', 'Stripe'] },
  { num: '03', title: 'Developer Portfolio CMS', desc: 'Custom headless CMS for developers to manage and showcase their projects dynamically', tags: ['Next.js', 'TypeScript', 'Tailwind'] },
  { num: '04', title: 'REST API Boilerplate', desc: 'Production-ready Node/Express starter with auth, rate limiting, logging & Postgres', tags: ['Node.js', 'Express', 'JWT'] },
  { num: '05', title: 'Freelance Client Projects (10+)', desc: 'Landing pages, dashboards, SaaS MVPs, and business websites for clients worldwide', tags: ['Various', 'Full-Stack'] }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="reveal">
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-5">
          <span className="w-8 h-px bg-[#c8ff00]"></span>
          Selected Work
        </div>
        <h2 className="font-['Syne'] text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-tight tracking-[-0.03em]">
          Projects That <br />Made an Impact.
        </h2>
      </div>

      <div className="mt-16">
        {projects.map((project, i) => (
          <div key={i} className={`reveal ${i > 0 ? `delay-${i}` : ''} group border-b border-white/10 py-10 first:border-t transition-all hover:pl-6 relative`}>
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#c8ff00] transition-all group-hover:w-0.5"></div>
            <div className="grid grid-cols-[80px_1fr_auto] items-center gap-8 md:gap-12">
              <div className="font-['Syne'] text-xs font-bold tracking-[0.1em] text-[rgba(242,240,235,0.45)]">{project.num}</div>
              <div>
                <h3 className="font-['Syne'] text-xl md:text-2xl font-bold mb-1 transition-colors group-hover:text-[#c8ff00]">{project.title}</h3>
                <p className="text-[rgba(242,240,235,0.45)] text-sm">{project.desc}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-[rgba(242,240,235,0.45)] border border-white/10 px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}