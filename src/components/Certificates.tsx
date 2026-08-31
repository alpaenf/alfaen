'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { 
  Award, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  BadgeCheck, 
  GraduationCap, 
  Users,
  Sparkles,
  Calendar,
  Building2
} from 'lucide-react';
import { certificates, Certificate } from '../data/certificates';
import { useLanguage } from '../context/LanguageContext';

// Rotasi dan translasi offset halus agar tumpukan kartu terlihat rapi & elegan
const stackOffsets = [
  { rotate: 0,    x: 0,   y: 0,   scale: 1 },
  { rotate: -2.5, x: -4,  y: -8,  scale: 0.96 },
  { rotate: 2,    x: 4,   y: -16, scale: 0.92 },
  { rotate: -1,   x: -2,  y: -24, scale: 0.88 },
];

export default function Certificates() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState(0);

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

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'all') return certificates;
    return certificates.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Handle category tab change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveIndex(0);
  };

  const currentCert = filteredCertificates[activeIndex] || filteredCertificates[0];

  const goNext = () => {
    if (filteredCertificates.length <= 1) return;
    setActiveIndex((i) => (i + 1) % filteredCertificates.length);
  };

  const goPrev = () => {
    if (filteredCertificates.length <= 1) return;
    setActiveIndex((i) => (i - 1 + filteredCertificates.length) % filteredCertificates.length);
  };

  // Buat urutan tampilan untuk tumpukan
  const displayOrder = filteredCertificates.map((_, i) => {
    const offset = (i - activeIndex + filteredCertificates.length) % filteredCertificates.length;
    return { cert: filteredCertificates[i], offset };
  }).sort((a, b) => a.offset - b.offset);

  return (
    <section id="certificates" className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Main Section Heading */}
        <SectionHeading>{t('certificates.title') || (language === 'id' ? 'Sertifikat & Prestasi' : 'Certificates & Honors')}</SectionHeading>

        {/* ── Category Filter Pills ── */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 mb-16 -mt-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border overflow-hidden ${
                  isActive
                    ? 'text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md shadow-slate-900/15'
                    : 'border-slate-300 dark:border-slate-700/80 bg-slate-100/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertCategory"
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

        {/* ── Main Content Area ── */}
        {filteredCertificates.length > 0 ? (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-5xl mx-auto">

            {/* ── Left Side: Interactive 3D Card Stack (Enlarged & Offside) ── */}
            <div 
              className="relative flex items-center justify-center shrink-0 w-full max-w-[500px] h-[300px] sm:h-[350px] md:h-[380px] my-2"
            >
              {displayOrder.map(({ cert, offset }) => {
                const isActive = offset === 0;
                const stackStyle = stackOffsets[Math.min(offset, stackOffsets.length - 1)];
                const behindCount = Math.min(offset, 4);

                return (
                  <motion.div
                    key={cert.slug}
                    layout
                    animate={{
                      rotate: isActive ? 0 : stackStyle.rotate,
                      x: isActive ? 0 : stackStyle.x,
                      y: isActive ? 0 : stackStyle.y,
                      scale: isActive ? 1 : stackStyle.scale,
                      zIndex: isActive ? 30 : 20 - behindCount,
                      opacity: offset > 3 ? 0 : 1 - behindCount * 0.12,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                    className="absolute w-[330px] sm:w-[410px] md:w-[450px] h-[240px] sm:h-[285px] md:h-[305px]"
                    onClick={isActive ? goNext : undefined}
                  >
                    <div
                      className={`w-full h-full rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                        isActive
                          ? 'border-slate-300/80 dark:border-slate-700 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-slate-300/60 dark:shadow-black/70 cursor-pointer scale-100 ring-2 ring-red-500/20'
                          : 'border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-black/40'
                      }`}
                    >
                      {cert.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 640px) 330px, (max-width: 768px) 420px, 460px"
                            className="object-cover"
                            priority={isActive}
                          />
                        </div>
                      ) : (
                        /* Styled Glassmorphic Certificate Badge Graphic */
                        <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl text-slate-900 dark:text-white transition-colors duration-300">
                          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${cert.accent} blur-3xl opacity-20 dark:opacity-25 rounded-full pointer-events-none`} />
                          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.accent}`} />
                          
                          {/* Top Tag & Icon */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                              {cert.date}
                            </span>
                            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${cert.accent} flex items-center justify-center text-white shadow-md`}>
                              <Award className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Center Content */}
                          <div className="relative z-10 my-auto py-2">
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-2 tracking-tight">
                              {cert.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 truncate flex items-center gap-2 font-medium">
                              <Building2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                              {cert.issuer}
                            </p>
                          </div>

                          {/* Bottom Hint */}
                          <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/70 dark:border-slate-800/80">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              Official Verified
                            </span>
                            <span className="text-red-600 dark:text-red-400 font-semibold hover:underline flex items-center gap-1">
                              Click to flip ↻
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Right Side: Detail Information Panel ── */}
            {currentCert && (
              <div className="flex flex-col items-start max-w-lg w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCert.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    {/* Accent Line */}
                    <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${currentCert.accent} mb-4`} />

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{currentCert.date}</span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug tracking-tight">
                      {currentCert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-red-500 shrink-0" />
                      {currentCert.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
                      {language === 'id' ? (currentCert.descriptionId || currentCert.description) : currentCert.description}
                    </p>

                    {/* Action Detail Link */}
                    <Link
                      href={`/certificates/${currentCert.slug}`}
                      className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/30 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border border-slate-200 dark:border-slate-700 hover:border-red-400 shadow-sm"
                    >
                      <span>{language === 'id' ? 'Lihat Detail Sertifikat' : 'View Certificate Detail'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* ── Navigation Carousel Controls ── */}
                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 w-full justify-between sm:justify-start">
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goPrev}
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-all shadow-sm"
                      aria-label="Previous Certificate"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Step Dots */}
                    <div className="flex gap-1.5 px-2">
                      {filteredCertificates.slice(0, 8).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? 'w-6 h-2 bg-red-600'
                              : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-all shadow-sm"
                      aria-label="Next Certificate"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    {activeIndex + 1} / {filteredCertificates.length}
                  </p>
                </div>

              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            {language === 'id' ? 'Belum ada sertifikat di kategori ini.' : 'No certificates found in this category.'}
          </div>
        )}

        {/* ── View All Certificates Page Link ── */}
        <div className="mt-16 text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-400 hover:scale-105 transition-all shadow-sm"
          >
            <span>{language === 'id' ? 'Lihat Semua Daftar Sertifikat' : 'View All Certificates Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
