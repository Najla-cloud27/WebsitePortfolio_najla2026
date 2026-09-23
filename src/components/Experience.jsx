import { motion } from 'framer-motion';
import experienceData from '../data/experience.js';
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from './icons.jsx';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
});

const colors = ['from-primary to-secondary', 'from-secondary to-accent'];

function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              {...fadeUp(i + 1)}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full flex flex-col bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[i % 2]} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-text-secondary/60 shrink-0">
                    EXPERIENCE 0{i + 1}
                  </span>
                  <div className="flex-1 flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
                    <span className="-ml-px w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Present
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg md:text-xl text-white">
                  {exp.role}
                </h3>
                <p className="text-primary text-sm font-medium mt-0.5">
                  {exp.company}
                </p>
                {exp.division && (
                  <p className="text-text-secondary/70 text-xs mt-0.5">{exp.division}</p>
                )}

                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-text-secondary/80 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 flex-grow">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;