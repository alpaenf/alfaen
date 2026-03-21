const fs = require('fs');
const path = require('path');

const files = {
  'src/app/globals.css': `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-slate-800 antialiased selection:bg-red-100 selection:text-red-900 overflow-x-hidden;
  }
}

html {
  scroll-behavior: smooth;
}
`,

  'src/app/layout.tsx': `
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAF | Frontend Developer',
  description: 'Personal Portfolio of Mukhammad Alfaen Fadillah',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-slate-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
`,

  'src/components/SectionHeading.tsx': `
'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="text-3xl md:text-4xl font-semibold mb-12 text-center"
    >
      {children}
    </motion.h2>
  );
}
`,

  'src/components/Hero.tsx': `
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-grid-slate-100/[0.04] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="text-red-500 font-medium tracking-wide text-sm md:text-base uppercase mb-3"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight"
            >
              Mukhammad <br className="hidden md:block"/>
              <span className="text-red-600">Alfaen</span> Fadillah
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
            >
              Frontend Developer creating clean, modern, and user-centric digital experiences with a focus on performant, accessible web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 active:scale-[0.98]"
              >
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#contact" 
                className="group flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-200 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:scale-[1.02] hover:shadow-sm active:scale-[0.98]"
              >
                Let's Talk
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50 group-hover:shadow-red-500/20 group-hover:scale-[1.02] transition-all duration-500 bg-slate-100 flex items-center justify-center">
                {/* Fallback Initials since no high-res photo URL is provided. Replaced in real life with Next/Image */}
                <span className="text-8xl font-bold text-slate-300 bg-clip-text">MAF</span>
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/10"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Projects.tsx': `
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Filzy',
    description: 'Modern movie & TV show discovery platform with interactive UI, real-time data fetching, and seamless user experience.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'FadCV',
    description: 'Professional CV builder tool that allows users to create, customize, and download beautiful resumes easily.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    demoLink: '#',
    repoLink: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="aspect-video bg-slate-100 rounded-xl mb-6 overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-50 transition-colors duration-300">
                <span className="text-sm font-medium tracking-wider uppercase opacity-50">Project Screenshot</span>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-red-600 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-16">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <a href={project.repoLink} className="text-slate-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1.5 text-sm font-medium">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.demoLink} className="text-slate-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1.5 text-sm font-medium">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Experience.tsx': `
'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Company Inc.',
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
    <h3 className="text-2xl font-medium text-slate-800 mb-8 border-b border-slate-100 pb-4 inline-block">{title}</h3>
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[13px] before:w-[2px] before:bg-gradient-to-b before:from-red-200 before:to-transparent before:-z-10">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
          className="relative pl-10"
        >
          {/* Timeline Dot */}
          <div className="absolute left-0 top-1.5 w-[28px] h-[28px] rounded-full bg-white border-2 border-red-500 shadow-sm shadow-red-200 z-10"></div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 border-b border-slate-50 pb-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 group-hover:text-red-600 transition-colors duration-200">{item.role}</h4>
                <span className="text-slate-500 text-sm font-medium block">{item.company}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full w-max">
                {item.period}
              </span>
            </div>
            
            <ul className="space-y-2.5 text-slate-600 text-sm">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0">▹</span>
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
`,

  'src/components/Skills.tsx': `
'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Figma', 'Responsive Design', 'Vercel', 'Postman']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Adaptability', 'Code Review']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading>Skills & Expertise</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-red-200"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span 
                    key={skill}
                    className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-sm rounded-lg hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Contact.tsx': `
'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-20 pb-10 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
          </p>
          
          <a href="mailto:alfaen@example.com" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-red-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 active:scale-[0.98]">
            <Mail className="w-5 h-5" /> Say Hello
          </a>
        </motion.div>
        
        <div className="border-t border-slate-100 pt-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Mukhammad Alfaen Fadillah. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Navbar.tsx': `
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' : 'bg-transparent py-6'}\`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-slate-900 group">
          M<span className="text-red-600 group-hover:text-slate-900 transition-colors">A</span>F<span className="text-red-600">.</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-red-600 transition-colors duration-200 py-2">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu simple version */}
        <div className="md:hidden flex gap-4 text-sm font-medium text-slate-600">
          <a href="#projects" className="hover:text-red-600">Projects</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </div>
      </nav>
    </motion.header>
  );
}
`,

  'src/app/page.tsx': `
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="font-sans text-slate-800 bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
`
};

// Create dirs and write files
for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\\n', 'utf8');
}

console.log('App components generated properly!');
