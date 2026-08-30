import { experiences } from '@/data/experience';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Building2, 
  Users, 
  FlaskConical, 
  Terminal, 
  Code2, 
  GraduationCap, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Experiences | Portfolio',
};

export default function ExperiencePage() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'flask':
        return <FlaskConical className="w-4 h-4 md:w-5 md:h-5" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 md:w-5 md:h-5" />;
      case 'code':
        return <Code2 className="w-4 h-4 md:w-5 md:h-5" />;
      case 'building':
        return <Building2 className="w-4 h-4 md:w-5 md:h-5" />;
      case 'users':
        return <Users className="w-4 h-4 md:w-5 md:h-5" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />;
      case 'graduation':
        return <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />;
      default:
        return <Briefcase className="w-4 h-4 md:w-5 md:h-5" />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tight">
          Perjalanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Karir, Organisasi & Bootcamp</span>
        </h1>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-[19px] md:before:left-[23px] before:w-[2px] before:bg-gradient-to-b before:from-red-200 dark:before:from-red-900/50 before:to-transparent before:-z-10">
          {experiences.map((item, i) => (
            <div key={item.slug} className="relative pl-12 md:pl-16">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white dark:border-slate-900 ${item.logo ? 'bg-white dark:bg-slate-800 p-1' : `bg-gradient-to-br ${item.accent} text-white`} flex items-center justify-center shadow-lg overflow-hidden`}>
                {item.logo ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  renderIcon(item.icon || 'flask')
                )}
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {item.role}
                    </h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${item.accent} text-white shadow-sm`}>
                    {item.period}
                  </span>
                </div>

                <div className="mb-6 space-y-3 pl-1 border-l-2 border-slate-100 dark:border-slate-700">
                  {item.points.map((pt, idx) => (
                    <p key={idx} className="text-slate-600 dark:text-slate-300 pl-4 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:bg-slate-300 dark:before:bg-slate-600 before:rounded-full text-sm md:text-base leading-relaxed">
                      {pt}
                    </p>
                  ))}
                </div>

                <Link 
                  href={`/experience/${item.slug}`}
                  className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium text-sm hover:gap-3 transition-all"
                >
                  Lihat foto & detail lengkap <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
