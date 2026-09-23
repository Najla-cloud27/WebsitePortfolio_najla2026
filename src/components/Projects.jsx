import { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.js';
import ProjectCarousel from './ProjectCarousel.jsx';
import ProjectDetailModal from './ProjectDetailModal.jsx';
import { GithubIcon, ExternalLinkIcon, GridIcon } from './icons.jsx';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
});

function ProjectLinks({ project, small = false }) {
  const links = [];
  if (project.github && project.github !== '#') links.push('github');
  if (project.demo && project.demo !== '#') links.push('demo');

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.includes('github') && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-2 rounded-xl border border-white/20 text-text-secondary hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all duration-300 ${
            small ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'
          }`}
        >
          <GithubIcon className="w-4 h-4" />
          GitHub
        </a>
      )}
      {links.includes('demo') && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-[0_0_25px_rgba(79,124,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 px-5 py-2.5"
        >
          Live Demo
          <ExternalLinkIcon className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project, index, onOpen }) {
  const reversed = index % 2 === 1;
  return (
    <motion.div {...fadeUp(index)} className="group relative">
      <div
        className={`relative grid lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 ${
          reversed ? 'lg:grid-flow-dense' : ''
        }`}
      >
        <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
          <ProjectCarousel images={project.images} alt={project.title} isMobileApp={project.isMobileApp} />
        </div>

        <div className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-semibold uppercase tracking-wider">
              Featured
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ProjectLinks project={project} />
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <GridIcon className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div {...fadeUp(index)} className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen(project);
          }
        }}
        className="relative bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
      >
        <ProjectCarousel images={project.images} alt={project.title} isMobileApp={project.isMobileApp} rounded="rounded-none" />

        <div className="p-5 md:p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-heading font-bold text-lg md:text-xl text-white">
              {project.title}
            </h3>
          </div>
          <span className="text-primary/80 text-[10px] font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-medium">
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} small />
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            My Works
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto mt-4">
            A selection of projects I've built across web and mobile — click any project to see more.
          </p>
        </motion.div>

        <div className="space-y-8">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={i + 1}
              onOpen={setSelected}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={featured.length + i + 1}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Projects;