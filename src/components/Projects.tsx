'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExternalLink from './icons/ExternalLink';
import Github from './icons/Github';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

const projects = [
  {
    title: 'Filzy',
    description: 'Modern movie & TV show discovery platform with interactive UI, real-time data fetching, and seamless user experience.',
    longDescription: 'Filzy is a comprehensive movie and TV show discovery application. Built to solve the problem of overwhelming choices, it offers a clean, distraction-free interface to find what you want to watch next. The biggest challenge was optimizing the rendering of long lists of high-quality images and handling complex API states smoothly. I utilized React Query for caching and Framer Motion for providing immediate, fluid feedback during navigation.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'FadCV',
    description: 'Professional CV builder tool that allows users to create, customize, and download beautiful resumes easily.',
    longDescription: 'FadCV aims to simplify the resume creation process. Users often struggle with formatting and ATS (Applicant Tracking System) compatibility. By providing real-time preview and export to PDF functionality using client-side rendering, FadCV ensures privacy and speed. Implementing the PDF generation while maintaining perfect CSS pixel-to-point translation was the core technical hurdle, solved by carefully orchestrating React rendering into an off-screen canvas.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    demoLink: '#',
    repoLink: '#',
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.title}`}
              onClick={() => setSelectedProject(project)}
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden relative"
            >
              {/* Subtle gradient highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div layoutId={`image-${project.title}`} className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-xl mb-6 overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-50 dark:group-hover:bg-slate-600 transition-colors duration-300">
                <span className="text-sm font-medium tracking-wider uppercase opacity-50">Project Screenshot</span>
              </motion.div>
              
              <motion.h3 layoutId={`title-${project.title}`} className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                {project.title}
              </motion.h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 h-16">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-100 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-50 dark:border-slate-700">
                <span className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                  View Case Study →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 z-20"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-10 flex-1">
                <motion.div layoutId={`image-${selectedProject.title}`} className="aspect-video w-full bg-slate-100 dark:bg-slate-700 rounded-xl mb-8 flex items-center justify-center text-slate-400">
                   <span className="text-sm font-medium tracking-wider uppercase opacity-50">Project Screenshot</span>
                </motion.div>

                <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {selectedProject.title}
                </motion.h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Overview</h4>
                    <p>{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Problem & Architecture</h4>
                    <p>{selectedProject.longDescription}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <a href={selectedProject.demoLink} className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:bg-red-700">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={selectedProject.repoLink} className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 px-6 py-2.5 rounded-full font-medium transition-all">
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}