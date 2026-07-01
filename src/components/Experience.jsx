import { motion } from 'framer-motion';

const experience = {
  institution: 'Disdikpora Karawang',
  division: 'General Affairs and Personnel Division (Kasubbag Umum dan Kepegawaian)',
  position: 'Administrative Staff Intern',
  period: 'PKL Period',
  location: 'Karawang, West Java',
  responsibilities: [
    'Managed visitor administration records and guest book documentation.',
    'Assisted in daily office administration tasks and coordination.',
    'Updated and maintained administrative data and filing systems.',
    'Organized and archived official documents for personnel affairs.',
    'Supported daily operational activities across the general affairs division.',
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="relative group max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {experience.position}
                </h3>
                <p className="text-primary text-sm font-medium mt-0.5">
                  {experience.institution}
                </p>
                <p className="text-text-secondary text-xs mt-0.5">
                  {experience.division}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {experience.responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 2}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
