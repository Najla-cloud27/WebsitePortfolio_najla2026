import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from './icons.jsx';

function ProjectCarousel({ images, alt = 'Project screenshot', isMobileApp = false, rounded = 'rounded-2xl' }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered || !images || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, images?.length]);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  const resolvedImages = images.map((img) => new URL(`../assets/${img}`, import.meta.url).href);

  const goPrev = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const goNext = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className={`group relative w-full overflow-hidden bg-[#060B1F]/80 ${rounded}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full ${isMobileApp ? 'aspect-[9/16] max-h-[480px]' : 'aspect-video'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={resolvedImages[current]}
            alt={`${alt} - ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full ${isMobileApp ? 'object-contain p-4 md:p-6' : 'object-cover'}`}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {isMobileApp && (
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#060B1F]/60 to-transparent pointer-events-none" />
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/70 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary/70 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-5' : 'bg-white/30 w-1.5 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-[10px] font-medium">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default ProjectCarousel;