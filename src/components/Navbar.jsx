import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home", href: "#home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "About", href: "#about", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "Experience", href: "#experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Projects", href: "#projects", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "Education", href: "#education", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  { label: "Skills", href: "#skills", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Certifications", href: "#certifications", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Contact", href: "#contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setupObservers = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
  }, []);

  useEffect(() => {
    setupObservers();
    const mutationObserver = new MutationObserver(() => setupObservers());
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutationObserver.disconnect();
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [setupObservers]);

  const scrollTo = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (open) {
      setOpen(false);
      setTimeout(() => { if (target) target.scrollIntoView({ behavior: "smooth" }); }, 350);
    } else {
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-nav-bg backdrop-blur-2xl shadow-lg shadow-cyan-500/10 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home" onClick={(e) => scrollTo(e, "#home")}
              className="text-xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Portfolio
              </span>
              <motion.span className="text-cyan-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}>.</motion.span>
            </motion.a>

            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.href} href={item.href} onClick={(e) => scrollTo(e, item.href)}
                  className={`relative px-3 py-1.5 text-sm transition-all duration-300 rounded-lg font-medium ${
                    activeSection === item.href.replace("#", "")
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-text-secondary hover:text-cyan-400 hover:bg-surface-alt"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="relative ml-1">
                <motion.a
                  href="#contact" onClick={(e) => scrollTo(e, "#contact")}
                  className="relative z-10 flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Hire Me
                </motion.a>
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400/30 z-0"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-1 p-2 rounded-lg text-text-muted hover:text-cyan-400 hover:bg-surface-alt transition-all"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.svg
                    key={dark ? "moon" : "sun"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className="w-4 h-4"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    {dark ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    )}
                  </motion.svg>
                </AnimatePresence>
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-text-muted hover:text-cyan-400 transition-all"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.svg
                    key={dark ? "moon-mob" : "sun-mob"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className="w-5 h-5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    {dark ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    )}
                  </motion.svg>
                </AnimatePresence>
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-text-secondary hover:text-cyan-400 relative z-50"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path
                    animate={open ? "open" : "closed"}
                    variants={{ closed: { d: "M4 6h16M4 12h16M4 18h16" }, open: { d: "M6 18L18 6M6 6l12 12" } }}
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-surface/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.a key={item.href} href={item.href} onClick={(e) => scrollTo(e, item.href)}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                      className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        isActive ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400" : "text-text-secondary hover:text-cyan-400 hover:bg-surface-alt border-l-2 border-transparent"
                      }`}
                    >
                      <svg className={`w-4 h-4 shrink-0 ${isActive ? "text-cyan-400" : "text-text-muted"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                      {item.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#contact" onClick={(e) => scrollTo(e, "#contact")}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.05 }}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
