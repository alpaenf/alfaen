'use client';
import { motion } from 'framer-motion';
import ArrowRight from './icons/ArrowRight';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {language === 'id' ? 'Siap memulai sesuatu yang' : 'Ready to start something'}{' '}
            <span className="text-red-600">{language === 'id' ? 'luar biasa?' : 'amazing?'}</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 font-light leading-relaxed">
            {language === 'id'
              ? 'Saya selalu sangat terbuka untuk setiap diskusi baru dan ide proyek yang unik. Mari terhubung dan bangun sesuatu yang berkesan bersama.'
              : "I'm always open to new opportunities and interesting projects. Let's connect and create something remarkable together."
            }
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-600/30 active:scale-95"
            >
              {language === 'id' ? 'Mulai Proyek' : 'Start a Project'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="/CV MUKHAMMAD ALFAEN FADILLAH.pdf"
              download="CV MUKHAMMAD ALFAEN FADILLAH.pdf"
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:scale-105 active:scale-95"
            >
              {language === 'id' ? 'Unduh Resume' : 'Download Resume'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              {language === 'id' ? 'Atau hubungi via media sosial' : 'Or reach out on social media'}
            </p>
            <div className="flex items-center justify-center flex-wrap gap-3.5 sm:gap-4">
              {[
                { 
                  name: 'GitHub', 
                  url: 'https://github.com/alpaenf',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
                { 
                  name: 'LinkedIn', 
                  url: 'https://linkedin.com/in/mukhammadalfaen',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Instagram', 
                  url: 'https://instagram.com/alpaenf_',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Facebook', 
                  url: 'https://facebook.com',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Threads', 
                  url: 'https://threads.net',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24C5.454 24 0 18.647 0 12.031 0 5.415 5.454.062 12.186.062c6.684 0 12.075 5.305 12.075 11.969 0 .546-.046 1.093-.138 1.639h-4.048c.092-.546.138-1.093.138-1.639 0-4.387-3.593-7.962-8.027-7.962-4.434 0-8.027 3.575-8.027 7.962 0 4.387 3.593 7.962 8.027 7.962 2.213 0 4.22-.89 5.688-2.333l2.846 2.846C18.665 22.565 15.602 24 12.186 24zm4.07-11.969c0 2.254-1.83 4.084-4.07 4.084-2.24 0-4.07-1.83-4.07-4.084 0-2.254 1.83-4.084 4.07-4.084 2.24 0 4.07 1.83 4.07 4.084z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Email', 
                  url: 'mailto:alfaenf23@gmail.com',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-red-500 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-400 hover:shadow-md transition-all duration-300"
                  title={link.name}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
