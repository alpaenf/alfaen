'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Briefcase, Code2, Download, Send } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();

  const highlights = [
    { 
      label: language === 'id' ? 'IPK Kumulatif (UNSOED)' : 'Cumulative GPA (UNSOED)', 
      value: '3.71',
      sub: '/ 4.00',
      icon: GraduationCap,
      accent: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400'
    },
    { 
      label: language === 'id' ? 'Prestasi & Kompetisi' : 'Awards & Hackathons', 
      value: '5+',
      sub: language === 'id' ? 'Nasional / Regional' : 'National / Regional',
      icon: Award,
      accent: 'from-red-500/20 to-rose-500/20 text-red-600 dark:text-red-400'
    },
    { 
      label: language === 'id' ? 'Proyek Web & Solusi Digital' : 'Web & Digital Projects', 
      value: '10+',
      sub: language === 'id' ? 'Produksi & Mandiri' : 'Production & Open Source',
      icon: Code2,
      accent: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400'
    },
    { 
      label: language === 'id' ? 'Peran Profesional & Organisasi' : 'Professional & Org Roles', 
      value: '6+',
      sub: language === 'id' ? 'Divisi & Kepemimpinan' : 'Leadership & IT Division',
      icon: Briefcase,
      accent: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SectionHeading>{t('about.title') || (language === 'id' ? 'Tentang Saya' : 'About Me')}</SectionHeading>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
          
          {/* ── Left Column: Biography & Education ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Education Badge Card */}
            <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-800/40 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  Universitas Jenderal Soedirman
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'id' 
                    ? 'S1 Teknik Informatika · Fakultas Teknik (IPK: 3.71 / 4.00)' 
                    : 'B.Sc. in Computer Science · Faculty of Engineering (GPA: 3.71 / 4.00)'}
                </p>
              </div>
            </div>

            {/* Paragraphs directly aligned with CV */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-light">
              {language === 'id' 
                ? 'Mahasiswa S1 Informatika di Universitas Jenderal Soedirman dengan keahlian di bidang Software Engineering, Desain UI/UX, Pengembangan Web, dan Solusi Digital. Berpengalaman dalam mengembangkan sistem informasi berbasis web, merancang antarmuka yang berpusat pada pengguna, serta mendukung operasional TI melalui proyek akademik, magang industri, dan kepemimpinan organisasi.'
                : 'Undergraduate Informatics student at Jenderal Soedirman University with experience in Software Engineering, UI/UX Design, Web Development, and Digital Solutions. Experienced in developing web-based information systems, designing user-centered interfaces, and supporting IT operations through academic projects, internships, and organizational leadership.'
              }
            </p>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
              {language === 'id'
                ? 'Aktif memimpin inisiatif teknologi sebagai Co-Founder di Teknologi Inovasi Soedirman, Head of Creative & Business Development HMIF, dan berpengalaman magang di LPPM UNSOED serta Kementerian Dalam Negeri RI. Fokus pada pembangunan produk digital yang terukur, responsif, dan berkinerja tinggi.'
                : 'Actively driving tech initiatives as Co-Founder at Teknologi Inovasi Soedirman, Head of Creative & Business Development at HMIF, with internship experience at LPPM UNSOED and the Ministry of Home Affairs of Indonesia. Passionate about engineering high-performance, accessible digital solutions.'
              }
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 active:scale-[0.98] text-sm"
              >
                <span>{language === 'id' ? 'Hubungi Saya' : 'Get in Touch'}</span>
                <Send className="w-3.5 h-3.5" />
              </a>
              <a 
                href="/CV MUKHAMMAD ALFAEN FADILLAH.pdf"
                download="CV MUKHAMMAD ALFAEN FADILLAH.pdf"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-7 py-3 rounded-full font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-sm"
              >
                <span>{language === 'id' ? 'Unduh Resume' : 'Download Resume'}</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Metrics & Highlights Grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md shadow-slate-200/50 dark:shadow-black/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {item.value}
                      </span>
                      {item.sub && (
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                          {item.sub}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-snug">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
