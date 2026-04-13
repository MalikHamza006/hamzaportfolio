import { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = width + '%';
          });
        }
      });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
  }, []);

  const skills = {
    frontend: [
      { name: 'React / Next.js', percent: 95 },
      { name: 'TypeScript', percent: 88 },
      { name: 'Tailwind CSS', percent: 96 }
    ],
    backend: [
      { name: 'Node.js / Express', percent: 92 },
      { name: 'PostgreSQL', percent: 85 },
      { name: 'REST API Design', percent: 93 }
    ]
  };

  const techStack = [
    'HTML5 / CSS3', 'JavaScript ES2024', 'React', 'Next.js 14', 'TypeScript',
    'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM',
    'REST APIs', 'Git / GitHub', 'Vercel / Netlify', 'Figma'
  ];

  return (
    <section id="skills" className="relative py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Simple Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0e27] to-[#0f172a]"></div>
      
      {/* Simple Glass Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-px bg-cyan-400"></span>
            Technical Mastery
            <span className="w-8 h-px bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills That <br />Deliver <span className="text-cyan-400">Results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-8">
          
          {/* Left Column - Skill Bars */}
          <div>
            {/* Frontend Skills */}
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-6">Frontend</div>
              {skills.frontend.map((skill, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.percent}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="skill-fill h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000" 
                      data-width={skill.percent}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Backend Skills */}
            <div>
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-6">Backend</div>
              {skills.backend.map((skill, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.percent}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="skill-fill h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000" 
                      data-width={skill.percent}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info & Tech Stack */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              I don't just know tools — I understand <span className="text-cyan-400 font-semibold">why</span> each technology exists and when to use it. That's the difference between code that ships and code that scales.
            </p>
            
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-4">Full Tech Stack</div>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <div 
                  key={i} 
                  className="border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
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