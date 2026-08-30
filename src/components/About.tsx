'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const highlights = [
    { 
      label: language === 'id' ? 'Proyek Selesai' : 'Projects Completed', 
      value: '15+' 
    },
    { 
      label: language === 'id' ? 'Tahun Pengalaman' : 'Years Experience', 
      value: '2+' 
    },
    { 
      label: language === 'id' ? 'Klien & Kolaborasi' : 'Happy Clients', 
      value: '10+' 
    },
    { 
      label: language === 'id' ? 'Teknologi Dikuasai' : 'Technologies', 
      value: '20+' 
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>{t('about.title') || (language === 'id' ? 'Tentang Saya' : 'About Me')}</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-light">
              {language === 'id' 
                ? 'Saya adalah Frontend & Web Developer yang berorientasi pada detail desain serta pengalaman pengguna. Dengan lebih dari 2 tahun pengalaman profesional, saya fokus merancang aplikasi web yang bersih, berkinerja tinggi, dan mudah diakses.'
                : "I'm a passionate Frontend Developer with a keen eye for design and user experience. With over 2 years of professional experience, I specialize in building clean, performant, and accessible web applications using modern technologies."
              }
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
              {language === 'id'
                ? 'Perjalanan saya di dunia pengembangan web dimulai dari rasa ingin tahu yang mendalam tentang teknologi digital. Saat ini, saya menggabungkan keahlian teknis dengan solusi pemecahan masalah yang kreatif untuk menghadirkan produk yang berdampak positif.'
                : "My journey in web development started with a curiosity about how websites work. Today, I combine technical expertise with creative problem-solving to deliver digital solutions that make an impact. I'm particularly interested in React, Next.js, and creating seamless user experiences."
              }
            </p>

            <div className="flex gap-4 flex-wrap">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] text-sm"
              >
                {language === 'id' ? 'Hubungi Saya' : 'Get in Touch'}
              </a>
              <a 
                href="/CV MUKHAMMAD ALFAEN FADILLAH.pdf"
                download="CV MUKHAMMAD ALFAEN FADILLAH.pdf"
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 text-sm"
              >
                {language === 'id' ? 'Unduh Resume' : 'Download Resume'}
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-red-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/5"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
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
