'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Building2, Users } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Company Inc.',
    // Kamu bisa ganti tag icon di bawah ini dengan <img> atau <Image> Next.js jika punya gambar logo aslinya
    logo: <Building2 className="w-6 h-6 text-blue-500" />,
    period: 'Jun 2025 - Present',
    points: [
      'Developed modular UI components for the main dashboard using React and Tailwind CSS.',
      'Improved rendering performance by 15% through strategic state management and memoization.',
      'Collaborated closely with designers to ensure pixel-perfect and responsive implementation.'
    ]
  }
];

const organizations = [
  {
    role: 'Head of Technology',
    company: 'University Developer Club',
    logo: <Users className="w-6 h-6 text-red-500" />,
    period: '2024 - 2025',
    points: [
      'Led a team of 10 developers to build the official club website, increasing member engagement by 30%.',
      'Organized weekly workshops on modern web development practices (Next.js, Tailwind, Git).',
      'Established code review guidelines that reduced production bugs significantly.'
    ]
  }
];

const ExperienceList = ({ title, items }: { title: string, items: typeof experiences }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-100 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4 inline-block">{title}</h3>
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[13px] before:w-[2px] before:bg-gradient-to-b before:from-red-200 dark:before:from-red-900/50 before:to-transparent before:-z-10">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative pl-10 group"
        >
          {/* Timeline Dot */}
          <div className="absolute left-0 top-1.5 w-[28px] h-[28px] rounded-full bg-white dark:bg-slate-900 border-2 border-red-500 shadow-sm shadow-red-200 dark:shadow-none z-10 group-hover:bg-red-50 dark:group-hover:bg-red-900/40 transition-colors duration-500"></div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-slate-50 dark:border-slate-700 pb-5">
              <div className="flex items-center gap-4">
                {/* Company Logo Container */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex flex-shrink-0 items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                  {/* Kalau nanti pake foto: <Image src={item.logoUrl} alt={item.company} fill className="object-cover"/> */}
                  {item.logo}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">{item.role}</h4>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium block mt-0.5">{item.company}</span>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-semibold rounded-full w-max">
                {item.period}
              </span>
            </div>
            
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-400 dark:text-red-500 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading>Experience</SectionHeading>
        <ExperienceList title="Work Experience" items={experiences} />
        <ExperienceList title="Organization Experience" items={organizations} />
      </div>
    </section>
  );
}