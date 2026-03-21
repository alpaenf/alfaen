import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return {
    title: project ? `${project.title} | Projects` : 'Project',
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  // Siblings navigation
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        {/* Project Image Banner */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 mb-10 bg-slate-50 dark:bg-slate-800">
          {project.image ? (
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="relative aspect-video w-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/60 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r ${project.accent} rounded-t-3xl`} />
              <div className="text-8xl font-black text-slate-300 dark:text-slate-700 select-none tracking-tighter mix-blend-multiply dark:mix-blend-screen opacity-50">
                {project.title.slice(0, 2).toUpperCase()}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight font-sans tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span key={tech} className="px-3 py-1 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 text-sm font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            <p className="font-medium text-slate-800 dark:text-slate-200 text-xl leading-snug">
              {project.description}
            </p>
            <p>
              {project.longDescription}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 py-8 border-t border-b border-slate-100 dark:border-slate-800/80 mb-12">
          {project.demoLink && project.demoLink !== '#' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors shadow-lg shadow-red-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              Kunjungi Live Demo
            </a>
          )}
          {project.repoLink && project.repoLink !== '#' && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-transparent dark:border-slate-700 px-6 py-3 rounded-full font-medium text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-slate-900 dark:text-white" />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Previous</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{prev.title}</span>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group text-right p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <div className="flex flex-col items-end">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Next</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{next.title}</span>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-slate-900 dark:text-white" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
