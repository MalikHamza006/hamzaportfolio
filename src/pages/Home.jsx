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
    <section className="min-h-screen flex items-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 blur-[140px] opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <span className="w-8 h-px bg-cyan-400"></span>
              Welcome to my digital space
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hama <span className="text-cyan-400">Yousuf</span>
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
                className="bg-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-600 transition"
              >
                Start a Project →
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="glass px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* RIGHT - 🔥 ENHANCED IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Floating circle */}
              <div className="relative w-56 h-56 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)] group-hover:scale-105 transition duration-500 animate-float">

                {/* Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.6)]">
                  <img
                    src={profileImg}
                    alt="Hama Yousuf"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

              {/* Floating icons */}
              <div className="absolute -top-6 -left-6 text-2xl animate-float">⚡</div>
              <div className="absolute -bottom-6 -right-6 text-2xl animate-float delay-200">🚀</div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}