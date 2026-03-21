'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

type SkillItem = {
  name: string;
  logo: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const CLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500" fill="currentColor">
    <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="12" y="15.5" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">C</text>
  </svg>
);

// Logo Components
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" opacity="0.6"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" opacity="0.6" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" opacity="0.6" transform="rotate(120 12 12)"/>
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-800 dark:text-white" fill="currentColor">
    <text x="12" y="16" fontSize="14" fontWeight="bold" textAnchor="middle">N</text>
  </svg>
);

const VueLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-500" fill="currentColor">
    <path d="M2 4L12 20L22 4H17L12 12L7 4H2Z" />
    <path d="M7 4L12 12L17 4H13.5L12 6.5L10.5 4H7Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-sky-400" fill="currentColor">
    <path d="M 8 12 Q 12 8 16 12 Q 12 16 8 12M 6 8 Q 10 4 14 8 Q 10 12 6 8M 10 16 Q 14 12 18 16 Q 14 20 10 16"/>
  </svg>
);

const LaravelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500" fill="currentColor">
    <path d="M2 6.5L12 2L22 6.5V17.5L12 22L2 17.5V6.5Z"/>
    <path d="M12 4.5L18.5 7.5V15L12 18L5.5 15V7.5L12 4.5Z" fill="white" fillOpacity="0.8"/>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="7" rx="9" ry="3" />
    <path d="M3 7v10c0 1.66 4.03 3 9 3s9-1.34 9-3V7" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

const SupabaseLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-400" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 4L12 12L18 12Z" />
  </svg>
);

const FirebaseLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-amber-500" fill="currentColor">
    <path d="M4 17L12 22L20 17L16 4L12 8L9 2Z" />
  </svg>
);

const FlutterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-500" fill="currentColor">
    <path d="M14 2L4 12L9 17L19 7Z" />
    <path d="M14 12L10 16L19 22H24L14 12Z" />
  </svg>
);

const KotlinLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600" fill="currentColor">
    <path d="M2 22L12 12L2 2Z" />
    <path d="M12 12L22 2H2Z" />
    <path d="M2 2V12L12 2H2Z" fillOpacity="0.6"/>
  </svg>
);

const InertiaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-500" fill="currentColor">
    <path d="M6 6L18 12L6 18Z" />
    <path d="M10 6L22 12L10 18Z" fillOpacity="0.5"/>
  </svg>
);

const FilamentLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500" fill="currentColor">
    <path d="M12 2L22 7L12 12L2 7Z" />
    <path d="M2 12L12 17L22 12" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 17L12 22L22 17" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">TS</text>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-400" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <text x="12" y="16" fontSize="11" fontWeight="bold" textAnchor="middle" fill="black">JS</text>
  </svg>
);

const BootstrapLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600" fill="currentColor">
    <path d="M4 3C3 3 2 4 2 5V19C2 20 3 21 4 21H20C21 21 22 20 22 19V5C22 4 21 3 20 3H4ZM8.5 7H14C15.5 7 16.5 7.5 16.5 9C16.5 10 16 10.5 15 11C16.5 11 17 12 17 13.5C17 15.5 15.5 16.5 13.5 16.5H8.5V7ZM11 9.5V11H13.5C14 11 14.5 10.5 14.5 9.5C14.5 9 14 8.5 13.5 8.5H11V9.5ZM11 13V14.5H13.5C14 14.5 14.5 14 14.5 13C14.5 12 14 11.5 13.5 11.5H11V13Z" />
  </svg>
);

const AdonisJSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5a45ff]" fill="currentColor">
    <path d="M12 2L22 22H18.5L12 9L5.5 22H2L12 2Z" />
    <path d="M12 12L16 20H13.5L12 16L10.5 20H8L12 12Z" fillOpacity="0.5"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-600" fill="currentColor">
    <circle cx="18" cy="6" r="1.5"/>
    <circle cx="6" cy="18" r="1.5"/>
    <path d="M 6 6 L 18 18 M 18 6 L 6 18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const SkillBadge = ({ skill }: { skill: SkillItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-red-300 dark:hover:border-red-500/50 hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-default"
    >
      <div className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-all duration-200">
        {skill.logo}
      </div>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center line-clamp-2 group-hover:text-slate-900 dark:group-hover:text-slate-100">
        {skill.name}
      </span>
    </motion.div>
  );
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', logo: <ReactLogo /> },
      { name: 'Next.js', logo: <NextjsLogo /> },
      { name: 'Vue JS', logo: <VueLogo /> },
      { name: 'Flutter', logo: <FlutterLogo /> },
      { name: 'Kotlin', logo: <KotlinLogo /> },
      { name: 'JavaScript', logo: <JavaScriptLogo /> },
      { name: 'TypeScript', logo: <TypeScriptLogo /> },
      { name: 'Tailwind CSS', logo: <TailwindLogo /> },
      { name: 'Bootstrap', logo: <BootstrapLogo /> },
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Laravel', logo: <LaravelLogo /> },
      { name: 'MySQL', logo: <MySQLLogo /> },
      { name: 'Supabase', logo: <SupabaseLogo /> },
      { name: 'Firebase', logo: <FirebaseLogo /> },
      { name: 'Adonis JS', logo: <AdonisJSLogo /> },
      { name: 'Filament', logo: <FilamentLogo /> },
      { name: 'Inertia.js', logo: <InertiaLogo /> },
      { name: 'C / C++', logo: <CLogo /> }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    skills: [
      { name: 'Git & GitHub', logo: <GitLogo /> },
      { name: 'Figma', logo: <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-500" fill="currentColor"><circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="8" r="2.5"/><circle cx="16" cy="16" r="2.5"/><circle cx="8" cy="16" r="2.5"/><circle cx="12" cy="12" r="1.5" fill="white"/></svg> },
      { name: 'Postman', logo: <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M 8 10 L 12 14 L 16 10" stroke="white" strokeWidth="1.5" fill="none"/></svg> },
      { name: 'Problem Solving', logo: <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="M 12 8 L 14 12 L 12 16 L 10 12 Z"/></svg> },
      { name: 'Communication', logo: <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M 4 12 L 20 12 M 4 8 L 20 8 M 4 16 L 20 16"/></svg> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading>Skills & Expertise</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-100 dark:hover:border-red-900 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-red-200 dark:bg-red-800"></span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}