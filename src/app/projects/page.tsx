import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects | Portfolio',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">
          Semua <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Proyek</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map(project => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 transition-all duration-300 group overflow-hidden flex flex-col hover:-translate-y-1"
            >
              {/* Banner */}
              {project.image ? (
                <div className="relative h-40 flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ) : (
                <div className="relative h-40 bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`} />
                  <span className="text-6xl font-black text-slate-300 dark:text-slate-700 select-none tracking-tighter transition-transform duration-500 group-hover:scale-110">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded-full border border-slate-100 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-slate-400 self-center">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
