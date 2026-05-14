import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  { institution: "Universitas Pamulang", degree: "S1 Teknik Informatika", period: "11 Oktober 2018 – 13 Oktober 2022", gpa: "3.36 / 4.0", thesis: "Implementasi Alat Penyiraman Tanaman Otomatis Berbasis Internet of Things menggunakan Metode Fuzzy Logic pada Kebun Artawi Flora." },
];
const organizations = [
  { name: "IRM Nurul Yaqin", role: "Wakil Ketua", period: "2017 – 2021" },
  { name: "DKM Nurul Yaqin", role: "Sekretaris", period: "2017 – 2021" },
  { name: "Karang Taruna Desa Curug", role: "Humas", period: "2017 – 2021" },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const progressRef = useRef(null);
  const progressInView = useInView(progressRef, { once: true, amount: 0.5 });

  return (
    <section id="education" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={4} title="Education" highlight="& Organizations" />
        </motion.div>
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-text mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            Riwayat Pendidikan
          </h3>
          {education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.15 }} whileHover={{ borderColor: "rgba(34, 211, 238, 0.3)" }} className="bg-surface-card border border-border rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h4 className="text-text font-semibold text-lg">{edu.institution}</h4>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{edu.period}</span>
              </div>
              <p className="text-text-secondary text-sm mb-1">{edu.degree}</p>
              <div className="flex items-center gap-3 mb-3" ref={progressRef}>
                <span className="text-cyan-400 text-lg font-bold">IPK: {edu.gpa}</span>
                <div className="flex-1 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" initial={{ width: 0 }} animate={progressInView ? { width: `${(3.36 / 4) * 100}%` } : {}} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} />
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed"><span className="text-text-secondary font-medium">Skripsi:</span> {edu.thesis}</p>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Organisasi
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {organizations.map((org, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }} transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)" }} className="bg-surface-card border border-border rounded-xl p-5 text-center backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto mb-3"><span className="text-cyan-400 font-bold">{org.name.charAt(0)}</span></div>
                <h4 className="text-text font-semibold text-sm">{org.name}</h4>
                <p className="text-cyan-400 text-sm font-medium">{org.role}</p>
                <p className="text-text-muted text-xs mt-1">{org.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
