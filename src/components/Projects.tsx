'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, Globe, Smartphone, Palette, Cpu, Sparkles, Layers, ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('Web Development');

  const categories = [
    { 
      id: 'Web Development', 
      label: language === 'id' ? 'Pengembangan Web' : 'Web Development', 
      icon: Globe 
    },
    { 
      id: 'Mobile Development', 
      label: language === 'id' ? 'Aplikasi Mobile' : 'Mobile Development', 
      icon: Smartphone 
    },
    { 
      id: 'UI/UX Design', 
      label: language === 'id' ? 'Desain UI/UX' : 'UI/UX Design', 
      icon: Palette 
    },
    { 
      id: 'Machine Learning', 
      label: language === 'id' ? 'Machine Learning' : 'Machine Learning', 
      icon: Cpu 
    },
  ] as const;

  const filteredProjects = projects.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Main Section Heading */}
        <SectionHeading>{t('projects.title') || (language === 'id' ? 'Proyek Unggulan' : 'Projects')}</SectionHeading>

        {/* Category Filter Pills */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3.5 mb-16 -mt-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border overflow-hidden ${
                  isActive
                    ? 'text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md shadow-slate-900/15'
                    : 'border-slate-300 dark:border-slate-700/80 bg-slate-100/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Projects 2-Column Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {filteredProjects.map((project, index) => {
              const descriptionText = language === 'id' ? (project.descriptionId || project.description) : project.description;

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-lg shadow-slate-200/50 dark:shadow-black/40 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Preview Banner Container */}
                    <div className="relative h-56 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800/80 flex items-center justify-center">
                      {project.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        /* Styled Modern App UI Mockup Banner */
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 flex flex-col justify-between overflow-hidden">
                          {/* Background Ambient Glow */}
                          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.accent} blur-3xl opacity-20 rounded-full`} />

                          {/* Top Mockup Browser Header */}
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 bg-slate-800/90 px-2.5 py-0.5 rounded-full border border-slate-700 max-w-[200px] truncate">
                              {project.demoLink && project.demoLink !== '#' 
                                ? project.demoLink.replace(/^https?:\/\//, '') 
                                : project.repoLink.replace(/^https?:\/\//, '')}
                            </span>
                          </div>

                          {/* Central App Card Preview Graphic */}
                          <div className="relative z-10 my-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center text-white shadow-sm`}>
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="h-2.5 w-24 bg-slate-700 rounded-full mb-1.5" />
                                <p className="text-[11px] text-slate-400 truncate">
                                  {project.title}
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-1.5">
                              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full w-3/4 bg-gradient-to-r ${project.accent}`} />
                              </div>
                              <div className="h-2 w-1/2 bg-slate-800 rounded-full" />
                            </div>
                          </div>

                          {/* Bottom Metric Pills Mockup */}
                          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/60">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {project.demoLink && project.demoLink !== '#' ? 'Live Deployed' : 'Open Source'}
                            </span>
                            <span className="font-mono text-slate-400 font-medium">{project.tech[0]}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2 tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {descriptionText}
                    </p>
                  </div>

                  {/* Card Footer: Tech Stack Badges + Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Link Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.demoLink && project.demoLink !== '#' ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm hover:scale-105 transition-all"
                          title={project.demoLink}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : project.repoLink && project.repoLink !== '#' ? (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold shadow-sm hover:scale-105 transition-all border border-slate-700"
                          title={project.repoLink}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      ) : null}

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-red-500 hover:text-red-500 dark:hover:border-red-400 dark:hover:text-red-400 hover:scale-105 transition-all shadow-sm"
                      >
                        <span>{language === 'id' ? 'Detail' : 'Details'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Page Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-400 hover:scale-105 transition-all shadow-sm"
          >
            {language === 'id' ? 'Lihat Semua Proyek Lengkap' : 'View All Projects Portfolio'}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}