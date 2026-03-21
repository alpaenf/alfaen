import { experiences } from '@/data/experience';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, Calendar, Users, Briefcase, Camera } from 'lucide-react';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return experiences.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiences.find(e => e.slug === slug);
  return {
    title: exp ? `${exp.role} at ${exp.company}` : 'Experience Details',
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const exp = experiences.find(e => e.slug === slug);
  if (!exp) notFound();

  // Siblings navigation
  const currentIndex = experiences.findIndex(e => e.slug === slug);
  const prev = experiences[currentIndex - 1] ?? null;
  const next = experiences[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Experience
        </Link>

        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 mb-10 shadow-xl border border-slate-100 dark:border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-100 dark:from-slate-700 to-transparent blur-3xl opacity-50 rounded-full translate-x-1/2 -translate-y-1/2 pattern-diagonal-lines pattern-red-500 pattern-bg-white 
  pattern-size-2 pattern-opacity-10" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${exp.accent} shadow-2xl flex items-center justify-center text-white shrink-0`}>
                {exp.icon === 'building' ? <Building2 className="w-10 h-10" /> : <Users className="w-10 h-10" />}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 block flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> {exp.type === 'work' ? 'Pekerjaan' : 'Organisasi'}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
                  {exp.role}
                </h1>
                <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
                  {exp.company}
                </p>
              </div>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-900 px-5 py-3 rounded-full flex items-center gap-2 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 shadow-inner">
              <Calendar className="w-4 h-4 text-red-500" />
              {exp.period}
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="sticky top-28 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className={`w-2 h-6 rounded-full bg-gradient-to-b ${exp.accent}`} />
                Tanggung Jawab
              </h3>
              <ul className="space-y-5">
                {exp.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:bg-red-50 dark:group-hover:bg-red-900/30 group-hover:border-red-400 group-hover:text-red-500 transition-colors`}>
                      {idx + 1}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300  leading-relaxed text-[15px]">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photos Grid Masonry */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                <Camera className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </span>
              Galeri Dokumentasi
            </h3>
            
            {exp.photos.length > 0 ? (
              <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                {exp.photos.map((photo, i) => (
                  <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-md border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={photo}
                      alt={`${exp.role} photo ${i + 1}`}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-white backdrop-blur-md bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                        Foto {i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 p-6 text-center rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                <Users className="w-12 h-12 mb-3 opacity-20" />
                <p>Belum ada foto dokumentasi untuk pengalaman ini.</p>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-16 flex items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
          {prev ? (
             <Link
               href={`/experience/${prev.slug}`}
               className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-800 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 max-w-[45%]"
             >
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform bg-slate-100 dark:bg-slate-900 p-1 rounded-full text-slate-900 dark:text-white shrink-0" />
               <div className="flex flex-col overflow-hidden">
                 <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Sebelumnya</span>
                 <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">{prev.role}</span>
               </div>
             </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/experience/${next.slug}`}
              className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-800 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 max-w-[45%] text-right justify-end"
            >
              <div className="flex flex-col overflow-hidden items-end">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Selanjutnya</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">{next.role}</span>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform bg-slate-100 dark:bg-slate-900 p-1 rounded-full text-slate-900 dark:text-white shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
