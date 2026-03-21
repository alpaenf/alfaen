'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ArrowRight from './icons/ArrowRight';
import GithubStats from './GithubStats';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const roles = [
    { label: t('hero.roleFrontend'), color: 'text-red-600 dark:text-red-400' },
    { label: t('hero.roleBackend'),  color: 'text-blue-600 dark:text-blue-400' },
    { label: t('hero.roleFullstack'), color: 'text-emerald-600 dark:text-emerald-400' },
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-grid-slate-100/[0.04] dark:bg-grid-slate-900/[0.04] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="inline-block px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium rounded-full text-sm mb-6 border border-red-100 dark:border-red-900/40">
                {t('hero.greeting')}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight leading-[1.1] pb-2"
            >
              Mukhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Alfaen</span>
            </motion.h1>
            
            {/* Animated Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={`text-lg md:text-2xl font-semibold ${roles[roleIndex].color}`}
                >
                  {roles[roleIndex].label}
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
              className="text-base text-slate-600 dark:text-slate-400 mb-7 max-w-lg font-light leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 w-full"
            >
              <a 
                href="#contact" 
                className="group flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-600/30 active:scale-95"
              >
                {t('hero.startProject')}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-500 hover:scale-105 active:scale-95"
              >
                {t('hero.viewWork')}
              </a>

              <div className="hidden xl:block w-px h-10 bg-slate-200 dark:bg-slate-700 mx-2"></div>

              <div className="w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
                <GithubStats />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Premium Photo Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 100, 
              damping: 12, 
              delay: 0.5 
            }}
            className="flex-shrink-0 relative mt-10 lg:mt-0"
          >
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-600/20 to-orange-500/20 dark:from-red-500/10 dark:to-orange-400/10 rounded-[3rem] blur-3xl -z-10 rotate-6 animate-pulse"></div>
            
            <div className="relative group w-72 h-80 sm:w-80 sm:h-96 md:w-[350px] md:h-[420px]">
              
              {/* Floating Badge 1 - Top Left (Appears after image bounces) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1.0 }}
                className="absolute -top-6 -left-8 md:-top-8 md:-left-12 z-20"
              >
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white dark:bg-slate-800 p-3 md:p-4 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-lg md:text-xl">
                    2+
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{t('hero.yearsEx')}</p>
                    <p className="text-sm md:text-base text-slate-800 dark:text-slate-100 font-bold">{t('hero.experience')}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right (Appears after image bounces) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20"
              >
                <motion.div 
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 px-5 md:p-4 md:px-6 rounded-full shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <div className="w-2 h-2 rounded-full absolute bg-emerald-500"></div>
                  <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-medium ml-2">{t('hero.available')}</p>
                </motion.div>
              </motion.div>

              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 bg-slate-100 dark:bg-slate-800 flex-shrink-0 group-hover:shadow-red-500/10 group-hover:-translate-y-2">
                <Image 
                  src="/saya.png" 
                  alt="Mukhammad Alfaen Fadillah"
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay for detail readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Default Border Ring (Clean!) */}
              <div className="absolute -inset-2 md:-inset-3 border border-slate-200 dark:border-slate-700/80 rounded-[2.8rem] md:rounded-[3.3rem] -z-10 opacity-70"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}