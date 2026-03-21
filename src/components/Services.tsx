'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { MonitorSmartphone, Smartphone, PenTool, Lightbulb, MessageCircle } from 'lucide-react';

const waNumber = '6285869236023';

const servicesList = [
  {
    title: 'Web Development',
    description: 'Pembuatan website performa tinggi yang responsif, SEO-friendly, dan scalable menggunakan tech-stack modern terkini.',
    icon: MonitorSmartphone,
    accent: 'from-blue-500 to-indigo-600',
    waMessage: 'Halo Alfaen, saya tertarik dengan layanan *Web Development*. Boleh kita diskusi lebih lanjut terkait kebutuhan proyek website saya?',
    delay: 0.1
  },
  {
    title: 'Mobile Development',
    description: 'Pembangunan aplikasi mobile cross-platform yang mulus dan interaktif untuk ekosistem iOS maupun Android.',
    icon: Smartphone,
    accent: 'from-violet-500 to-purple-600',
    waMessage: 'Halo Alfaen, saya tertarik dengan layanan *Mobile Development*. Boleh kita diskusi lebih lanjut terkait pembuatan aplikasi mobile saya?',
    delay: 0.2
  },
  {
    title: 'UI/UX Design',
    description: 'Perancangan antarmuka yang intuitif, estetik, dan sangat berfokus pada kenyamanan pengalaman interaksi pengguna.',
    icon: PenTool,
    accent: 'from-rose-500 to-pink-600',
    waMessage: 'Halo Alfaen, saya punya proyek desain dan membutuhkan layanan *UI/UX Design*. Boleh kita ngobrol lebih detail mengenai ini?',
    delay: 0.3
  },
  {
    title: 'IT Consultant',
    description: 'Layanan konsultasi arsitektur sistem, pemilihan tech-stack, dan eskalasi efisiensi bisnis digital skala rintisan maupun besar.',
    icon: Lightbulb,
    accent: 'from-amber-400 to-orange-500',
    waMessage: 'Halo Alfaen, saya ingin menggunakan jasa *IT Consultant* Anda untuk berdiskusi mengenai arsitektur tekno / solusi digital bisnis saya. Kapan ada waktu luang?',
    delay: 0.4
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-slate-100/50 dark:bg-slate-800/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading>{t('services.title') || 'Layanan Profesional'}</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto text-left">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col h-full bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] p-7 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Soft orb background for icon area */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.accent} opacity-5 group-hover:opacity-[0.08] dark:opacity-[0.03] dark:group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`} />

              {/* Icon & Title */}
              <div className="flex flex-col gap-5 mb-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:border-red-200 dark:group-hover:border-red-900/30 group-hover:bg-red-50 dark:group-hover:bg-red-900/10 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-300 shadow-sm">
                  <service.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-snug">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed flex-1 relative z-10">
                {service.description}
              </p>

              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(service.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-semibold text-[13px] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 relative z-10 box-border"
              >
                <MessageCircle className="w-4 h-4" />
                Diskusikan Proyek
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
