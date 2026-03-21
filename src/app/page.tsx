import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <CTA />
      <Contact />
    </main>
  );
}