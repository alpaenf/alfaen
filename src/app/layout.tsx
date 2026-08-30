import type { Metadata } from 'next';
import { Poppins, Great_Vibes, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import TerminalMode from '@/components/TerminalMode';
import BackgroundPattern from '@/components/BackgroundPattern';
import SplashScreen from '@/components/SplashScreen';
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

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
    <html 
      lang="en" 
      className={`${poppins.variable} ${plusJakarta.variable} ${greatVibes.variable}`} 
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-red-100 dark:selection:bg-red-900/40 selection:text-red-900 dark:selection:text-red-100 overflow-x-hidden transition-colors duration-500 ease-in-out">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SplashScreen />
            <BackgroundPattern />
            <ScrollProgress />
            <CustomCursor />
            {children}
            <TerminalMode />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}