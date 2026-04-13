import { useState, useEffect } from 'react';
import profileImg from "../assets/images/profile.png";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Tech Mentor',
    'Freelancer'
  ];

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    const handleTyping = () => {
      setDisplayText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    };

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && displayText === fullText) {
      speed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      speed = 600;
    }

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Simple Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0e27] to-[#0f172a]"></div>
      
      {/* Simple Glass Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <span className="w-8 h-px bg-cyan-400"></span>
              Welcome to my digital space
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hamza <span className="text-cyan-400">Malik</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-6 font-light">
              {displayText}
              <span className="animate-blink">|</span>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I craft exceptional digital experiences with modern web technologies.
              Specializing in full-stack development, UI/UX design, and technical mentorship.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollTo('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
              >
                Start a Project →
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="glass px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* RIGHT - IMAGE SECTION */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Main Square Container */}
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl flex items-center justify-center border-2 border-white/20 shadow-2xl group-hover:scale-105 transition duration-500">
                
                {/* Inner Rotating Border */}
                <div className="absolute inset-2 rounded-xl border-2 border-dashed border-cyan-400/50 animate-spin-slow"></div>
                
                {/* Image Container */}
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden border-4 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.8)] transition-all duration-500">
                  <img
                    src={profileImg}
                    alt="Hamza Malik"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                </div>
                
                {/* Decorative Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-xs font-bold shadow-lg animate-bounce">
                  PRO
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
              </div>
              
              {/* Stats Badge */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 whitespace-nowrap">
                <span className="text-cyan-400 font-bold">5+</span>
                <span className="text-white ml-2">Years Experience</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0px); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        
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