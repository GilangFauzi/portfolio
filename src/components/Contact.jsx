import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import translations from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15 });
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-alt relative">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={7} title={t.contact.title} highlight={t.contact.highlight} />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: 0.15 }} className="text-text-secondary max-w-lg mx-auto mb-10 leading-relaxed">{t.contact.text}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[{ label: "gilangfauzi023@gmail.com", href: "mailto:gilangfauzi023@gmail.com", primary: true, icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) }, { label: "LinkedIn", href: "https://www.linkedin.com/in/gilang-fauzi-31a635255", primary: false, icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) }, { label: "GitHub", href: "https://github.com/GilangFauzi", primary: false, icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>) }, { label: "GitLab", href: "https://gitlab.com/gilangfauzii", primary: false, icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 20.054l11.624-5.444a.924.924 0 00.331-1.023" /></svg>) }].map((btn) => btn.primary ? (
            <motion.a key={btn.label} href={btn.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">{btn.icon}{btn.label}</motion.a>
          ) : (
            <motion.a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-5 py-2.5 bg-surface-card backdrop-blur text-text font-medium rounded-full text-sm border border-border hover:border-cyan-400/30 transition-colors group"><span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{btn.icon}</span>{btn.label}</motion.a>
          ))}
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="text-text-muted text-sm">&copy; {new Date().getFullYear()} Gilang Fauzi. {t.contact.footer}</motion.p>
      </div>
    </section>
  );
}
