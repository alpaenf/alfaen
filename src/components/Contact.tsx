'use client';
import { motion } from 'framer-motion';
import Mail from './icons/Mail';
import Linkedin from './icons/Linkedin';
import Github from './icons/Github';
import ChevronUp from './icons/ChevronUp';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-20 pb-10 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:alfaen@example.com" className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-900/20 active:scale-[0.98]">
              <Mail className="w-5 h-5" /> Email Me
            </a>
            
            <a href="https://wa.me/6285869236023" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#20bd5a] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.98]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
        
        <div className="border-t border-slate-100 dark:border-slate-800 pt-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Mukhammad Alfaen Fadillah. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}