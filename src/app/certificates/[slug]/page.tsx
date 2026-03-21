import { certificates } from '@/data/certificates';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Award, Calendar, Building2 } from 'lucide-react';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return certificates.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = certificates.find(c => c.slug === slug);
  return {
    title: cert ? `${cert.title} | Certificates` : 'Certificate',
  };
}

export default async function CertificateDetailPage({ params }: Props) {
  const { slug } = await params;
  const cert = certificates.find(c => c.slug === slug);
  if (!cert) notFound();

  // Siblings for navigation
  const currentIndex = certificates.findIndex(c => c.slug === slug);
  const prev = certificates[currentIndex - 1] ?? null;
  const next = certificates[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">

        {/* Back */}
        <Link
          href="/#certificates"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        {/* Certificate Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 mb-8 bg-slate-50 dark:bg-slate-800">
          {cert.image ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-4"
                priority
              />
            </div>
          ) : (
            <div className="relative aspect-[4/3] w-full flex flex-col items-center justify-center gap-4 bg-slate-100 dark:bg-slate-800/60">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${cert.accent} rounded-t-3xl`} />
              <Award className="w-20 h-20 text-slate-300 dark:text-slate-600" />
              <p className="text-sm text-slate-400 dark:text-slate-500">Foto sertifikat belum ditambahkan</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            {cert.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {cert.issuer}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {cert.date}
            </span>
          </div>

          {cert.description && (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {cert.description}
            </p>
          )}
        </div>

        {/* Verify button */}
        {cert.verifyLink && cert.verifyLink !== '#' && (
          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors mb-12"
          >
            <ExternalLink className="w-4 h-4" />
            Verifikasi Sertifikat
          </a>
        )}

        {/* Prev / Next navigation */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/certificates/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="line-clamp-1">{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/certificates/${next.slug}`}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors group text-right"
            >
              <span className="line-clamp-1">{next.title}</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
