import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dots = [0, 1, 2];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const exitTimer = setTimeout(() => setLoading(false), duration + 200);
    return () => {
      clearInterval(timer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Aurora background gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse at 30% 50%, rgba(34,211,238,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.06) 0%, transparent 60%), #030712",
                "radial-gradient(ellipse at 70% 40%, rgba(34,211,238,0.10) 0%, transparent 60%), radial-gradient(ellipse at 30% 60%, rgba(59,130,246,0.08) 0%, transparent 60%), #030712",
                "radial-gradient(ellipse at 30% 50%, rgba(34,211,238,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.06) 0%, transparent 60%), #030712",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo with orbiting rings */}
            <div className="relative w-24 h-24">
              {/* Ring 1 - rotateY */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              />
              {/* Ring 2 - rotateX */}
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-400/30"
                animate={{ rotateX: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              />
              {/* Ring 3 - rotateZ + scale pulse */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-cyan-400/15"
                animate={{ rotateZ: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Logo center */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 z-10 overflow-hidden"
                initial={{ scale: 0, rotateZ: -30 }}
                animate={{ scale: [0, 1.08, 1], rotateZ: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}img/profile-gilang.jpeg`}
                  alt="Gilang Fauzi"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Outer glow pulse */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-cyan-400/5 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Animated dots */}
            <div className="flex items-center gap-2">
              {dots.map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-48 sm:w-64 h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
