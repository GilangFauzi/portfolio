import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const arr = Array.from({ length: 40 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 3 + 1, duration: Math.random() * 20 + 10, delay: Math.random() * 10, opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(arr);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || particles.length === 0) {
    return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03]" aria-hidden="true"><div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /></div>;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => <div key={p.id} className="absolute rounded-full bg-cyan-400/60" style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity, animation: `float ${p.duration}s ${p.delay}s infinite linear` }} />)}
      <style>{`@keyframes float { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(30px, -30px) scale(1.5); } 50% { transform: translate(-20px, -60px) scale(1); } 75% { transform: translate(40px, 20px) scale(0.8); } }`}</style>
    </div>
  );
}
