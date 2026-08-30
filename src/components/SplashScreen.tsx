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
    }, 50);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

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
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/20 via-rose-500/10 to-indigo-600/20 blur-3xl pointer-events-none -z-10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Logo / Monogram Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5 relative z-10"
          >
            {/* Flourished Monogram */}
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="flex items-center text-3xl sm:text-4xl font-bold tracking-tight">
                  <span className="font-script text-[1.4em] font-normal text-slate-100 select-none">M</span>
                  <span className="font-script text-[1.4em] font-normal text-red-500 select-none -ml-0.5">A</span>
                  <span className="font-script text-[1.4em] font-normal text-slate-100 select-none -ml-0.5">F</span>
                  <span className="text-red-500 text-2xl font-black ml-0.5">.</span>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Mukhammad Alfaen Fadillah
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-widest uppercase mt-1">
                Portfolio & Interactive Journey
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-48 sm:w-56 mt-2 flex flex-col items-center gap-2"
            >
              <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden p-[1px] border border-slate-700/40">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] text-slate-500 font-mono">
                <span>Loading Experience</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
