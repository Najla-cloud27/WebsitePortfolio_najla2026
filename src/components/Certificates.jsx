import { motion } from 'framer-motion';
import certificatesData from '../data/certificates.js';

const getPdfUrl = (filePath) => {
  return new URL(`../assets/${filePath}`, import.meta.url).href;
};

const categoryIcons = {
  Frontend: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  Programming: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
};

const getCategoryIcon = (cat) => categoryIcons[cat] || categoryIcons.Frontend;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function Certificates() {
  return (
    <section id="certificates" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {certificatesData.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-sm text-white leading-snug line-clamp-2">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-text-secondary text-xs mt-0.5">{cert.issuer}</p>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    {cert.category && (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary">
                        {cert.category}
                      </span>
                    )}
                    {cert.date && (
                      <span className="text-text-secondary/60">{cert.date}</span>
                    )}
                  </div>

                  <a
                    href={getPdfUrl(cert.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 text-primary text-xs font-semibold hover:from-primary hover:to-secondary hover:text-white hover:shadow-[0_0_15px_rgba(79,124,255,0.3)] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    View PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
