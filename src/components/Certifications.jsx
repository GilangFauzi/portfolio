import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import translations from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

const certifications = [
  "Certificate Course Dasar-dasar UI/UX (Coursera 2024)", "Certificate of Skill Competence Rest API Laravel Lumen (Belajar Skill) 2024", "Certificate of Professional Skill Internet of Things (MySkill) 2024", "Certificate of Skill Specialization Vue JS (MySkill) 2024", "Certificate of Skill Specialization Git & GitHub (MySkill) 2024",
  "Udemy Certificate of Completion Laravel Beginner to Advanced (Udemy) 2023", "Virtual Internship Fullstack Developer (Rakamin Academy) 2022", "Junior Web Developer (Badan Nasional Sertifikasi Profesi) 2022", "Pelatihan Junior Web Developer (Vocational School Graduate Academy) 2022", "Skill Passport Pemrograman (LSP Universitas Pamulang) 2022", "Pelatihan Pemrograman (LSP Universitas Pamulang) 2022",
  "TOEFL Prediction Test (Lembaga Bahasa Universitas Pamulang) 2021", "Kompetensi Teknik Komputer Jaringan (Akademi Manajemen Informatika) 2018",
];

const years = [...new Set(certifications.map((c) => c.match(/\d{4}/)?.[0] || "").filter(Boolean))].sort((a, b) => b - a);

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="certifications" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={6} title={t.certifications.title} highlight={t.certifications.highlight} />
        </motion.div>
        {years.map((year, yi) => {
          const yearCerts = certifications.filter((c) => c.includes(year));
          return (
            <div key={year} className="mb-10 last:mb-0">
              <motion.h3 initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.4, delay: yi * 0.1 }} className="text-cyan-400 font-bold text-lg mb-4 flex items-center gap-3"><span className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent" />{year}</motion.h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {yearCerts.map((cert, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} transition={{ duration: 0.3, delay: yi * 0.1 + i * 0.04 }} whileHover={{ x: 4, borderColor: "rgba(34, 211, 238, 0.3)" }} className="flex items-start gap-3 bg-surface-card border border-border rounded-xl p-4 backdrop-blur-sm group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text transition-colors">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
