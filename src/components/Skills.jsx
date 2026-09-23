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

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: i * 0.06, ease: 'easeOut' },
});

const categories = [
  { key: 'Frontend', label: 'Frontend', accent: 'from-primary to-secondary', blurb: 'Interface, responsiveness, and modern web UI' },
  { key: 'Backend', label: 'Backend', accent: 'from-secondary to-accent', blurb: 'Server-side logic, APIs, and databases' },
  { key: 'Mobile', label: 'Mobile', accent: 'from-accent to-primary', blurb: 'Cross-platform mobile UI with Flutter' },
  { key: 'Tools', label: 'Tools', accent: 'from-primary/70 to-secondary', blurb: 'Development, collaboration, and productivity' },
];

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            My Toolkit
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            Tech{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto mt-4">
            Technologies and tools I use to build and ship my projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => {
            const items = skillsData.filter((s) => s.category === cat.key);
            return (
              <motion.div key={cat.key} {...fadeUp(ci + 1)} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-lg shrink-0`}>
                      {cat.key === 'Frontend' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                      )}
                      {cat.key === 'Backend' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      )}
                      {cat.key === 'Mobile' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      )}
                      {cat.key === 'Tools' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.854 5.855a2.25 2.25 0 01-3.182-3.182l5.855-5.854M16.5 12l1.5-1.5a4.5 4.5 0 00-6.364-6.364L9 6.75M12 16.5l-1.5 1.5a4.5 4.5 0 106.364 6.364L21 18" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">{cat.label}</h3>
                      <p className="text-text-secondary/70 text-xs">{cat.blurb}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill, i) => (
                      <motion.div
                        key={skill.id}
                        {...fadeUp(ci * 4 + i + 1)}
                        className="group/skill"
                      >
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover/skill:border-primary/30 transition-all duration-300">
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center p-1">
                              {getSkillIcon(skill.name) ? (
                                <img src={getSkillIcon(skill.name)} alt={skill.name} className="w-full h-full object-contain" />
                              ) : (
                                <span className="text-[10px] font-bold text-text-secondary">{skill.name[0]}</span>
                              )}
                            </div>
                            <span className="text-white text-sm font-medium whitespace-nowrap">{skill.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;