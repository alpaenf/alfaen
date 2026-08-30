'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../data/certificates';
import { useLanguage } from '../context/LanguageContext';

// Rotasi offset untuk efek tumpukan
const stackOffsets = [
  { rotate: -8,  x: -18, y: 6,  z: 0 },
  { rotate: -3,  x: -8,  y: 3,  z: 1 },
  { rotate:  2,  x:  2,  y: 1,  z: 2 },
  { rotate:  6,  x:  12, y: 4,  z: 3 },
];

export default function Certificates() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex(i => (i + 1) % certificates.length);
  const goPrev = () => setActiveIndex(i => (i - 1 + certificates.length) % certificates.length);

  // Buat urutan tampilan: 3 card di belakang, active di depan
  const displayOrder = certificates.map((_, i) => {
    const offset = (i - activeIndex + certificates.length) % certificates.length;
    return { cert: certificates[i], offset };
  }).sort((a, b) => a.offset - b.offset);

  return (
    <section id="certificates" className="py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('certificates.title')}</SectionHeading>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Card Stack ── */}
          <div className="relative flex items-center justify-center"
            style={{ width: 320, height: 240 }}
          >
            {displayOrder.map(({ cert, offset }) => {
              const isActive = offset === 0;
              const stackStyle = stackOffsets[Math.min(offset, stackOffsets.length - 1)];
              const behindCount = Math.min(offset, 3);

              return (
                <motion.div
                  key={cert.slug}
                  layout
                  animate={{
                    rotate: isActive ? 0 : stackStyle.rotate,
                    x: isActive ? 0 : stackStyle.x,
                    y: isActive ? 0 : stackStyle.y,
                    scale: isActive ? 1 : 1 - behindCount * 0.04,
                    zIndex: isActive ? 20 : stackOffsets.length - behindCount,
                    opacity: offset > 3 ? 0 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute"
                  style={{ width: 300, height: 210 }}
                  onClick={isActive ? goNext : undefined}
                >
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden border-2 shadow-xl transition-shadow duration-300
                      ${isActive
                        ? 'border-white dark:border-slate-600 shadow-2xl shadow-slate-400/30 dark:shadow-black/50 cursor-pointer'
                        : 'border-white/80 dark:border-slate-700'
                      }
                    `}
                  >
                    {cert.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="300px"
                          className="object-cover"
                          priority={isActive}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center gap-3">
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.accent}`} />
                        <Award className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium px-4 text-center line-clamp-2">
                          {cert.title}
                        </p>
                      </div>
                    )}

                    {/* Active overlay with title */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-semibold leading-snug line-clamp-1">{cert.title}</p>
                        <p className="text-white/70 text-xs">{cert.issuer}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Detail panel ── */}
          <div className="flex flex-col items-start max-w-sm w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* Accent line */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${certificates[activeIndex].accent} mb-5`} />

                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                  {certificates[activeIndex].date}
                </p>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 leading-snug">
                  {certificates[activeIndex].title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {certificates[activeIndex].issuer}
                </p>
                {certificates[activeIndex].description && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {certificates[activeIndex].description}
                  </p>
                )}

                <Link
                  href={`/certificates/${certificates[activeIndex].slug}`}
                  className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700"
                >
                  {language === 'id' ? 'Lihat detail' : 'View detail'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={goPrev}
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-5 h-2 bg-red-500'
                        : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-3">
              {activeIndex + 1} / {certificates.length} · Klik kartu atau → untuk next
            </p>
          </div>
        </div>

        {/* View all */}
        <div className="mt-14 text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium hover:underline underline-offset-4"
          >
            Lihat semua sertifikat
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
