'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { Building2, Users, ArrowRight, Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const [activeExp, setActiveExp] = useState(0);

  const exp = experiences[activeExp];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('experience.title')}</SectionHeading>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-12">
          
          {/* ── Left Sticky Timeline ── */}
          <div className="lg:w-1/3 flex flex-col gap-4 sticky top-32 self-start hidden md:flex">
            {experiences.slice(0, 4).map((item, i) => (
              <button
                key={item.slug}
                onClick={() => setActiveExp(i)}
                className={`relative px-6 py-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group ${
                  activeExp === i
                    ? 'bg-slate-50 dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-700'
                    : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30'
                }`}
              >
                {/* Active Indicator Line */}
                {activeExp === i && (
                  <motion.div
                    layoutId="active-indicator"
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full bg-gradient-to-b ${item.accent}`}
                  />
                )}

                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  activeExp === i 
                    ? `bg-gradient-to-br ${item.accent} text-white shadow-md` 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                }`}>
                  {item.icon === 'building' ? <Building2 className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                </div>

                <div>
                  <h4 className={`font-bold text-sm transition-colors duration-300 line-clamp-1 ${
                    activeExp === i ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.role}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                    {item.company}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* ── Mobile Timeline Select (Stacked Vertically) ── */}
          <div className="flex flex-col md:hidden gap-3 mb-8">
            {experiences.slice(0, 4).map((item, i) => (
              <button
                key={item.slug}
                onClick={() => setActiveExp(i)}
                className={`w-full text-center sm:text-left px-5 py-3.5 rounded-2xl border text-sm font-semibold transition-all shadow-sm ${
                  activeExp === i 
                    ? `border-transparent text-white bg-gradient-to-r ${item.accent}`
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700'
                }`}
              >
                {item.company}
              </button>
            ))}
          </div>

          {/* ── Right Content Panel ── */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-100 dark:border-slate-700/50 shadow-xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden"
              >
                {/* Decorative background blur */}
                <div className={`absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br ${exp.accent} blur-[80px] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2`} />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
                    <Briefcase className="w-3 h-3" />
                    {exp.type === 'work' ? 'Pengalaman Kerja' : 'Organisasi'}
                  </span>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-2 tracking-tight">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                     <p className="text-sm sm:text-lg font-semibold text-slate-600 dark:text-slate-300">
                      @ {exp.company}
                    </p>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
                    <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full inline-block w-max">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-4 mb-10 pl-2">
                    {exp.points.map((pt, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.accent}`} />
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Photo mini-preview */}
                  {exp.photos.length > 0 && (
                     <div className="mb-10">
                       <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Dokumentasi</p>
                       <div className="flex gap-3 overflow-x-auto snap-x scrollbar-none pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-hidden">
                         {exp.photos.slice(0, 3).map((photo, j) => (
                           <div key={j} className="relative w-[120px] h-[80px] sm:w-32 sm:h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex-shrink-0 shadow-sm snap-start">
                             <Image src={photo} alt={`Preview ${j}`} fill sizes="128px" className="object-cover opacity-80" />
                           </div>
                         ))}
                         {exp.photos.length > 3 && (
                           <div className="relative w-[120px] h-[80px] sm:w-32 sm:h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-center flex-shrink-0 snap-start">
                             <span className="text-sm font-bold text-slate-500">+{exp.photos.length - 3}</span>
                           </div>
                         )}
                       </div>
                     </div>
                  )}

                  <Link
                    href={`/experience/${exp.slug}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-transform hover:scale-105 active:scale-95 shadow-md shadow-slate-200 dark:shadow-black/50 bg-gradient-to-r ${exp.accent}`}
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View all button */}
        {experiences.length > 4 && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium hover:underline underline-offset-4"
            >
              Lihat semua pengalaman
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}