'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { 
  FlaskConical, 
  Building2, 
  Users, 
  Terminal, 
  Code2, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { experiences } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'professional' | 'organizational' | 'bootcamp'>('professional');

  const categories = [
    { 
      id: 'professional', 
      label: language === 'id' ? 'Pengalaman Profesional' : 'Professional Experiences', 
      icon: Briefcase 
    },
    { 
      id: 'organizational', 
      label: language === 'id' ? 'Pengalaman Organisasi' : 'Organizational Experiences', 
      icon: Users 
    },
    { 
      id: 'bootcamp', 
      label: language === 'id' ? 'Bootcamp & Pelatihan' : 'Bootcamp', 
      icon: GraduationCap 
    },
    { 
      id: 'all', 
      label: language === 'id' ? 'Semua Pengalaman' : 'All Experiences', 
      icon: Sparkles 
    },
  ] as const;

  const filteredExperiences = experiences.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'flask':
        return <FlaskConical className="w-6 h-6 text-blue-500 dark:text-blue-400" />;
      case 'terminal':
        return <Terminal className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'users':
        return <Users className="w-6 h-6 text-blue-500 dark:text-cyan-400" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-orange-500 dark:text-orange-400" />;
      case 'graduation':
        return <GraduationCap className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-red-500 dark:text-red-400" />;
    }
  };

  const getIconContainerStyle = (iconName: string) => {
    switch (iconName) {
      case 'flask':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-500';
      case 'terminal':
        return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-500';
      case 'code':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500';
      case 'building':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-500';
      case 'users':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-500';
      case 'shield':
        return 'bg-orange-500/10 border-orange-500/30 text-orange-500';
      case 'graduation':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500';
      default:
        return 'bg-red-500/10 border-red-500/30 text-red-500';
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Main Section Header */}
        <SectionHeading>{t('experience.title') || (language === 'id' ? 'Pengalaman' : 'Experiences')}</SectionHeading>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 mb-16 -mt-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border overflow-hidden ${
                  isActive
                    ? 'text-white border-transparent shadow-md shadow-red-500/25'
                    : 'text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-rose-600 z-0"
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

        {/* Category Subtitle Title */}
        <div className="text-center mb-14">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
            {activeCategory === 'professional' && (language === 'id' ? 'Pengalaman Profesional' : 'Professional Experiences')}
            {activeCategory === 'organizational' && (language === 'id' ? 'Pengalaman Organisasi' : 'Organizational Experiences')}
            {activeCategory === 'bootcamp' && (language === 'id' ? 'Bootcamp & Pelatihan' : 'Bootcamp & Training')}
            {activeCategory === 'all' && (language === 'id' ? 'Semua Pengalaman' : 'All Experiences')}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {activeCategory === 'professional' && (language === 'id' ? 'Peran sebagai Pengembang Software, Engineer & Asisten Laboratorium' : 'Roles as Software Developer, Engineer & Laboratory Assistant')}
            {activeCategory === 'organizational' && (language === 'id' ? 'Kepemimpinan dan kontribusi aktif di komunitas mahasiswa & developer' : 'Leadership and active contributions in student & developer communities')}
            {activeCategory === 'bootcamp' && (language === 'id' ? 'Pelatihan teknis intensif, spesialisasi keahlian & proyek capstone terverifikasi' : 'Intensive technical training, skill specializations & verified capstone projects')}
            {activeCategory === 'all' && (language === 'id' ? 'Perjalanan lengkap mencakup pencapaian profesional, organisasi, dan teknis' : 'Comprehensive journey across professional, organizational, and technical milestones')}
          </p>
        </div>

        {/* ── Timeline Container ── */}
        <div className="relative">
          
          {/* Central Vertical Timeline Line (Desktop: center, Mobile: left-6) */}
          <div 
            aria-hidden="true" 
            className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 dark:bg-slate-700/80"
          />

          {/* Timeline Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 md:space-y-16"
            >
              {filteredExperiences.map((item, index) => {
                const isEven = index % 2 === 0;
                const roleText = language === 'id' ? (item.roleId || item.role) : item.role;
                const companyText = language === 'id' ? (item.companyId || item.company) : item.company;
                const periodText = language === 'id' ? (item.periodId || item.period) : item.period;
                const pointsList = language === 'id' ? (item.pointsId || item.points) : item.points;

                return (
                  <div
                    key={item.slug}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* ── Desktop Left / Right Card Container ── */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="group bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 dark:shadow-black/40 hover:border-red-500/40 dark:hover:border-red-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Subtle Card Accent Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.accent} blur-3xl opacity-5 group-hover:opacity-10 transition-opacity rounded-full pointer-events-none`} />

                        {/* Card Header: Icon/Logo + Role Title + Company */}
                        <div className="flex items-start gap-4 mb-5">
                          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1 ${item.logo ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : getIconContainerStyle(item.icon || 'flask')}`}>
                            {item.logo ? (
                              <div className="relative w-full h-full">
                                <Image
                                  src={item.logo}
                                  alt={companyText}
                                  fill
                                  sizes="48px"
                                  className="object-contain p-0.5"
                                />
                              </div>
                            ) : (
                              getIcon(item.icon || 'flask')
                            )}
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                              {roleText}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                              {companyText}
                            </p>
                          </div>
                        </div>

                        {/* Mobile Date Badge (Shown on small screens above points) */}
                        <div className="md:hidden mb-4">
                          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
                            {periodText}
                          </span>
                        </div>

                        {/* Card Body: Numbered Points */}
                        <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                          {pointsList.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5">
                              <span className="font-bold text-slate-400 dark:text-slate-500 shrink-0 text-xs mt-0.5">
                                {pIdx + 1}.
                              </span>
                              <span className="flex-1">{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Detail Link Footer */}
                        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex justify-end">
                          <Link
                            href={`/experience/${item.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 group/link transition-colors"
                          >
                            <span>{language === 'id' ? 'Lihat Detail' : 'Detail'}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                    {/* ── Center Dot Node on Timeline ── */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-7 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-white" />
                      </div>
                    </div>

                    {/* ── Desktop Opposite Side: Date Pill Badge ── */}
                    <div
                      className={`hidden md:flex w-[calc(50%-2.5rem)] items-center ${
                        isEven ? 'justify-start pl-8' : 'justify-end pr-8'
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-700/90 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:border-red-500/40 transition-colors"
                      >
                        {periodText}
                      </motion.div>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Page Footer Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-400 hover:scale-105 transition-all shadow-sm"
          >
            Lihat Semua Pengalaman Lengkap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}