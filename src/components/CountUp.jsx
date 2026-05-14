import { useRef, useEffect, useState } from "react";

export default function CountUp({ end, duration = 2, suffix = "", label = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        let start = 0;
        const step = end / (duration * 60);
        const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else { setCount(Math.floor(start)); } }, 1000 / 60);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-text">{count}<span className="text-cyan-400">{suffix}</span></div>
      <p className="text-text-muted text-xs mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}
