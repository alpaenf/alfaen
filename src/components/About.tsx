'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 50, stiffness: 150 });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { key: 'projects', label: t('about.stats.projects'), value: 15, suffix: '+' },
    { key: 'years',    label: t('about.stats.years'),    value: 2,  suffix: '+' },
    { key: 'clients',  label: t('about.stats.clients'),  value: 10, suffix: '+' },
    { key: 'tech',     label: t('about.stats.tech'),     value: 20, suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800/20 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('about.title')}</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-light">
              {t('about.desc1')}
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
              {t('about.desc2')}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] text-sm"
              >
                {t('about.getInTouch')}
              </a>
              <a 
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:border-red-600 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-500 text-sm"
              >
                {t('about.downloadResume')}
              </a>
            </div>
          </motion.div>

          {/* Stats Grid — key is stable (doesn't change with lang) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 text-center hover:border-red-600/30 dark:hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500 mb-2">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
