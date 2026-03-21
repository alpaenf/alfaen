'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Menu from './icons/Menu';
import { useLanguage } from '../context/LanguageContext';

const Logo = ({ scrolled, theme }: { scrolled: boolean, theme?: string }) => {
  const isDark = theme === 'dark';
  const defaultBg = isDark ? '#f8fafc' : '#1e293b'; // slate-50 or slate-800
  const defaultRed = isDark ? '#f87171' : '#dc2626'; // lighter red in dark mode

  return (
    <a href="#hero" className="flex items-center gap-0.5 font-bold tracking-tight text-lg">
      <motion.span animate={{ color: scrolled ? '#ffffff' : defaultBg }} transition={{ duration: 0.3 }}>M</motion.span>
      <motion.span animate={{ color: scrolled ? '#ffffff' : defaultRed }} transition={{ duration: 0.3 }}>A</motion.span>
      <motion.span animate={{ color: scrolled ? '#ffffff' : defaultBg }} transition={{ duration: 0.3 }}>F</motion.span>
      <motion.span animate={{ color: scrolled ? '#ffffff' : defaultRed }} transition={{ duration: 0.3 }}>.</motion.span>
    </a>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const links = [
    { name: 'Home', href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center"
    >
      <nav className="w-full md:w-fit">
        {/* Pill/Kapsul Navbar dengan Logo */}
        <motion.div 
          animate={{
            backgroundColor: scrolled ? 'rgb(220, 38, 38)' : (isDark ? 'rgb(30, 41, 59)' : 'rgb(255, 255, 255)'),
            borderColor: scrolled ? 'rgb(220, 38, 38)' : (isDark ? 'rgb(51, 65, 85)' : 'rgb(226, 232, 240)'),
            boxShadow: scrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-0 md:gap-6 px-6 md:px-12 py-3 rounded-full border w-full"
        >
          {/* Logo */}
          <motion.div>
            <Logo scrolled={scrolled} theme={mounted ? theme : undefined} />
          </motion.div>
          
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.href}
                  animate={{ color: scrolled ? '#ffffff' : (isDark ? '#f8fafc' : '#1e293b') }}
                  transition={{ duration: 0.3 }}
                  className="relative group py-2"
                >
                  <span>{link.name}</span>
                  <motion.span 
                    animate={{ 
                      backgroundColor: scrolled ? '#ffffff' : (isDark ? '#f8fafc' : '#1e293b')
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  ></motion.span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ color: scrolled ? '#ffffff' : (isDark ? '#f8fafc' : '#1e293b') }}
              transition={{ duration: 0.3 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 bg-red-600/95 backdrop-blur-md border border-red-500/50 rounded-2xl shadow-lg p-4"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-white hover:text-red-100 hover:bg-red-700/50 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}