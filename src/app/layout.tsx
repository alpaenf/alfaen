import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';
import TerminalMode from '@/components/TerminalMode';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

import { LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Mukhammad Alfaen Fadillah | Portfolio",
  description: "Personal portfolio of Mukhammad Alfaen Fadillah, a Frontend Developer specialzing in React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-red-100 dark:selection:bg-red-900/40 selection:text-red-900 dark:selection:text-red-100 overflow-x-hidden transition-colors duration-500 ease-in-out">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ScrollProgress />
            <CustomCursor />
            {children}
            <ThemeToggle />
            <LanguageToggle />
            <TerminalMode />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}