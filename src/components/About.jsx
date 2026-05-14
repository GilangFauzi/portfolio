import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const infoCards = [
  { label: "Location", value: "Bogor, Indonesia", href: null, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Email", value: "gilangfauzi023@gmail.com", href: "mailto:gilangfauzi023@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "LinkedIn", value: "gilang-fauzi-31a635255", href: "https://www.linkedin.com/in/gilang-fauzi-31a635255", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "GitHub", value: "GilangFauzi", href: "https://github.com/GilangFauzi", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label: "GitLab", value: "gilangfauzii", href: "https://gitlab.com/gilangfauzii", icon: "M12 2L2 7l10 15L22 7z" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15 });
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } };

  return (
    <section id="about" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-alt relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <SectionHeading number={1} title="About" highlight="Me" />
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div>
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed mb-4">Gelar S1 yang saya peroleh dari Fakultas Teknik Informatika, Universitas Pamulang, merupakan landasan pendidikan saya sebagai seorang software engineer. Dengan pengalaman dan keahlian yang saya kembangkan, saya berhasil menciptakan solusi inovatif dalam pengembangan sistem Internet of Things (IoT) dan berkontribusi dalam proyek pengembangan web.</motion.p>
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed">Saya memiliki minat besar dalam bidang teknologi, salah satunya pada pengembangan web dan Internet of Things.</motion.p>
          </div>
          <div className="space-y-4">
            {infoCards.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <motion.div key={item.label} variants={itemVariants}>
                  <Wrapper {...wrapperProps} className={`flex items-center gap-4 bg-surface-card border border-border rounded-xl p-4 transition-colors group ${item.href ? "hover:border-cyan-500/30 cursor-pointer" : "cursor-default"}`}>
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-text text-sm font-medium group-hover:text-cyan-400 transition-colors">{item.value}</p>
                    </div>
                    {item.href && <svg className="w-4 h-4 text-text-muted ml-auto group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
