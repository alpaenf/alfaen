'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Mail from './icons/Mail';
import Linkedin from './icons/Linkedin';
import Github from './icons/Github';
import ChevronUp from './icons/ChevronUp';
import { Send, CheckCircle2, Copy, Check, MessageSquare, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailAddress = 'alfaenf23@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Encode parameters for mailto
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Alfaen,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Open email client with pre-filled content to alfaenf23@gmail.com
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/60 relative overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 dark:bg-red-600/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        
        {/* Section Heading */}
        <SectionHeading>{language === 'id' ? 'Hubungi Saya' : "Let's Connect"}</SectionHeading>

        <div className="text-center max-w-2xl mx-auto -mt-6 mb-16">
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'id'
              ? 'Punya ide proyek, tawaran kolaborasi, atau sekadar ingin berdiskusi? Jangan ragu untuk mengirim pesan melalui formulir di bawah ini atau email langsung ke saya.'
              : "Have a project in mind, collaboration proposal, or just want to say hi? Feel free to send a message through the form below or reach out directly."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── Left Column: Contact Cards & Direct Info ── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Quick Copy */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-black/30 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${emailAddress}`}
                      className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-500/50 transition-all shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <a
              href="https://wa.me/6285869236023"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-black/30 flex items-center gap-4 group hover:border-[#25D366]/50 transition-all block"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  WhatsApp Direct
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#25D366] transition-colors">
                  +62 858 6923 6023
                </span>
              </div>
            </a>

            {/* Location & Status Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-black/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {language === 'id' ? 'Lokasi' : 'Location'}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                  Banyumas / Purwokerto, Jawa Tengah, Indonesia
                </span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Interactive Email Contact Form ── */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-red-600" />
                {language === 'id' ? 'Kirim Pesan Langsung' : 'Send a Message'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 font-light">
                {language === 'id'
                  ? 'Isi formulir berikut, pesan akan langsung diarahkan ke kotak masuk email saya.'
                  : 'Fill out this form to send a message directly to my inbox.'}
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {language === 'id' ? 'Nama Anda' : 'Your Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'id' ? 'cth. John Doe' : 'e.g. John Doe'}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {language === 'id' ? 'Email Anda' : 'Your Email'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'id' ? 'cth. nama@domain.com' : 'e.g. name@domain.com'}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {language === 'id' ? 'Subjek / Perihal' : 'Subject'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === 'id' ? 'cth. Tawaran Proyek Web Development' : 'e.g. Web Development Project Proposal'}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {language === 'id' ? 'Pesan' : 'Message'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'id' ? 'Tuliskan rincian pesan atau ide proyek Anda di sini...' : 'Write your message or project ideas here...'}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-sm shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{language === 'id' ? 'Kirim via Email' : 'Send via Email'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success Banner */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>
                        {language === 'id'
                          ? 'Membuka aplikasi email untuk mengirim pesan ke alfaenf23@gmail.com...'
                          : 'Opening your email client to send message to alfaenf23@gmail.com...'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>

            </div>
          </div>

        </div>

        {/* ── Footer Bar ── */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:border-red-500/40 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/alpaenf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:border-red-500/40 transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Mukhammad Alfaen Fadillah. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-all duration-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}