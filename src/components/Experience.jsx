import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  { title: "Software Engineer", company: "PT Mandala Dwipantara Proteksi", period: "12 February 2023 – 19 February 2026", type: "Full-time", details: ["Menyusun, mengimplementasikan, memelihara, dan mengembangkan proyek core system — mencakup desain arsitektur, pengkodean, dan optimalisasi sistem untuk performa optimal.", "Berkontribusi dalam pembuatan profil perusahaan dengan merancang dan mengimplementasikan arsitektur backend yang aman, skalabel, dan berkinerja tinggi, serta mengelola operasi database.", "Melakukan migrasi database dari sistem lama ke baru menggunakan MySQL — mencakup analisis struktur, pemetaan & transformasi data, ekspor-impor, serta verifikasi konsistensi data.", "Pertemuan dengan klien membahas pengembangan program, termasuk analisis kebutuhan bisnis.", "Berperan aktif dalam proyek smart booking system terintegrasi IoT — perancangan hardware dan instalasi alat Internet of Things.", "Identifikasi bug dan proses debugging untuk meminimalkan insiden pada production — analisis kode sumber dan pengujian menyeluruh.", "Mengembangkan Human Resource Management System (HRIS) dengan fitur manajemen penggajian, otentikasi API, dan integrasi pengenalan wajah untuk aplikasi seluler."] },
  { title: "Web Developer Trainer", company: "Training Online", period: "12 November – 25 November 2023", type: "Training", details: ["Merancang kurikulum terstruktur untuk pemula dalam menguasai HTML, CSS, dan JavaScript.", "Menyampaikan materi pembelajaran melalui platform online dengan metode pengajaran interaktif.", "Memfasilitasi diskusi kelompok dan sesi tanya jawab."] },
  { title: "Backend Developer", company: "Kantor Kelurahan Bojongsari Depok", period: "01 April – 30 Mei 2021", type: "Internship", details: ["Berkontribusi membuat website sistem informasi kantor kelurahan Bojongsari sebagai backend developer.", "Menjelaskan dan mendemonstrasikan website kepada seluruh staff kantor kelurahan.", "Mendeploy website menggunakan platform cPanel."] },
];

function TimelineItem({ exp, index, isOpen, onToggle, hasMore }) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { amount: 0.2 });
  const visibleDetails = isOpen ? exp.details : exp.details.slice(0, 3);

  return (
    <motion.div ref={itemRef} className="relative pl-8 pb-12 group">
      <motion.div
        className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/60 to-border rounded-full"
        initial={{ height: 0 }}
        animate={itemInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40" initial={{ scale: 0 }} animate={itemInView ? { scale: 1 } : { scale: 0 }} transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.15 + 0.1 }} whileHover={{ scale: 1.4 }} />
        <motion.div className="absolute inset-0 rounded-full bg-cyan-400/40" initial={{ opacity: 0, scale: 0 }} animate={itemInView ? { opacity: [0, 0.6, 0], scale: [1, 2.5, 1] } : { opacity: 0, scale: 0 }} transition={{ duration: 1.5, delay: index * 0.15 + 0.6, repeat: Infinity, repeatDelay: 2.5 }} />
      </div>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5, delay: index * 0.15 + 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.15em]">{exp.type}</span>
        <h3 className="text-xl font-semibold text-text mt-1 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
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
            {isOpen ? "Show less" : `Show all (${exp.details.length - 3} more)`}
            <motion.svg className="w-3 h-3" animate={{ rotate: isOpen ? 180 : 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.05 });
  const [expanded, setExpanded] = useState({});
  return (
    <section id="experience" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={2} title="Work" highlight="Experience" />
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
