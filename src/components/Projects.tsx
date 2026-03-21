'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExternalLink from './icons/ExternalLink';
import Github from './icons/Github';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: 'Filzy',
    description: 'Modern movie & TV show discovery platform with interactive UI, real-time data fetching, and seamless user experience.',
    longDescription: 'Filzy is a comprehensive movie and TV show discovery application. Built to solve the problem of overwhelming choices, it offers a clean, distraction-free interface to find what you want to watch next. The biggest challenge was optimizing the rendering of long lists of high-quality images and handling complex API states smoothly.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'FadCV',
    description: 'Professional CV builder tool that allows users to create, customize, and download beautiful resumes easily.',
    longDescription: 'FadCV aims to simplify the resume creation process. Users often struggle with formatting and ATS compatibility. By providing real-time preview and export to PDF functionality using client-side rendering, FadCV ensures privacy and speed.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Project Alpha',
    description: 'A modern web application template with authentication, dashboard, and data visualization built for rapid development.',
    longDescription: 'Project Alpha is a production-ready starter template designed to accelerate web development. It includes an authentication system, role-based access, a comprehensive dashboard with charts, and a clean component library.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'ShopFlow',
    description: 'Full-featured e-commerce platform with cart management, payment integration, and admin dashboard.',
    longDescription: 'ShopFlow is a complete e-commerce solution featuring product management, a smooth cart flow, Stripe payment integration, and a powerful admin dashboard. Focused on performance and conversion rate optimization.',
    tech: ['Laravel', 'Inertia.js', 'Vue.js', 'MySQL'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'TaskBoard',
    description: 'Kanban-style project management app with drag-and-drop, real-time collaboration, and team workspaces.',
    longDescription: 'TaskBoard brings real-time collaborative project management to teams of all sizes. Powered by WebSockets, changes sync instantly across all users. Features include drag-and-drop cards, labels, due dates, file attachments, and detailed activity logs.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'WeatherNow',
    description: 'Elegant weather forecast application with location detection, hourly and 7-day forecasts, and beautiful animations.',
    longDescription: 'WeatherNow delivers a premium weather experience with beautiful animated backgrounds that reflect actual weather conditions. Features GPS-based location detection, hourly and weekly forecasts, air quality index, and UV radiation data from OpenWeatherMap API.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'BlogStudio',
    description: 'Headless CMS-powered blog platform with markdown support, SEO optimization, and lightning-fast performance.',
    longDescription: 'BlogStudio is a static-site-generated blog platform built for developers and content creators. It features a clean markdown editor, automatic SEO meta generation, sitemap and RSS feed generation, and perfect Lighthouse scores out of the box.',
    tech: ['Next.js', 'MDX', 'Contentlayer', 'Vercel'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'ChatAI',
    description: 'AI-powered chat interface with streaming responses, multi-model support, and conversation history management.',
    longDescription: 'ChatAI is an elegant frontend for interacting with large language models. It supports multiple AI providers, streaming response display for a natural typing feel, persistent conversation history with local storage, and a clean markdown renderer for code blocks and formatted text.',
    tech: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    color: 'from-green-400 to-emerald-500',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('projects.title')}</SectionHeading>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.title}`}
              onClick={() => setSelectedProject(project)}
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 transition-shadow duration-300 group cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Gradient Banner */}
              <div className={`h-28 bg-gradient-to-br ${project.color} opacity-90 flex items-center justify-center flex-shrink-0`}>
                <span className="text-white/30 text-4xl font-black tracking-tighter select-none">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <motion.h3 layoutId={`title-${project.title}`} className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                  {project.title}
                </motion.h3>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded-full border border-slate-100 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-slate-400 self-center">+{project.tech.length - 3}</span>}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-50 dark:border-slate-700/50">
                  <a href={project.demoLink} onClick={e => e.stopPropagation()} className="flex items-center gap-1 text-xs text-red-600 dark:text-red-400 font-medium hover:underline">
                    <ExternalLink className="w-3 h-3" /> Demo
                  </a>
                  <a href={project.repoLink} onClick={e => e.stopPropagation()} className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 dark:hover:text-slate-200 hover:underline">
                    <Github className="w-3 h-3" /> Repo
                  </a>
                  <span className="ml-auto text-xs text-slate-400 group-hover:text-red-500 transition-colors">Details →</span>
                </div>
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
              className="bg-white dark:bg-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-700 backdrop-blur-sm rounded-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 z-20 shadow"
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div className={`h-40 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center flex-shrink-0`}>
                <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-4xl font-black text-white drop-shadow-lg">
                  {selectedProject.title}
                </motion.h3>
              </div>

              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">Overview</h4>
                    <p className="text-sm">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">Deep Dive</h4>
                    <p className="text-sm">{selectedProject.longDescription}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-700">
                  <a href={selectedProject.demoLink} className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-red-700">
                    <ExternalLink className="w-4 h-4" /> {t('projects.live')}
                  </a>
                  <a href={selectedProject.repoLink} className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
                    <Github className="w-4 h-4" /> {t('projects.github')}
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