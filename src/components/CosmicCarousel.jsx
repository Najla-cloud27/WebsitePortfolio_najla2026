import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dataProjects = [
  {
    id: 1,
    title: "Educational Game & IoT Project",
    category: "EdTech / Scratch / PictoBlox",
    description: "An interactive educational platform combining Scratch, PictoBlox, and IoT elements. Specifically designed to teach elementary and junior high school students foundational programming logic, computational thinking, and simple animations through engaging, block-based game development.",
    github: null
  },
  {
    id: 2,
    title: "Cileungsi Foam Bed E-Commerce",
    category: "Web Development",
    description: "A responsive e-commerce web application tailored for a local foam bed business in Cileungsi. It features an interactive product catalog, seamless landing page, and dynamic UI to enhance digital presence and user experience.",
    github: "https://github.com/naiiUnaisz/project-web-toko-KasurBusa-Unaisah-250458302059.git"
  },
  {
    id: 3,
    title: "Al-Markaz Mosque Web Portal",
    category: "Web Development",
    description: "A community-focused web portal developed for Mosque management. It provides transparency and community engagement by displaying prayer schedules, religious study event (kajian) announcements, and transparent information for the congregation.",
    github: "https://github.com/naiiUnaisz/website-masjid.git"
  },
  {
    id: 4,
    title: "MindMate: Task & Wellness App",
    category: "Mobile App / Flutter / Laravel",
    description: "A cross-platform mobile application built with Flutter, Laravel, and MySQL. Serving as a smart to-do list and task planner, it is specifically designed to help students manage their academic schedules while maintaining their mental well-being.",
    github: "https://github.com/naiiUnaisz/mindmate-flutter.git"
  },
  {
    id: 5,
    title: "M-Tugas Academic Management",
    category: "Web Development / Laravel",
    description: "A comprehensive academic task management system built with Laravel. It assists students in organizing assignments, tracking submission deadlines, and managing their educational workflow efficiently.",
    github: "https://github.com/naiiUnaisz/web-ManajemeTugas-laraver.git"
  }
];

const dataCertificates = [
  {
    id: 'cert-1',
    title: 'EdTech Technology Trainer Certification',
    category: 'Technology & EdTech',
    desc: 'Comprehensive certification in mastering modern technology curriculum (AI, IoT, Robotics, Scratch, Roblox Creator, Minecraft) specifically designed for teaching and training young generations.',
    issuer: 'IDN Education Directorate'
  },
  {
    id: 'cert-2',
    title: 'Basic Artificial Intelligence (AI) Specialization',
    category: 'Technology & EdTech',
    desc: 'Graduated with competency verification in understanding basic artificial intelligence concepts, machine learning workflows, and applying modern technology to solve problems.',
    issuer: 'Dicoding Indonesia (IDCamp)'
  },
  {
    id: 'cert-3',
    title: 'Masterclass Web Development & UI Design',
    category: 'Technology & EdTech',
    desc: 'Achieved very satisfactory grade (A) in designing and structuring modern, responsive web application interfaces using HTML5, CSS3, and JavaScript layout algorithms.',
    issuer: 'Skillpedia Indonesia'
  },
  {
    id: 'cert-4',
    title: 'Fundamental Front-End Developer Certification',
    category: 'Technology & EdTech',
    desc: 'Industry-standard recognition of technical competence in building semantic, accessible, and responsive web layout structures using basic HTML standards.',
    issuer: 'Skilvul Academy'
  },
  {
    id: 'cert-5',
    title: '2nd Place Arabic Public Speaking Championship',
    category: 'Islamic Studies & Academics',
    desc: 'Award for persuasive communication skills, articulate language rhetoric, and high-level confidence in formal public speaking.',
    issuer: 'SMAI Cahaya Sunnah PKBM'
  },
  {
    id: 'cert-6',
    title: 'Mumtaz: Hadith Arbain Munaqosyah Certification',
    category: 'Islamic Studies & Academics',
    desc: 'Graduated with Mumtaz (Perfect) predicate for fluent memorization, contextual understanding, and linguistic analysis of 42 pillars of An-Nawawi Hadiths.',
    issuer: 'SMAI Cahaya Sunnah'
  },
  {
    id: 'cert-7',
    title: 'Jayyid Jiddan: Quran Memorization Credential',
    category: 'Islamic Studies & Academics',
    desc: 'Passed systematic testing (munaqosyah) of Quran memorization (Juz 1-7, 26-30) with Very Good (Jayyid Jiddan) predicate, showing high commitment and discipline.',
    issuer: 'SMAI Cahaya Sunnah'
  },
  {
    id: 'cert-8',
    title: 'Legal & Hadith Umdatul Ahkam Understanding Certification',
    category: 'Islamic Studies & Academics',
    desc: 'Academic recognition for deepening Islamic jurisprudence and law proven through systematic matn memorization and language analysis with Good (Jayyid) predicate.',
    issuer: 'SMAI Cahaya Sunnah'
  },
  {
    id: 'cert-9',
    title: 'Best Graduate Advanced Arabic Grammar',
    category: 'Islamic Studies & Academics',
    desc: 'Achieved final grade of 95 in mastering systematic grammar, vocabulary syntax, and functional grammatical rules (Nahwu & Shorof) based on Durusul Lughoh Book Vol 1.',
    issuer: 'Rumaysho Academy'
  }
];

export default function CosmicCarousel() {
  const [activeTab, setActiveTab] = useState('projects');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // Set activeImage when selectedCard changes
  useEffect(() => {
    if (selectedCard && selectedCard.images && selectedCard.images.length > 0) {
      setActiveImage(selectedCard.images[0]);
    } else if (selectedCard && (selectedCard.thumbnail || selectedCard.image)) {
      setActiveImage(selectedCard.thumbnail || selectedCard.image);
    } else {
      setActiveImage(null);
    }
  }, [selectedCard]);

  const currentItems = activeTab === 'projects' ? dataProjects : dataCertificates;

  // Deteksi Ukuran Layar HP secara Real-Time
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset Index saat berpindah Tab
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  // Drag Gesture Handler untuk Touch Screen HP
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Rumus Matematika Lingkaran Adaptif (Mencegah Overload & Support Mobile Carousel)
  const getCardStyle = (index) => {
    const total = currentItems.length;
    if (total === 0) return {};

    // Hitung jarak sirkuler terpendek dari currentIndex ke index kartu ini
    let diff = index - currentIndex;
    while (diff > total / 2) diff -= total;
    while (diff <= -total / 2) diff += total;

    // 1. KARTU TENGAH (AKTIF)
    if (diff === 0) {
      return {
        rotate: 0,
        y: isMobile ? -15 : -45,
        x: 0,
        scale: isMobile ? 1.05 : 1.1,
        zIndex: 30,
        opacity: 1,
        visible: true,
        glow: 'shadow-[0_0_35px_rgba(236,72,153,0.35)] border-pink-500/50'
      };
    }

    // 2. KARTU SEBELAH KIRI
    if (diff === -1 || (total === 2 && index !== currentIndex && currentIndex === 0)) {
      return {
        rotate: isMobile ? -8 : -15,
        y: isMobile ? 15 : 25,
        x: isMobile ? -55 : -130,
        scale: isMobile ? 0.8 : 0.9,
        zIndex: 10,
        opacity: isMobile ? 0.45 : 0.35,
        visible: true,
        glow: 'border-white/5 shadow-none'
      };
    }

    // 3. KARTU SEBELAH KANAN
    if (diff === 1 || (total === 2 && index !== currentIndex && currentIndex === 1)) {
      return {
        rotate: isMobile ? 8 : 15,
        y: isMobile ? 15 : 25,
        x: isMobile ? 55 : 130,
        scale: isMobile ? 0.8 : 0.9,
        zIndex: 10,
        opacity: isMobile ? 0.45 : 0.35,
        visible: true,
        glow: 'border-white/5 shadow-none'
      };
    }

    // 4. KARTU LAINNYA (Sembunyikan agar tidak menumpuk / overload!)
    return {
      rotate: 0,
      y: 100,
      x: 0,
      scale: 0,
      zIndex: 0,
      opacity: 0,
      visible: false,
      glow: 'none'
    };
  };

  return (
    <section id="portfolio" className="py-10 md:py-20 relative">
      {/* Background Grid & Glowing Orbs (Cosmic Background) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-pink-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-700/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Navigation Tabs */}
        <div className="flex bg-purple-950/40 backdrop-blur-md p-1 rounded-full border border-purple-500/20 mb-10 max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full text-2xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-pink-500/25'
                : 'text-pink-200/70 hover:text-white'
            }`}
          >
            Portfolio Projects
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full text-2xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'certificates'
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-pink-500/25'
                : 'text-pink-200/70 hover:text-white'
            }`}
          >
            Certifications & Credentials
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-black text-center text-white mb-2 tracking-wide">
          {activeTab === 'projects' ? 'FEATURED WORKS' : 'HONORS & CREDENTIALS'}
        </h2>
        <p className="text-pink-300/70 text-3xs md:text-sm tracking-widest uppercase mb-12 md:mb-16 text-center px-4">
          {activeTab === 'projects' ? 'Interactive Coding & Software Showcase' : 'Academic & Islamic Studies Certificates'}
        </p>

        {/* --- CAROUSEL MAIN CONTAINER --- */}
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] md:min-h-[460px] relative select-none">

          {/* Cosmic Path Circle Line */}
          <div className="absolute top-[160px] md:top-[260px] w-[95%] md:w-[80%] h-[200px] md:h-[400px] border-t-2 border-dashed border-pink-500/10 rounded-[50%] pointer-events-none"></div>

          {/* Cards Frame */}
          <div className="flex items-center justify-center w-full h-[260px] md:h-[380px] relative overflow-visible">
            {currentItems.map((item, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              if (!style.visible) return null;

              return (
                <motion.div
                  key={item.id}
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    rotate: style.rotate,
                    y: style.y,
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  onClick={() => isActive ? setSelectedCard(item) : setCurrentIndex(index)}
                  className={`absolute rounded-[1.8rem] md:rounded-[2rem] cursor-pointer overflow-hidden backdrop-blur-md bg-purple-950/30 border ${style.glow} transition-shadow duration-500 flex flex-col group touch-pan-y`}
                  style={{
                    zIndex: style.zIndex,
                    width: isMobile ? '150px' : '280px',
                    height: isMobile ? '210px' : '360px'
                  }}
                >
                  {/* Full image bleed container */}
                  <div className="relative w-full h-full overflow-hidden">
                    {(item.thumbnail || item.image) ? (
                      <img
                        src={item.thumbnail || item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-purple-800/80" />
                    )}
                    {/* Glass dark overlay with gradient bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d071b] via-[#0d071b]/40 to-transparent"></div>

                    {/* Interactive Click Indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-purple-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs md:text-xl shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                          ✨
                        </div>
                        <span className="text-white font-semibold text-[8px] md:text-xs mt-2 md:mt-3 tracking-widest uppercase">Click to View</span>
                      </div>
                    )}

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-3 md:p-6 flex flex-col justify-end">
                      <span className="text-[7px] md:text-xs font-bold text-pink-400 uppercase tracking-widest mb-0.5 inline-block">
                        {item.category || item.issuer}
                      </span>
                      <h3 className="text-[10px] md:text-lg font-bold text-white leading-tight tracking-wide line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-5 mt-6 md:mt-10 relative z-40">
            <button
              onClick={handlePrev}
              className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-purple-950/40 border border-purple-500/20 text-pink-300 hover:text-white hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 flex items-center justify-center text-xs md:text-lg"
            >
              ←
            </button>
            <span className="text-pink-300/60 font-semibold tracking-wider text-2xs md:text-sm">
              {currentIndex + 1} / {currentItems.length}
            </span>
            <button
              onClick={handleNext}
              className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-purple-950/40 border border-purple-500/20 text-pink-300 hover:text-white hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 flex items-center justify-center text-xs md:text-lg"
            >
              →
            </button>
          </div>
          {isMobile && (
            <p className="text-pink-300/40 text-[9px] mt-2 italic tracking-wide">
              * Swipe left or right to rotate cards
            </p>
          )}
        </div>
      </div>

      {/* --- PRESTIGE LIGHTBOX DETAIL MODAL (Pop-Up) --- */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d071b]/95 backdrop-blur-xl flex items-center justify-center p-4 pt-24 pb-10"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#140F22]/95 border border-purple-500/30 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.3)] flex flex-col max-h-[80vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 shadow-lg"
              >
                ✕
              </button>

              {/* Large Image Container */}
              <div className="w-full h-40 md:h-80 overflow-hidden relative border-b border-purple-500/10">
                {activeImage ? (
                  <img src={activeImage} alt={selectedCard.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-purple-800/80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F22] via-[#140F22]/20 to-transparent"></div>
              </div>

              {/* Image Gallery (if multiple images) */}
              {selectedCard.images && selectedCard.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-3 md:p-4 border-b border-purple-500/10">
                  {selectedCard.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Gallery ${idx}`}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${activeImage === img ? 'border-2 border-pink-500 opacity-100 shadow-[0_0_10px_rgba(236,72,153,0.5)]' : 'border border-white/10 opacity-50 hover:opacity-100'}`}
                    />
                  ))}
                </div>
              )}

              {/* Card Detail Information */}
              <div className="p-5 md:p-10 flex flex-col">
                <span className="text-[9px] md:text-xs font-black text-pink-400 uppercase tracking-widest mb-1 inline-block">
                  {selectedCard.category || `ISSUED BY: ${selectedCard.issuer}`}
                </span>

                <h3 className="text-lg md:text-3xl font-extrabold text-white leading-tight mb-2 md:mb-3.5 tracking-wide">
                  {selectedCard.title}
                </h3>

                <p className="text-pink-100/70 text-xs md:text-base leading-relaxed mb-4 md:mb-6">
                  {selectedCard.description || selectedCard.desc}
                </p>

                {/* Tech Pills (for projects only) */}
                {selectedCard.tags && (
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                    {selectedCard.tags.map((tag) => (
                      <span key={tag} className="text-[8px] md:text-xs font-medium px-2 py-1 md:px-3.5 md:py-1.5 rounded-full border border-purple-500/20 bg-purple-950/40 text-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub Button (conditional) */}
                {selectedCard.github && (
                  <a
                    href={selectedCard.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
