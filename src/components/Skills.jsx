import { motion } from 'framer-motion';
import skillsData from '../data/skills.js';

const skillIcons = import.meta.glob('../assets/logos/*.svg', { eager: true, query: '?url', import: 'default' });

const getSkillIcon = (name) => {
  const filename = name.toLowerCase().replace(/\s+/g, '');
  for (const [path, url] of Object.entries(skillIcons)) {
    if (path.toLowerCase().includes(filename)) return url;
  }
  return null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' },
  }),
};

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            My Toolkit
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5 rounded-xl bg-[#10162E]/80 border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center p-1.5">
                    {getSkillIcon(skill.icon) ? (
                      <img src={getSkillIcon(skill.icon)} alt={skill.name} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xs font-bold text-text-secondary">{skill.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                    <span className="hidden md:block text-[10px] text-text-secondary/60">{skill.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
