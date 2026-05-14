import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const skillCategories = [
  { category: "Frontend", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", skills: ["HTML", "CSS", "JavaScript", "React JS", "Vue.js", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01", skills: ["PHP", "Laravel", "Golang", "RESTful API"] },
  { category: "Database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", skills: ["MySQL", "PostgreSQL"] },
  { category: "IoT & Hardware", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", skills: ["Internet of Things", "Arduino", "Sensor Integration"] },
  { category: "Tools & Other", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", skills: ["Git & GitHub", "MS Word", "MS Excel", "MS PowerPoint", "cPanel"] },
];

const softSkills = ["Problem Solving", "Analytical Thinking", "Communication", "Team Collaboration", "Teaching & Mentoring", "Client Consultation"];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section id="skills" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-alt relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={5} title="Skills" highlight="& Expertise" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillCategories.map((cat, i) => (
            <Magnetic key={i} strength={10}>
              <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }} transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)", rotateY: 5, rotateX: -3 }} style={{ transformStyle: "preserve-3d", perspective: "800px" }} className="bg-surface-card border border-border rounded-xl p-5 backdrop-blur-sm group hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors" whileHover={{ rotateY: 180 }} transition={{ duration: 0.5 }}>
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} /></svg>
                  </motion.div>
                  <h3 className="text-text font-semibold text-sm uppercase tracking-wider">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span key={skill} className="px-3 py-1 rounded-full bg-surface text-text-secondary text-xs font-medium border border-border hover:border-cyan-400/30 hover:text-cyan-400 transition-all cursor-default" whileHover={{ scale: 1.1, y: -2 }}>{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: 0.4 }} className="text-xl font-semibold text-text mb-4">Soft Skills</motion.h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, i) => (
            <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }} whileHover={{ scale: 1.08, y: -3 }} className="px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-all cursor-default">{skill}</motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
