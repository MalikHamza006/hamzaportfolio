export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-['Syne'] text-base font-extrabold">
        Hamza Malik<span className="text-[#c8ff00]">.</span>
      </div>
      <div className="text-[rgba(242,240,235,0.45)] text-sm">
        © 2026 — Full-Stack Developer & Mentor
      </div>
      <div className="text-[#c8ff00] text-sm">
        Available for hire
      </div>
    </footer>
  );
}