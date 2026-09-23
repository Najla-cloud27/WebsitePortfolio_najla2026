import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/profile/logo-nh.png';
import { navLinks } from '../data/site.js';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const handleScrollSpy = () => {
      let current = '#home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = `#${id}`;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = `#${ids[ids.length - 1]}`;
      }
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('resize', handleScrollSpy);
    handleScrollSpy();
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('resize', handleScrollSpy);
    };
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060B1F]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group" aria-label="Najla Haura Mumtazah - Home">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-bold text-white text-sm md:text-base shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
              <img src={logo} alt="NH" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white text-sm md:text-base leading-tight">
                Najla Haura
              </div>
              <div className="text-[10px] md:text-xs text-text-secondary tracking-wider">
                Website Developer • Flutter UI
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setActiveLink(link.href);
                }}
                className={`relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.href ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/10 ring-1 ring-white/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                scrollTo('#contact');
              }}
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(79,124,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#060B1F]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    scrollTo(link.href);
                    setActiveLink(link.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? 'text-white bg-white/10 ring-1 ring-white/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;