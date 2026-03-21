import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import SplashScreenWrapper from '@/components/SplashScreenWrapper';

export default function Home() {
  return (
    <main className="font-sans">
      <SplashScreenWrapper />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <CTA />
      <Contact />
    </main>
  );
}