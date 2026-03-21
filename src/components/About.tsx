'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { label: t('about.stats.projects'), value: '15+' },
    { label: t('about.stats.years'), value: '2+' },
    { label: t('about.stats.clients'), value: '10+' },
    { label: t('about.stats.tech'), value: '20+' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800/20 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('about.title')}</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' },
                  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 text-center hover:border-red-600/30 dark:hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500 mb-2">
                  {item.value}
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
