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
    <section id="skills" className="py-24 px-6 md:px-16">
      <div className="reveal">
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-5">
          <span className="w-8 h-px bg-[#c8ff00]"></span>
          Technical Mastery
        </div>
        <h2 className="font-['Syne'] text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-tight flex-center tracking-[-0.03em]">
          Skills That <br />Deliver Results.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-16">
        <div>
          <div className="reveal">
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[rgba(242,240,235,0.45)] mb-6">Frontend</div>
            {skills.frontend.map((skill, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-[#c8ff00] font-['Syne'] font-bold">{skill.percent}%</span>
                </div>
                <div className="h-0.5 bg-white/10 relative overflow-hidden">
                  <div className="skill-fill h-full bg-gradient-to-r from-[#c8ff00] to-[#ff4d6d] w-0 transition-all duration-1000" data-width={skill.percent}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal reveal-delay-1 mt-8">
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[rgba(242,240,235,0.45)] mb-6">Backend</div>
            {skills.backend.map((skill, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-[#c8ff00] font-['Syne'] font-bold">{skill.percent}%</span>
                </div>
                <div className="h-0.5 bg-white/10 relative overflow-hidden">
                  <div className="skill-fill h-full bg-gradient-to-r from-[#c8ff00] to-[#ff4d6d] w-0 transition-all duration-1000" data-width={skill.percent}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          <p className="text-[rgba(242,240,235,0.45)] leading-relaxed mb-8 text-base">
            I don't just know tools — I understand <em className="text-white not-italic">why</em> each technology exists and when to use it. That's the difference between code that ships and code that scales.
          </p>
          <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[rgba(242,240,235,0.45)] mb-4">Full Tech Stack</div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <div key={i} className="border border-white/10 px-4 py-2 text-sm font-medium text-[rgba(242,240,235,0.45)] transition-all hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] cursor-default relative overflow-hidden group">
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}