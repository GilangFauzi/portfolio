import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import translations from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.05 });
  const [expanded, setExpanded] = useState({});
  const { lang } = useLanguage();
  const t = translations[lang];

  const experiences = [
    { titleKey: "job1", company: t.experience.companies.mandala, period: t.period.mandala, type: t.experience.job1.type, details: t.experience.job1.details },
    { titleKey: "job2", company: t.experience.companies.training, period: t.period.training, type: t.experience.job2.type, details: t.experience.job2.details },
    { titleKey: "job3", company: t.experience.companies.kelurahan, period: t.period.kelurahan, type: t.experience.job3.type, details: t.experience.job3.details },
  ];

  const jobTitles = {
    job1: { id: t.experience.job1.title, en: t.experience.job1.title },
    job2: { id: t.experience.job2.title, en: t.experience.job2.title },
    job3: { id: t.experience.job3.title, en: t.experience.job3.title },
  };

  function TimelineItem({ exp, index, isOpen, onToggle, hasMore }) {
    const itemRef = useRef(null);
    const itemInView = useInView(itemRef, { amount: 0.2 });
    const visibleDetails = isOpen ? exp.details : exp.details.slice(0, 3);

    return (
      <motion.div ref={itemRef} className="relative pl-8 pb-12 group">
        <motion.div className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/60 to-border rounded-full" initial={{ height: 0 }} animate={itemInView ? { height: "100%" } : { height: 0 }} transition={{ duration: 0.7, delay: index * 0.15 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} />
        <div className="absolute left-0 top-0 -translate-x-1/2">
          <motion.div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40" initial={{ scale: 0 }} animate={itemInView ? { scale: 1 } : { scale: 0 }} transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.15 + 0.1 }} whileHover={{ scale: 1.4 }} />
          <motion.div className="absolute inset-0 rounded-full bg-cyan-400/40" initial={{ opacity: 0, scale: 0 }} animate={itemInView ? { opacity: [0, 0.6, 0], scale: [1, 2.5, 1] } : { opacity: 0, scale: 0 }} transition={{ duration: 1.5, delay: index * 0.15 + 0.6, repeat: Infinity, repeatDelay: 2.5 }} />
        </div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5, delay: index * 0.15 + 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.15em]">{exp.type}</span>
          <h3 className="text-xl font-semibold text-text mt-1 group-hover:text-cyan-400 transition-colors">{exp.titleKey === "job1" ? t.experience.job1.title : exp.titleKey === "job2" ? t.experience.job2.title : t.experience.job3.title}</h3>
          <p className="text-text-muted text-sm mb-3">{exp.company} <span className="text-text-muted/40">&mdash;</span> {exp.period}</p>
          <ul className="space-y-2">
            {visibleDetails.map((d, j) => (
              <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }} transition={{ duration: 0.3, delay: index * 0.15 + 0.35 + j * 0.05 }} className="text-text-secondary text-sm flex items-start gap-2.5">
                <span className="text-cyan-400/60 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-cyan-400/60 inline-block" />{d}
              </motion.li>
            ))}
          </ul>
          {hasMore && (
            <motion.button initial={{ opacity: 0 }} animate={itemInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.3, delay: index * 0.15 + 0.6 }} onClick={onToggle} className="mt-3 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
              {isOpen ? t.experience.showLess : `${t.experience.showMore} (${exp.details.length - 3} ${t.experience.more})`}
              <motion.svg className="w-3 h-3" animate={{ rotate: isOpen ? 180 : 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section id="experience" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={2} title={t.experience.title} highlight={t.experience.highlight} />
        </motion.div>
        <div className="space-y-0">
          {experiences.map((exp, i) => {
            const isOpen = expanded[i] ?? (i === 0);
            const hasMore = exp.details.length > 3;
            return <TimelineItem key={i} exp={exp} index={i} isOpen={isOpen} onToggle={() => setExpanded((p) => ({ ...p, [i]: !p[i] }))} hasMore={hasMore} />;
          })}
        </div>
      </div>
    </section>
  );
}
