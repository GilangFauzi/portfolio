import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import translations from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

const filters = [{ key: "all", labelKey: "all" }, { key: "web", label: "Web" }, { key: "iot", label: "IoT" }, { key: "erp", label: "ERP" }];

const iconPaths = {
  web: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  iot: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  erp: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.05 });
  const { lang } = useLanguage();
  const t = translations[lang];

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    tags: [[["Laravel", "MySQL", "REST API"], ["HTML", "CSS", "JavaScript", "Bootstrap"], ["IoT", "Laravel", "Vue.js", "MySQL"], ["Laravel", "React JS", "REST API", "Face Recognition"], ["Laravel", "Vue.js", "PostgreSQL"], ["Laravel", "Bootstrap", "MySQL"], ["Laravel", "Golang", "PostgreSQL"]][i]],
    category: ["web", "web", "iot", "erp", "web", "web", "erp"][i],
    icon: iconPaths[["web", "web", "iot", "erp", "web", "web", "erp"][i]] || iconPaths.web,
  }));

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-alt relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={3} title={t.projects.title} highlight={t.projects.highlight} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button key={f.key} onClick={() => setActiveFilter(f.key)} className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeFilter === f.key ? "bg-cyan-400 text-white" : "bg-surface-card text-text-muted hover:text-text border border-border hover:border-cyan-400/30"}`}>{f.labelKey ? t.projects.filters[0] : f.label}</button>
          ))}
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" layout style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Magnetic key={project.name} strength={12}>
                <motion.div layout initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.85, rotateY: 15 }} transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} whileHover={{ y: -8, scale: 1.03, rotateY: -5, rotateX: 5, transition: { type: "spring", stiffness: 300 } }} style={{ transformStyle: "preserve-3d" }} onClick={() => setSelectedProject(project)} className="group bg-surface-card border border-border rounded-xl p-5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all cursor-pointer backdrop-blur-sm">
                  <motion.div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-3 group-hover:bg-cyan-400/20 transition-all duration-300" style={{ transform: "translateZ(15px)" }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }}><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.icon} /></svg></motion.div>
                  <h3 className="text-text font-semibold mb-1.5 text-sm group-hover:text-cyan-400 transition-colors" style={{ transform: "translateZ(10px)" }}>{project.name}</h3>
                  <p className="text-text-muted text-xs mb-3 leading-relaxed" style={{ transform: "translateZ(5px)" }}>{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5" style={{ transform: "translateZ(3px)" }}>{project.tags.map((tag) => (<span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 font-mono group-hover:bg-cyan-400/15 transition-colors">{tag}</span>))}</div>
                </motion.div>
              </Magnetic>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20, rotateX: 15 }} animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20, rotateX: 15 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="bg-surface border border-border rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4"><svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={selectedProject.icon} /></svg></div>
              <h3 className="text-xl font-bold text-text mb-2">{selectedProject.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{selectedProject.fullDesc}</p>
              <div className="flex flex-wrap gap-2 mb-6">{selectedProject.tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 font-mono border border-cyan-400/20">{tag}</span>))}</div>
              <button onClick={() => setSelectedProject(null)} className="w-full py-2.5 rounded-full bg-surface-alt text-text-secondary text-sm font-medium hover:bg-surface transition-colors">{t.projects.modal.close}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
