export default function ProjectCard({ title, desc, tags, icon, num }) {
  return (
    <div className="project-card group">
      <div className="relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
        
        <div className="relative bg-navy-dark/50 rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-4xl">{icon}</span>
            <span className="text-cyan-400 font-bold text-sm">{num}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {desc}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <button className="text-cyan-400 text-sm group-hover:translate-x-2 transition-transform">
              View Project →
            </button>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all">
              🔗
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}