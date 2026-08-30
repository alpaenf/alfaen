'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiFlutter,
  SiExpress,
  SiPython,
  SiVuedotjs,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiPostman,
  SiGit,
  SiDocker,
  SiMysql,
  SiSupabase
} from 'react-icons/si';

// ─── 100% Exact Official Microsoft VS Code SVG ───
const VSCodeOfficialIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
    <path 
      d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.653L4.47 12 .32 15.347a1 1 0 0 0 .007 1.392l1.322 1.202a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18 17.584l-7.382-5.584L18 6.416v11.168z" 
      fill="#007ACC" 
    />
  </svg>
);

// ─── Antigravity (Google AGY) Custom Futuristic Vector Logo ───
const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="url(#agyGrad)" strokeWidth="1.8" strokeDasharray="3 1.5" />
    <circle cx="12" cy="12" r="4.5" fill="url(#agyCore)" />
    <path d="M12 2.5V5.5M12 18.5V21.5M2.5 12H5.5M18.5 12H21.5" stroke="url(#agyGrad)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5.5 5.5L7.5 7.5M16.5 16.5L18.5 18.5M18.5 5.5L16.5 7.5M7.5 16.5L5.5 18.5" stroke="url(#agyGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="agyGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="agyCore" x1="7.5" y1="7.5" x2="16.5" y2="16.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
  </svg>
);

interface SkillItem {
  name: string;
  category: 'frameworks' | 'tools';
  icon: React.ReactNode;
  bg?: string;
}

// ─── Frameworks & Languages Dataset ───
const frameworkSkills: SkillItem[] = [
  {
    name: 'JavaScript',
    category: 'frameworks',
    bg: 'bg-[#F7DF1E]',
    icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 text-black" />,
  },
  {
    name: 'TypeScript',
    category: 'frameworks',
    bg: 'bg-[#3178C6]',
    icon: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
  },
  {
    name: 'React',
    category: 'frameworks',
    icon: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 text-[#61DAFB]" />,
  },
  {
    name: 'Next.js',
    category: 'frameworks',
    icon: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 dark:text-white" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'frameworks',
    icon: <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 text-[#38BDF8]" />,
  },
  {
    name: 'Node.js',
    category: 'frameworks',
    icon: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 text-[#5FA04E]" />,
  },
  {
    name: 'Laravel',
    category: 'frameworks',
    icon: <SiLaravel className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF2D20]" />,
  },
  {
    name: 'Flutter',
    category: 'frameworks',
    icon: <SiFlutter className="w-8 h-8 sm:w-10 sm:h-10 text-[#02569B] dark:text-[#54C5F8]" />,
  },
  {
    name: 'Express.js',
    category: 'frameworks',
    icon: <SiExpress className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 dark:text-white" />,
  },
  {
    name: 'Python',
    category: 'frameworks',
    icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 text-[#3776AB]" />,
  },
  {
    name: 'Vue.js',
    category: 'frameworks',
    icon: <SiVuedotjs className="w-8 h-8 sm:w-10 sm:h-10 text-[#4FC08D]" />,
  },
];

// ─── Tools & Ecosystem Dataset ───
const toolSkills: SkillItem[] = [
  {
    name: 'Figma',
    category: 'tools',
    icon: <SiFigma className="w-8 h-8 sm:w-10 sm:h-10 text-[#F24E1E]" />,
  },
  {
    name: 'Firebase',
    category: 'tools',
    icon: <SiFirebase className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFCA28]" />,
  },
  {
    name: 'GitHub',
    category: 'tools',
    icon: <SiGithub className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 dark:text-white" />,
  },
  {
    name: 'VS Code',
    category: 'tools',
    icon: <VSCodeOfficialIcon />,
  },
  {
    name: 'Antigravity',
    category: 'tools',
    icon: <AntigravityIcon />,
  },
  {
    name: 'MongoDB',
    category: 'tools',
    icon: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 text-[#47A248]" />,
  },
  {
    name: 'Postman',
    category: 'tools',
    bg: 'bg-[#FF6C37]',
    icon: <SiPostman className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
  },
  {
    name: 'Git',
    category: 'tools',
    bg: 'bg-[#F05032]',
    icon: <SiGit className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
  },
  {
    name: 'Docker',
    category: 'tools',
    bg: 'bg-[#2496ED]',
    icon: <SiDocker className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
  },
  {
    name: 'MySQL',
    category: 'tools',
    icon: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 text-[#4479A1]" />,
  },
  {
    name: 'Supabase',
    category: 'tools',
    icon: <SiSupabase className="w-8 h-8 sm:w-10 sm:h-10 text-[#3ECF8E]" />,
  },
];

// ─── Glassmorphic Squircle App Icon Tile ───
const SquircleTile = ({ item, index }: { item: SkillItem; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center group cursor-pointer select-none"
    >
      {/* 3D Glassmorphic Squircle Container */}
      <div 
        className={`w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-[1.35rem] ${
          item.bg 
            ? `${item.bg} shadow-md shadow-slate-300/40 dark:shadow-black/40` 
            : 'bg-white/70 dark:bg-[#0c101d]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-200/50 dark:shadow-black/40 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white/90 dark:hover:bg-[#121624]'
        } transition-all duration-300 p-2.5 sm:p-3.5 md:p-4 flex items-center justify-center relative overflow-hidden`}
      >
        {/* Subtle top inner bevel highlight */}
        {!item.bg && (
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />
        )}

        {/* Official Vector Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {item.icon}
        </div>
      </div>

      {/* Floating Hover Name Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-9 z-30 px-3 py-1 rounded-md bg-slate-900/95 dark:bg-slate-800/95 border border-slate-700 text-white text-xs font-semibold tracking-tight whitespace-nowrap shadow-2xl pointer-events-none"
          >
            {item.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        
        {/* Main Section Heading with Flourished Calligraphy */}
        <SectionHeading>{t('skills.title') || (language === 'id' ? 'Keahlian & Kemampuan' : 'Skills & Expertise')}</SectionHeading>

        <div className="space-y-16 sm:space-y-20 -mt-6">
          
          {/* ── Group 1: Frameworks & Languages ── */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 text-center mb-8 tracking-tight"
            >
              {language === 'id' ? 'Framework & Bahasa Pemrograman' : 'Frameworks & Languages'}
            </motion.h3>

            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
              {frameworkSkills.map((item, index) => (
                <SquircleTile key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* ── Group 2: Tools ── */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 text-center mb-8 tracking-tight"
            >
              {language === 'id' ? 'Alat & Ekosistem' : 'Tools'}
            </motion.h3>

            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
              {toolSkills.map((item, index) => (
                <SquircleTile key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
