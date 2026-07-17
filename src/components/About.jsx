import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const personalInfo = [
  { label: 'Name', value: 'Najla Haura Mumtazah' },
  { label: 'Location', value: 'Karawang, West Java, Indonesia' },
  { label: 'Email', value: 'najlahauramumtazah@gmail.com' },
  { label: 'Status', value: 'Software Engineering Student (TRPL) at IDN Polytechnic' },
];

const githubLink = 'https://github.com/Najla-cloud27';
const linkedinLink = 'https://www.linkedin.com/in/najla-haura-mumtazah-907564373/';

function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            Know Me <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Better</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Who I Am
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I'm an active student in the Software Engineering Technology (TRPL) program at IDN Polytechnic, 
                  and a graduate of Vocational High School majoring in Software Engineering (RPL). 
                  I have a strong passion for building modern, functional, and user-friendly digital products 
                  across web and mobile platforms.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  My interests span across Website Development, Frontend and Backend Development, 
                  as well as Flutter Development. Over the course of my academic journey, 
                  I have developed various projects using Laravel, Flutter, HTML, CSS, JavaScript, 
                  Tailwind CSS, MySQL, and Git.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I'm committed to continuous learning and growth in the tech industry, 
                  and always excited to collaborate on meaningful projects that solve real-world problems.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Personal Info
                </h3>
                <div className="space-y-3 mb-6">
                  {personalInfo.map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-text-secondary text-sm min-w-[100px]">{item.label}</span>
                      <span className="hidden sm:block w-2 h-px bg-white/10" />
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <a
                  href={new URL('../assets/documents/certificates/cv/Cv_Najla_Haura_Mumtazah.pdf', import.meta.url).href}
                  download
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,124,255,0.4)] hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
