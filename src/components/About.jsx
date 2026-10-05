import { motion } from 'framer-motion';
import { siteInfo, cvUrl, profileImg } from '../data/site.js';
import education from '../data/education.js';
import { GithubIcon, LinkedinIcon, DownloadIcon, MapPinIcon } from './icons.jsx';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
});

const personalInfo = [
  { label: 'Location', value: 'Karawang, West Java, Indonesia' },
  { label: 'Email', value: siteInfo.email },
  { label: 'Focus', value: 'Frontend & UI Development' },
];

const interests = [
  'Website Development',
  'Frontend Development',
  'UI Development',
  'Flutter UI Development',
];

function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            Get to Know{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Profile card */}
          <motion.div {...fadeUp(1)} className="group relative order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative h-full bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/30 opacity-60 blur-md" />
                <div className="relative w-32 h-32 rounded-[1.7rem] overflow-hidden border-2 border-white/10 shadow-lg">
                  <img src={profileImg} alt={siteInfo.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-white">{siteInfo.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{siteInfo.role}</p>

              <div className="flex items-center justify-center gap-1.5 text-text-secondary text-xs mt-3">
                <MapPinIcon className="w-3.5 h-3.5" />
                {siteInfo.location}
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a
                  href={siteInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  title="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href={siteInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  title="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>

              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(79,124,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 mt-6"
              >
                <DownloadIcon className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div {...fadeUp(2)} className="order-1 lg:order-2">
            <div className="h-full bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Who I Am
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I&apos;m currently a third-semester student at{' '}
                <span className="text-white font-medium">Politeknik IDN Bogor</span>, studying D4
                Teknologi Rekayasa Perangkat Lunak (TRPL). Before that, I completed a Rekayasa
                Perangkat Lunak (RPL) program at SMK IT Assalam Karawang.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                My focus is website development, particularly frontend development and UI. I build
                interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS, and work with PHP,
                Laravel, and MySQL on the application and data side. I also build mobile UI with
                Flutter.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Most of my hands-on experience comes from building website and application projects:
                responsive interfaces, CRUD features, and database-driven applications. My
                internships in legal administration and in general affairs also taught me how to keep
                documents and files organised, and I carry that same habit into how I structure a
                project.
              </p>

              {/* Education */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-6">
                <h4 className="font-heading font-bold text-lg text-white mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-white font-semibold text-sm leading-snug">
                            {item.school}
                          </div>
                          <span className="text-primary text-xs font-medium whitespace-nowrap shrink-0 mt-0.5">
                            {item.period}
                          </span>
                        </div>
                        {item.degree && (
                          <div className="text-text-secondary text-sm mt-0.5">
                            {item.degree}
                          </div>
                        )}
                        {item.note && (
                          <div className="text-text-secondary/70 text-xs mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <h4 className="font-heading font-bold text-lg text-white mb-3">
                Focus &amp; Interests
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Quick facts */}
              <div className="grid sm:grid-cols-3 gap-3">
                {personalInfo.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-text-secondary/60 mb-1">
                      {item.label}
                    </div>
                    <div className="text-white text-xs font-medium leading-snug break-words">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;