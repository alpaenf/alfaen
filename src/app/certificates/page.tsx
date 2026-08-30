'use client';
import { useState, useMemo } from 'react';
import { certificates } from '@/data/certificates';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award, Trophy, BadgeCheck, GraduationCap, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function CertificatesPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { 
      id: 'all', 
      label: language === 'id' ? 'Semua Sertifikat' : 'All Certificates', 
      icon: Sparkles 
    },
    { 
      id: 'lomba', 
      label: language === 'id' ? 'Prestasi & Lomba' : 'Achievements & Competitions', 
      icon: Trophy 
    },
    { 
      id: 'sertifikasi', 
      label: language === 'id' ? 'Sertifikasi & Karir' : 'Certifications & Career', 
      icon: BadgeCheck 
    },
    { 
      id: 'pelatihan', 
      label: language === 'id' ? 'Pelatihan & Workshop' : 'Trainings & Workshops', 
      icon: GraduationCap 
    },
    { 
      id: 'organisasi', 
      label: language === 'id' ? 'Organisasi & Pengabdian' : 'Organization & Community', 
      icon: Users 
    },
  ] as const;

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return certificates;
    return certificates.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-28 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <Link
          href="/#certificates"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'id' ? 'Kembali ke Portfolio' : 'Back to Portfolio'}
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'id' ? 'Semua' : 'All'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              {language === 'id' ? 'Sertifikat & Prestasi' : 'Certificates & Honors'}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light max-w-2xl">
            {language === 'id'
              ? 'Koleksi sertifikat kompetisi nasional, lisensi keahlian, program pelatihan teknologi, dan pengabdian organisasi.'
              : 'Complete collection of national competition awards, certified competencies, tech workshops, and organizational leadership.'}
          </p>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="flex items-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border overflow-hidden ${
                  isActive
                    ? 'text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md shadow-slate-900/15'
                    : 'border-slate-300 dark:border-slate-700/80 bg-slate-100/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertPageCategory"
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

        {/* ── Certificates Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((cert) => {
              const descriptionText = language === 'id' ? (cert.descriptionId || cert.description) : cert.description;

              return (
                <Link
                  key={cert.slug}
                  href={`/certificates/${cert.slug}`}
                  className="group block bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {cert.image ? (
                      <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] bg-slate-50/80 dark:bg-slate-900/90 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.accent} blur-2xl opacity-20 dark:opacity-25 rounded-full pointer-events-none`} />
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.accent}`} />
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                            {cert.date}
                          </span>
                          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${cert.accent} flex items-center justify-center text-white shadow-sm`}>
                            <Award className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="relative z-10 my-auto">
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-2">
                            {cert.title}
                          </p>
                        </div>

                        <p className="relative z-10 text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {cert.issuer}
                        </p>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400 mb-2">
                        <span>{cert.date}</span>
                      </div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">{cert.issuer}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 font-light leading-relaxed">
                        {descriptionText}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400">
                    <span>{language === 'id' ? 'Detail Sertifikat' : 'View Certificate'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </main>
  );
}
