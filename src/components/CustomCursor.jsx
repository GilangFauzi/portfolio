import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

function Sparkle({ style }) {
  const shapes = [
    "M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z",
    "M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z",
    "M12 0l1 11 11 1-11 1-1 11-1-11-11-1 11-1z",
  ];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const size = Math.random() * 6 + 5;
  const colors = ["#22d3ee", "#60a5fa", "#a78bfa", "#34d399", "#fbbf24"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="absolute pointer-events-none"
      style={{
        ...style,
        filter: `drop-shadow(0 0 3px ${color})`,
      }}
      initial={{ opacity: 1, scale: 1, rotate: 0 }}
      animate={{ opacity: 0, scale: 0, rotate: 120, y: -25 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 + Math.random() * 0.3, ease: "easeOut" }}
    >
      <path d={shape} />
    </motion.svg>
  );
}

export default function CustomCursor() {
  const [sparkles, setSparkles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const counterRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      lastPos.current = { x: e.clientX, y: e.clientY };

      if (speed > 4) {
        const count = Math.min(Math.floor(speed / 8), 2);
        for (let i = 0; i < count; i++) {
          const id = counterRef.current++;
          setSparkles((prev) => [
            ...prev,
            { id, x: e.clientX, y: e.clientY },
          ]);
          setTimeout(() => {
            setSparkles((prev) => prev.filter((s) => s.id !== id));
          }, 1000);
        }
      }
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;

    const onHoverEnter = () => setIsHovering(true);
    const onHoverLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    const setupInteractives = () => {
      document
        .querySelectorAll(
          'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", onHoverEnter);
          el.addEventListener("mouseleave", onHoverLeave);
        });
    };
    setupInteractives();

    const observer = new MutationObserver(() => setupInteractives());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[199]" aria-hidden="true">
      {sparkles.map((s) => (
        <Sparkle
          key={s.id}
          style={{ left: s.x, top: s.y }}
        />
      ))}

      <motion.div
        className="absolute"
        style={{ x: springX, y: springY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-cyan-400"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: isHovering ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 rounded-full border border-cyan-400/50"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ width: isHovering ? 44 : 28, height: isHovering ? 44 : 28 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      </motion.div>
    </div>
  );
}
