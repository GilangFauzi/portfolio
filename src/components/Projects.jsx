import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const projects = [
  { name: "Core System Nasional Re Modul Facultative & SDM Umum", desc: "Pengembangan modul facultative dan SDM umum pada core system nasional.", fullDesc: "Proyek ini mencakup pengembangan modul facultative dan SDM umum di dalam core system nasional.", tags: ["Laravel", "MySQL", "REST API"], category: "web", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Profile Company PT Askrida Conven", desc: "Pembuatan company profile website untuk PT Askrida Conven.", fullDesc: "Perancangan dan implementasi company profile website.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], category: "web", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Smart Booking System (IoT)", desc: "Sistem smart booking terintegrasi Internet of Things.", fullDesc: "Proyek smart booking system terintegrasi IoT dengan perancangan hardware.", tags: ["IoT", "Laravel", "Vue.js", "MySQL"], category: "iot", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
  { name: "System Management Employee", desc: "HRIS dengan penggajian, API, dan face recognition.", fullDesc: "Human Resource Management System (HRIS) dengan manajemen penggajian.", tags: ["Laravel", "React JS", "REST API", "Face Recognition"], category: "erp", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "System E-Procurement", desc: "Sistem pengadaan barang/jasa secara elektronik.", fullDesc: "Platform e-procurement untuk pengadaan barang dan jasa.", tags: ["Laravel", "Vue.js", "PostgreSQL"], category: "web", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { name: "Control Management System", desc: "Sistem manajemen kontrol untuk monitoring operasional.", fullDesc: "Sistem manajemen kontrol untuk monitoring dan pengelolaan operasional.", tags: ["Laravel", "Bootstrap", "MySQL"], category: "web", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
  { name: "System ERP", desc: "Enterprise Resource Planning system terintegrasi.", fullDesc: "Enterprise Resource Planning system untuk manajemen bisnis terintegrasi.", tags: ["Laravel", "Golang", "PostgreSQL"], category: "erp", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

const filters = [{ key: "all", label: "All" }, { key: "web", label: "Web" }, { key: "iot", label: "IoT" }, { key: "erp", label: "ERP" }];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.05 });
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-alt relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={3} title="Featured" highlight="Projects" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button key={f.key} onClick={() => setActiveFilter(f.key)} className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeFilter === f.key ? "bg-cyan-400 text-white" : "bg-surface-card text-text-muted hover:text-text border border-border hover:border-cyan-400/30"}`}>{f.label}</button>
          ))}
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" layout style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Magnetic key={project.name} strength={12}>
                <motion.div layout initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.85, rotateY: 15 }} transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} whileHover={{ y: -8, scale: 1.03, rotateY: -5, rotateX: 5, transition: { type: "spring", stiffness: 300 } }} style={{ transformStyle: "preserve-3d" }} onClick={() => setSelectedProject(project)} className="group bg-surface-card border border-border rounded-xl p-5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all cursor-pointer backdrop-blur-sm">
                  <motion.div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-3 group-hover:bg-cyan-400/20 transition-all duration-300" style={{ transform: "translateZ(15px)" }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }}>
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.icon} /></svg>
                  </motion.div>
                  <h3 className="text-text font-semibold mb-1.5 text-sm group-hover:text-cyan-400 transition-colors" style={{ transform: "translateZ(10px)" }}>{project.name}</h3>
                  <p className="text-text-muted text-xs mb-3 leading-relaxed" style={{ transform: "translateZ(5px)" }}>{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5" style={{ transform: "translateZ(3px)" }}>
                    {project.tags.map((tag) => (<span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 font-mono group-hover:bg-cyan-400/15 transition-colors">{tag}</span>))}
                  </div>
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
              <button onClick={() => setSelectedProject(null)} className="w-full py-2.5 rounded-full bg-surface-alt text-text-secondary text-sm font-medium hover:bg-surface transition-colors">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
