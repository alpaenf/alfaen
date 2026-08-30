'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white select-none overflow-hidden transition-colors duration-300"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-red-500/15 via-rose-500/10 to-indigo-500/15 blur-3xl pointer-events-none -z-10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Monogram & Title Container (Free-floating, No Card Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            {/* Free-floating Flourished Monogram */}
            <div className="flex items-center justify-center text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none py-2">
              <span className="font-script text-[1.4em] font-normal text-slate-800 dark:text-slate-100 select-none">
                M
              </span>
              <span className="font-script text-[1.4em] font-normal text-red-600 dark:text-red-500 select-none -ml-1">
                A
              </span>
              <span className="font-script text-[1.4em] font-normal text-slate-800 dark:text-slate-100 select-none -ml-1">
                F
              </span>
              <span className="text-red-600 dark:text-red-500 text-4xl sm:text-5xl font-black ml-1">
                .
              </span>
            </div>

            {/* Name and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center mt-1"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                Mukhammad Alfaen Fadillah
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase mt-1">
                Frontend Developer
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-48 sm:w-56 mt-4 flex flex-col items-center gap-2"
            >
              <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-[1px] border border-slate-300/60 dark:border-slate-700/60">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
