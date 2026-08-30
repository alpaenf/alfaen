import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="font-sans text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <CTA />
      <Contact />
    </main>
  );
}