import { certificates } from '@/data/certificates';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Certificates | Portfolio',
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        <Link
          href="/#certificates"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">
          Semua <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Sertifikat</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map(cert => (
            <Link
              key={cert.slug}
              href={`/certificates/${cert.slug}`}
              className="group block bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1"
            >
              {cert.image ? (
                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.accent}`} />
                  <Award className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                  {cert.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                <p className="text-[11px] text-slate-400 mt-2">{cert.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
