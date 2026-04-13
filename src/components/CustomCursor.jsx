import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is touch-based
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateRing();

    // Scale cursor on hover
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .clickable, .project-card');
      if (target) {
        if (cursorRef.current) {
          cursorRef.current.style.width = '16px';
          cursorRef.current.style.height = '16px';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '45px';
          ringRef.current.style.height = '45px';
          ringRef.current.style.borderColor = 'rgba(6, 182, 212, 0.8)';
        }
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '8px';
        cursorRef.current.style.height = '8px';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '35px';
        ringRef.current.style.height = '35px';
        ringRef.current.style.borderColor = 'rgba(6, 182, 212, 0.4)';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="cursor"></div>
      <div ref={ringRef} id="cursor-ring"></div>
    </>
  );
}