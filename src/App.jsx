import { motion, AnimatePresence } from 'framer-motion';
import CosmicCarousel from './components/CosmicCarousel';
import cvPdf from './assets/CV Tech-Unaisah.pdf';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const experiences = [
    {
      role: "Coding Tutor (Online)",
      institution: "PictoBlox for Elementary & Junior High Students",
      year: "2026",
      points: [
        "Conducted introductory coding classes using PictoBlox.",
        "Taught programming logic, simple animations, and block-based programming concepts through interactive activities.",
        "Guided students in understanding coding fundamentals through hands-on practice and project-based learning."
      ],
      icon: "code"
    },
    {
      role: "Mentor",
      institution: "IT Camp, IDN An-Naba Bilingual School",
      year: "2026",
      points: [
        "Served as a mentor in an IT Camp program and taught basic coding concepts using PictoBlox.",
        "Assisted students in understanding programming logic and completing simple coding projects.",
        "Collaborated with fellow mentors to support technology learning activities and student engagement."
      ],
      icon: "users"
    },
    {
      role: "Trainer",
      institution: "Politeknik IDN Mengajar",
      year: "2026",
      points: [
        "Participated in educational outreach programs for partner schools.",
        "Assisted students in understanding technology-related topics and digital learning concepts.",
        "Supported learning activities and encouraged student participation during training sessions."
      ],
      icon: "book"
    },
    {
      role: "Tahsin Teacher",
      institution: "Masjid Jami Al Barkah, Cileungsi",
      year: "2024–2025",
      points: [
        "Taught Tahsin and basic Tajweed to children and teenagers.",
        "Guided students in improving their Quran recitation accuracy and fluency.",
        "Assisted students in developing a better understanding of Tajweed rules."
      ],
      icon: "star"
    },
    {
      role: "President",
      institution: "ISMICS, PKBM Cahaya Sunnah",
      year: "2023–2024",
      points: [
        "Led the planning and execution of various student activities and programs.",
        "Coordinated communication and collaboration among organization members to ensure effective program implementation.",
        "Organized internal school events and collaborated with other institutions on joint activities.",
        "Developed leadership, teamwork, problem-solving, and organizational management skills through student-led initiatives."
      ],
      icon: "crown",
      isFullWidth: true
    }
  ];

  const skills = {
    "Kids Coding & Educational Technology": ["Scratch", "PictoBlox", "RoboMind", "Roblox Creator (Basic)", "Minecraft Education (Basic)", "Tinkercad", "AI PictoBlox", "Block-Based Programming", "Computational Thinking"],
    "Teaching & Communication": ["Coding Mentoring", "Online Tutoring", "Offline Tutoring", "Public Speaking", "Communication", "Student Guidance", "Leadership", "Teamwork", "Adaptability", "Time Management"],
    "Technical Foundation": ["HTML", "CSS", "PHP", "Laravel (Basic)", "Git", "GitHub", "VS Code", "MySQL (Basic)", "Programming Logic"]
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* ================= GLOBAL GLOWING ORBS ================= */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-pink-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-700/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-pink-500/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* ================= NAVBAR FIXED TOP ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0813]/60 backdrop-blur-md border-b border-pink-500/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black">
            <span className="text-white">Unaisah</span>
            <span className="text-pink-400">Profile</span>
          </div>

          <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-2">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">About</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">Education</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">Experience</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">Portfolio</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors px-3 py-1 rounded-full">Contact</a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all md:hidden"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#0B0813]/95 backdrop-blur-md border-b border-pink-500/10 py-6 px-6 flex flex-col gap-4 md:hidden"
            >
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">About</a>
              <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">Education</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">Experience</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">Portfolio</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white transition-colors py-2 text-lg font-medium">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= REVAMPED HERO SECTION (3 KOLOM) ================= */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 min-h-[80vh] pt-24 relative z-10">
          {/* ========== LEFT COLUMN: NAME & TITLE ========== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:text-left"
          >
            <p className="text-pink-300 tracking-widest text-sm mb-2">HI, I'M</p>
            <h1 className="text-6xl lg:text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] my-4">Unaisah</h1>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400 font-bold text-xl lg:text-2xl">Programming Student & Aspiring Coding Mentor</p>
          </motion.div>

          {/* ========== MIDDLE COLUMN: PHOTO & PORTFOLIO BACKGROUND ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center w-full min-h-[400px]"
          >
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[10rem] font-black text-white/5 tracking-widest select-none z-0 pointer-events-none whitespace-nowrap w-full text-center overflow-hidden">PORTFOLIO</p>
            <img 
              src="src/assets/uness.png" 
              alt="Unaisah" 
              className="relative z-10 w-full max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>

          {/* ========== RIGHT COLUMN: DESCRIPTION ========== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-pink-100/70 leading-relaxed text-lg lg:text-xl border-l-2 border-purple-500/30 pl-6">
              Software Engineering student at IDN Polytechnic Bogor with a strong passion for technology education, foundational coding, and youth development through interactive, creative, and fun learning experiences.
            </p>
          </motion.div>
        </section>

        {/* ================= NEW COMBINED ABOUT + SKILLS SECTION ================= */}
        <section id="about" className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* ================= LEFT COLUMN - ABOUT ME ================= */}
            <div className="space-y-8">
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-pink-400 uppercase tracking-[0.3em] font-semibold text-sm"
              >
                GET TO KNOW ME
              </motion.p>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-black text-white glow-text-pink"
              >
                About Me
              </motion.h2>

              {/* Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-pink-200/80 text-lg leading-relaxed"
              >
                I am a 3rd-semester Software Engineering student at IDN Polytechnic Bogor with a deep interest in the intersection of technology and education.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-pink-200/80 text-lg leading-relaxed"
              >
                Besides studying software development, I am actively involved in teaching and mentoring activities. This helps me understand the importance of building logical thinking, creativity, and problem-solving skills from an early age.
              </motion.p>

              {/* Quote Paragraph with Left Border */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-l-4 border-pink-500 pl-6 py-2"
              >
                <p className="text-pink-300 italic text-lg leading-relaxed">
                  I believe that coding is not just about writing programs, but also about training a structured and innovative way of thinking. Through my teaching experience, I continuously strive to develop myself to make a positive contribution to digital education and youth empowerment.
                </p>
              </motion.div>

              {/* Download CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a href={cvPdf} download="CV_Tech_Unaisah.pdf" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* ================= RIGHT COLUMN - SKILLS & TOOLS ================= */}
            <div className="space-y-10">
              {/* Technical Foundation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold mb-4">TECHNICAL FOUNDATION</p>
                <div className="flex flex-wrap gap-3">
                  {skills["Technical Foundation"].map((skill, i) => (
                    <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/10 text-slate-300 text-sm hover:border-pink-500 hover:text-white hover:bg-pink-500/10 transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* EdTech & Kids Coding */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold mb-4">EDTECH & KIDS CODING</p>
                <div className="flex flex-wrap gap-3">
                  {skills["Kids Coding & Educational Technology"].map((skill, i) => (
                    <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/10 text-slate-300 text-sm hover:border-pink-500 hover:text-white hover:bg-pink-500/10 transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Teaching & Communication */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold mb-4">TEACHING & COMMUNICATION</p>
                <div className="flex flex-wrap gap-3">
                  {skills["Teaching & Communication"].map((skill, i) => (
                    <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/10 text-slate-300 text-sm hover:border-pink-500 hover:text-white hover:bg-pink-500/10 transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= EDUCATION SECTION ================= */}
        <section id="education" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-pink-400 uppercase tracking-[0.3em] font-semibold text-sm mb-2">
              MY LEARNING JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glow-text-pink">
              Education
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Gradient Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Timeline Item 1: Politeknik IDN Bogor */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-4 top-6 flex items-center justify-center">
                  <div className="absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75 animate-ping"></div>
                  <div className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></div>
                </div>

                {/* Glassmorphism Card */}
                <div className="bg-purple-950/20 backdrop-blur-md border border-purple-500/10 rounded-2xl p-6 md:p-8 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
                    2025 – Present
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Politeknik IDN Bogor
                  </h3>
                  <p className="text-pink-300 text-md mb-4">
                    Applied Software Engineering Technology
                  </p>
                  <ul className="space-y-2">
                    {["Software Development", "Web Development", "Database Management", "Programming Logic", "Software Engineering Fundamentals"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-pink-200/80">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Timeline Item 2: PKBM Cahaya Sunnah */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-4 top-6 flex items-center justify-center">
                  <div className="absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75 animate-ping"></div>
                  <div className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></div>
                </div>

                {/* Glassmorphism Card */}
                <div className="bg-purple-950/20 backdrop-blur-md border border-purple-500/10 rounded-2xl p-6 md:p-8 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-3">
                    2023 – 2025
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    PKBM Cahaya Sunnah
                  </h3>
                  <p className="text-pink-300 text-md mb-4">
                    Natural Sciences (IPA)
                  </p>
                  <ul className="space-y-2">
                    {["Foundational Science Studies", "Logical and Analytical Thinking", "Active Participation in Student Organization"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-pink-200/80">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-pink-400 uppercase tracking-[0.3em] font-semibold text-sm mb-2">
              MY EXPERIENCE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glow-text-pink">
              Organization & Teaching Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {experiences.map((exp, index) => {
              // Icon selection based on exp.icon
              const renderIcon = () => {
                switch(exp.icon) {
                  case "code":
                    return (
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    );
                  case "users":
                    return (
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    );
                  case "book":
                    return (
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    );
                  case "star":
                    return (
                      <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    );
                  case "crown":
                    return (
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l3.055-3L12 3l3.945-3L19 3l-2 5h-10L5 3zM2 21h20l-1.5-8h-17L2 21z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-purple-950/20 backdrop-blur-md border border-purple-500/10 rounded-2xl p-6 md:p-8 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4 ${exp.isFullWidth ? 'md:col-span-2' : ''}`}
                >
                  {/* Top bar: Icon + Year */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full bg-purple-500/20 text-pink-400 border border-purple-500/30">
                      {renderIcon()}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-300">
                      {exp.year}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  {/* Institution */}
                  <p className="text-pink-300/70">
                    {exp.institution}
                  </p>

                  {/* Points List */}
                  <ul className="space-y-2 text-pink-200/80">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= PORTFOLIO & CERTIFICATIONS (COSMIC CAROUSEL) ================= */}
        <CosmicCarousel />

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-pink">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-pink-200/70 mb-12 max-w-2xl">
                I am actively seeking opportunities to learn, contribute, and grow. Let's collaborate to empower the next generation through interactive coding and technology education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
              <div className="bg-[#07050D] rounded-3xl border border-pink-500/10 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-200/60 text-sm font-medium">Location</h4>
                  <p className="text-white font-semibold">Bogor, West Java, Indonesia</p>
                </div>
              </div>
              <a href="mailto:unaiiunais207@gmail.com" className="bg-[#07050D] rounded-3xl border border-pink-500/10 p-6 flex items-center gap-4 hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-200/60 text-sm font-medium">Email</h4>
                  <p className="text-white font-semibold hover:text-pink-300 transition-colors">unaiiunais207@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/6287837064731" target="_blank" rel="noopener noreferrer" className="bg-[#07050D] rounded-3xl border border-pink-500/10 p-6 flex items-center gap-4 hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 11-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-200/60 text-sm font-medium">WhatsApp</h4>
                  <p className="text-white font-semibold hover:text-pink-300 transition-colors">0878-3706-4731</p>
                </div>
              </a>
              <div className="bg-[#07050D] rounded-3xl border border-pink-500/10 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 013 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-200/60 text-sm font-medium">Availability</h4>
                  <p className="text-white font-semibold">Open for Internship & Mentoring</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-6 pb-12 border-t border-white/10 pt-12"
            >
              <a 
                href="https://wa.me/6287837064731" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-transparent border border-pink-500/40 rounded-full flex items-center justify-center text-pink-300 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 11-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/unaiunaish_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-transparent border border-pink-500/40 rounded-full flex items-center justify-center text-pink-300 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/unaisahhadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-transparent border border-purple-500/40 rounded-full flex items-center justify-center text-purple-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zm2-4a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
              <a 
                href="https://github.com/naiiUnaisz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-transparent border border-white/20 rounded-full flex items-center justify-center text-slate-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-pink-200/60">
          <p>&copy; 2026 Unaisah. Crafted with passion for EdTech.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
