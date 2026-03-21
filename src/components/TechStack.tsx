'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function TechStack() {
  const categories = [
    {
      name: 'Frontend',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      name: 'Languages',
      tools: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      name: 'Tools & Platforms',
      tools: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma', 'NPM']
    },
    {
      name: 'State Management',
      tools: ['Redux', 'Zustand', 'Context API']
    },
    {
      name: 'Testing & Performance',
      tools: ['Responsive Design', 'Web Vitals', 'Accessibility']
    },
    {
      name: 'Other Skills',
      tools: ['API Integration', 'SEO Optimization', 'UI/UX Design', 'Problem Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Tools & Technologies</SectionHeading>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:border-red-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/5"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, idx) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white border border-slate-300 rounded-full text-xs font-medium text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors duration-200"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600/5 via-red-600/10 to-red-600/5 border border-red-600/20 rounded-2xl"
        >
          <p className="text-center text-slate-700 font-light">
            <span className="font-semibold text-red-600">20+ Technologies</span> across frontend development, ensuring modern, performant, and scalable solutions for every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
