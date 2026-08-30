'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArrowRight from './icons/ArrowRight';
import Mail from './icons/Mail';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-grid-slate-100/[0.04] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="text-red-500 font-medium tracking-wide text-sm md:text-base uppercase mb-3"
            >
              {language === 'id' ? 'Halo, Saya' : "Hi, I'm"}
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight"
            >
              <span className="font-script text-[1.3em] font-normal text-slate-800 dark:text-slate-200 mr-0.5 select-none">M</span>ukhammad <br className="hidden md:block"/>
              <span className="text-red-600 dark:text-red-500">
                <span className="font-script text-[1.3em] font-normal mr-0.5 select-none">A</span>lfaen
              </span>{' '}
              <span className="font-script text-[1.3em] font-normal text-slate-800 dark:text-slate-200 mr-0.5 select-none">F</span>adillah
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
            >
              {language === 'id' 
                ? 'Frontend & Web Developer yang merancang pengalaman digital yang bersih, modern, dan berfokus pada performa serta kemudahan pengguna.'
                : 'Frontend Developer creating clean, modern, and user-centric digital experiences with a focus on performant, accessible web applications.'
              }
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto"
            >
              <a 
                href="#projects" 
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 active:scale-[0.98]"
              >
                {language === 'id' ? 'Lihat Proyek' : 'View Projects'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#contact" 
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:scale-[1.02] hover:shadow-sm active:scale-[0.98]"
              >
                {language === 'id' ? 'Hubungi Saya' : "Let's Talk"}
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 group-hover:shadow-red-500/20 group-hover:scale-[1.02] transition-all duration-500 bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                <Image 
                  src="/saya.png" 
                  alt="Mukhammad Alfaen Fadillah"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}