'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 z-50 fixed bottom-6 right-20 shadow-md font-bold text-sm uppercase w-10 h-10"
      aria-label="Toggle Language"
    >
      {language}
    </button>
  );
}
