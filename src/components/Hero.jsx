import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { siteInfo, cvUrl, profileImg } from '../data/site.js';
import {
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
  DownloadIcon,
  ArrowRightIcon,
} from './icons.jsx';

const logoUrls = import.meta.glob('../assets/logos/*.svg', { eager: true, query: '?url', import: 'default' });

const getLogo = (file) => logoUrls[`../assets/logos/${file}`] || null;

const techOrbit = [
  { name: 'HTML', icon: 'html.svg' },
  { name: 'CSS', icon: 'css.svg' },
  { name: 'JavaScript', icon: 'javascript.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'Flutter', icon: 'flutter.svg' },
  { name: 'Laravel', icon: 'laravel.svg' },
  { name: 'PHP', icon: 'php.svg' },
  { name: 'MySQL', icon: 'mysql.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'GitHub', icon: 'github.svg' },
  { name: 'Postman', icon: 'postman-icon.svg' },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
});

const socialLinks = [
  { name: 'GitHub', url: siteInfo.github, icon: <GithubIcon /> },
  { name: 'LinkedIn', url: siteInfo.linkedin, icon: <LinkedinIcon /> },
  { name: 'Email', url: siteInfo.emailMailto, icon: <EmailIcon /> },
  { name: 'WhatsApp', url: siteInfo.whatsapp, icon: <WhatsappIcon /> },
];

function PortraitOrbit() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const photoX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const photoY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const orbitX = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const orbitY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="hero-orbit relative shrink-0"
      style={{ width: 'var(--orbit-box)', height: 'var(--orbit-box)' }}
    >
      {/* Soft radial glow behind the photo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.32),rgba(124,77,255,0.16)_45%,transparent_70%)] blur-2xl pointer-events-none"
        style={{ width: 'calc(var(--photo-size) * 1.6)', height: 'calc(var(--photo-size) * 1.6)' }}
      />

      {/* Rotating orbit ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20 animate-[spin_48s_linear_infinite] pointer-events-none"
        style={{ width: 'calc(var(--orbit-r) * 2)', height: 'calc(var(--orbit-r) * 2)' }}
      />

      {/* Orbiting tech chips */}
      <div className="absolute inset-0 animate-[spin_48s_linear_infinite]">
        {techOrbit.map((tech, i) => {
          const angle = (i / techOrbit.length) * 360;
          const url = getLogo(tech.icon);
          return (
            <div
              key={tech.name}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(calc(var(--orbit-r) * -1))` }}
            >
              <div className="animate-[spin-reverse_48s_linear_infinite]">
                <div
                  className="rounded-full bg-[#10162E]/85 border border-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-[0_6px_22px_rgba(0,0,0,0.4)] hover:border-primary/50 transition-colors duration-300"
                  style={{ width: 'var(--chip)', height: 'var(--chip)' }}
                >
                  {url ? (
                    <img src={url} alt={tech.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-[10px] font-bold text-text-secondary">{tech.name[0]}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo with float + parallax */}
      <motion.div
        style={{ x: photoX, y: photoY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
            style={{ width: 'calc(var(--photo-size) + 34px)', height: 'calc(var(--photo-size) + 34px)' }}
          />
          <div
            className="relative rounded-full overflow-hidden ring-1 ring-white/15 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            style={{ width: 'var(--photo-size)', height: 'var(--photo-size)' }}
          >
            <img
              src={profileImg}
              alt="Najla Haura Mumtazah"
              className="w-full h-full object-cover object-[50%_15%]"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#060B1F]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-1 right-3 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
            <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75v6.75M6.75 6.75h6.75M6.75 6.75l11.25 11.25" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-12 lg:pb-16 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid items-center gap-12 lg:gap-10 xl:gap-16 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-6 lg:mb-7">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to Internship, Freelance &amp; Collaboration
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(1)}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl text-white leading-[1.08] mb-3"
            >
              Najla Haura
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Mumtazah
              </span>
            </motion.h1>

            <motion.div {...fadeUp(2)} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-5">
              <span className="text-lg sm:text-xl xl:text-2xl text-white font-medium">Website Developer</span>
              <span className="text-primary hidden sm:inline-block">•</span>
              <span className="text-lg sm:text-xl xl:text-2xl text-text-secondary font-medium">Flutter UI Developer</span>
            </motion.div>

            <motion.p {...fadeUp(3)} className="text-text-secondary text-sm md:text-base lg:text-[17px] max-w-[34rem] mb-7 lg:mb-8 leading-relaxed">
              Building clean, functional, and user-friendly digital products across web and mobile —
              from modern frontend interfaces to Laravel-powered web applications.
            </motion.p>

            <motion.div {...fadeUp(4)} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-7 lg:mb-8">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(79,124,255,0.5)] hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                View My Projects
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href={cvUrl}
                download
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Download Resume
                <DownloadIcon className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(5)} className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-text-secondary text-xs font-medium uppercase tracking-widest">Find me</span>
              <span className="w-10 h-px bg-white/10" />
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(3)} className="flex justify-center lg:justify-end">
            <PortraitOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;