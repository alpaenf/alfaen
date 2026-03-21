'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-slate-900 dark:text-slate-100 ${className}`}
    >
      {children}
    </motion.h2>
  );
}