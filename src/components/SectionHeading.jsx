import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionHeading({ number, title, highlight }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={ref} className="relative mb-16 overflow-hidden">
      <motion.div
        className="absolute -top-6 left-0 text-[5rem] sm:text-[7rem] font-extrabold text-cyan-400/5 leading-none select-none -z-10"
        style={{ y }}
      >
        {String(number).padStart(2, "0")}
      </motion.div>
      <div className="pt-8">
        <p className="text-cyan-400 font-mono text-xs tracking-[0.25em] mb-3">
          SECTION {String(number).padStart(2, "0")}
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-text tracking-tight">
          {title}{" "}
          {highlight && <span className="text-cyan-400">{highlight}</span>}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
      </div>
    </div>
  );
}
