'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export default function Projects() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading className="!mb-0">{t('projects.title')}</SectionHeading>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start"
            >
              <Link 
                href={`/projects/${project.slug}`}
                className="group block h-full bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-red-500/10 dark:hover:shadow-slate-900/50 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                {/* Banner Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center mix-blend-multiply dark:mix-blend-screen opacity-30">
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`} />
                      <span className="text-7xl font-black text-slate-300 dark:text-slate-700 tracking-tighter">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-sm font-medium flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Lihat Detail <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded-full uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-[10px] text-slate-400 font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium hover:underline underline-offset-4"
          >
            Lihat semua proyek
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}