import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel.jsx';
import { CloseIcon, GithubIcon, ExternalLinkIcon } from './icons.jsx';

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = original;
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[#060B1F]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#10162E]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] my-6"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <CloseIcon className="w-4 h-4" />
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-5 pr-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                  {project.title}
                </h3>
              </div>

              <div className="w-full mb-6">
                <ProjectCarousel
                  images={project.images}
                  alt={project.title}
                  isMobileApp={project.isMobileApp}
                  rounded="rounded-xl"
                />
              </div>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-text-secondary hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all duration-300 text-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-[0_0_25px_rgba(79,124,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Live Demo
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;