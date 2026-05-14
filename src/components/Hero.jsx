import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

const roles = [
  "Software Engineer",
  "Web Developer",
  "IoT Developer",
  "Backend Engineer",
  "Fullstack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1)),
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ perspective: "1000px" }}>
      <motion.div className="max-w-4xl mx-auto text-center relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="mb-6" variants={itemVariants}>
          <motion.div
            className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30 relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 15, rotateX: -10 }}
            onClick={() => setShowPhoto(true)}
            style={{ transformStyle: "preserve-3d" }}
            animate={{ boxShadow: ["0 0 40px rgba(34,211,238,0.3)", "0 0 60px rgba(34,211,238,0.5)", "0 0 40px rgba(34,211,238,0.3)"], rotateY: [0, 10, 0], rotateX: [0, 5, 0] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            <img
              src="/img/profile-gilang.jpeg"
              alt="Gilang Fauzi"
              className="w-full h-full object-cover rounded-full"
            />
            <motion.div className="absolute inset-0 rounded-full border-2 border-cyan-400/50" animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5], rotateZ: [0, 360] }} transition={{ duration: 3, repeat: Infinity }} style={{ transformStyle: "preserve-3d" }} />
            <motion.div className="absolute inset-0 rounded-full border border-cyan-400/30" animate={{ scale: [1.1, 1.25, 1.1], opacity: [0.3, 0, 0.3], rotateZ: [360, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} style={{ transformStyle: "preserve-3d" }} />
          </motion.div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-cyan-400 font-mono text-sm tracking-[0.2em] mb-4">HELLO, I&apos;M</motion.p>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text mb-4 tracking-tight">
          Gilang <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Fauzi</span>
        </motion.h1>
        <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center justify-center">
          <h2 className="text-xl sm:text-2xl text-text-secondary font-light">
            <span className="text-cyan-400 font-mono">&gt; </span>
            {text}
            <motion.span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 align-middle" animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} />
          </h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed text-base sm:text-lg">
          Lulusan S1 Teknik Informatika Universitas Pamulang. Berpengalaman dalam pengembangan sistem Internet of Things (IoT) dan web development — menciptakan solusi inovatif di berbagai proyek.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted mb-8">
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Bogor, Indonesia</span>
          <span className="w-1 h-1 rounded-full bg-text-muted hidden sm:inline" />
          <a href="mailto:gilangfauzi023@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>gilangfauzi023@gmail.com</a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
          {[{ label: "LinkedIn", href: "https://www.linkedin.com/in/gilang-fauzi-31a635255", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) }, { label: "GitHub", href: "https://github.com/GilangFauzi", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>) }, { label: "GitLab", href: "https://gitlab.com/gilangfauzii", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 20.054l11.624-5.444a.924.924 0 00.331-1.023" /></svg>) }].map((link) => (
            <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-surface-card backdrop-blur text-text rounded-full text-sm font-medium border border-border hover:border-cyan-400/30 group" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{link.icon}</span>{link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-md mx-auto bg-surface-card border border-border rounded-2xl p-6 backdrop-blur-sm" whileHover={{ scale: 1.02, rotateY: -3, rotateX: 2 }} style={{ transformStyle: "preserve-3d" }}>
          <div className="grid grid-cols-3 gap-4">
            <CountUp end={3} suffix="+" label="Years Exp" />
            <CountUp end={7} suffix="" label="Projects" />
            <CountUp end={13} suffix="" label="Certifications" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-text-muted flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPhoto(false)}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: 30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: -30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full"
            >
              <div className="rounded-2xl overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/img/profile-gilang.jpeg"
                  alt="Gilang Fauzi"
                  className="w-full h-auto block"
                />
              </div>
              <button
                onClick={() => setShowPhoto(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-400 text-gray-900 flex items-center justify-center font-bold text-sm shadow-lg hover:bg-cyan-300 transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
