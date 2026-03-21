'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Building2, Users, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

type ExperienceItem = {
  role: string;
  company: string;
  logo: React.ReactNode;
  logoUrl?: string; // Ganti: '/logos/namafile.png'
  period: string;
  points: string[];
  photos?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Company Inc.',
    logo: <Building2 className="w-6 h-6 text-blue-500" />,
    logoUrl: undefined, // Ganti: '/logos/techcompany.png'
    period: 'Jun 2025 - Present',
    points: [
      'Developed modular UI components for the main dashboard using React and Tailwind CSS.',
      'Improved rendering performance by 15% through strategic state management and memoization.',
      'Collaborated closely with designers to ensure pixel-perfect and responsive implementation.',
    ],
    photos: [
      // Contoh: '/experience/magang1.jpg', '/experience/magang2.jpg'
    ],
  },
];

const organizations: ExperienceItem[] = [
  {
    role: 'Head of Technology',
    company: 'University Developer Club',
    logo: <Users className="w-6 h-6 text-red-500" />,
    logoUrl: undefined, // Ganti: '/logos/devclub.png'
    period: '2024 - 2025',
    points: [
      "Led a team of 10 developers to build the official club website, increasing member engagement by 30%.",
      'Organized weekly workshops on modern web development practices (Next.js, Tailwind, Git).',
      'Established code review guidelines that reduced production bugs significantly.',
    ],
    photos: [
      // Contoh: '/experience/org1.jpg', '/experience/org2.jpg'
    ],
  },
];

// ── Photo Lightbox ────────────────────────────────────────────────────────────
function PhotoLightbox({ photos, startIndex, onClose }: { photos: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent(i => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrent(i => (i + 1) % photos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose} className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white">
          <X size={22} />
        </button>

        {/* Image */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900"
        >
          <Image src={photos[current]} alt={`Photo ${current + 1}`} fill sizes="100vw" className="object-contain" />
        </motion.div>

        {/* Controls */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition"
            >
              <ChevronRight size={22} />
            </button>
            <div className="flex justify-center gap-1.5 mt-4">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ── Photo Gallery inside card ─────────────────────────────────────────────────
function PhotoStrip({ photos, onOpen }: { photos: string[]; onOpen: (i: number) => void }) {
  if (!photos || photos.length === 0) return null;
  return (
    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-1.5 mb-2.5 text-slate-500 dark:text-slate-400 text-xs font-medium">
        <Camera className="w-3.5 h-3.5" />
        <span>Galeri ({photos.length} foto)</span>
      </div>
      {/* Scrollable horizontal gallery */}
      <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => onOpen(i)}
            className="relative flex-shrink-0 w-36 h-24 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 transition-all duration-300 hover:scale-[1.03] snap-start group/photo"
          >
            <Image src={src} alt={`foto ${i + 1}`} fill sizes="144px" className="object-cover transition-transform duration-500 group-hover/photo:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                Lihat
              </span>
            </div>
            {photos.length > 1 && (
              <span className="absolute top-1.5 right-1.5 text-[10px] bg-black/50 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold backdrop-blur-sm">
                {i + 1}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── ExperienceList ────────────────────────────────────────────────────────────
function ExperienceList({ title, items }: { title: string; items: ExperienceItem[] }) {
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-100 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4 inline-block">
        {title}
      </h3>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[13px] before:w-[2px] before:bg-gradient-to-b before:from-red-200 dark:before:from-red-900/50 before:to-transparent before:-z-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-[28px] h-[28px] rounded-full bg-white dark:bg-slate-900 border-2 border-red-500 shadow-sm z-10 group-hover:bg-red-50 dark:group-hover:bg-red-900/40 transition-colors duration-500" />

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4 border-b border-slate-50 dark:border-slate-700 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex flex-shrink-0 items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                    {item.logoUrl ? (
                      <Image src={item.logoUrl} alt={item.company} fill sizes="56px" className="object-contain p-1.5" />
                    ) : (
                      item.logo
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      {item.role}
                    </h4>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium block mt-0.5">{item.company}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-semibold rounded-full w-max">
                  {item.period}
                </span>
              </div>

              {/* Points */}
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-400 dark:text-red-500 mt-1 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Photo strip */}
              <PhotoStrip
                photos={item.photos ?? []}
                onOpen={(i) => setLightbox({ photos: item.photos!, index: i })}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <PhotoLightbox
            photos={lightbox.photos}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading>{t('experience.title')}</SectionHeading>
        <ExperienceList title={t('experience.work')} items={experiences} />
        <ExperienceList title={t('experience.org')} items={organizations} />
      </div>
    </section>
  );
}