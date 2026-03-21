export const experiences = [
  {
    slug: 'frontend-intern-tech',
    type: 'work',
    role: 'Frontend Developer Intern',
    company: 'Tech Company Inc.',
    icon: 'building',
    period: 'Jun 2025 - Present',
    points: [
      'Developed modular UI components for the main dashboard using React and Tailwind CSS.',
      'Improved rendering performance by 15% through strategic state management and memoization.',
      'Collaborated closely with designers to ensure pixel-perfect and responsive implementation.',
    ],
    photos: [
      // Contoh foto, bisa diganti nanti
      // '/experience/magang1.jpg',
      // '/experience/magang2.jpg'
    ],
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'head-of-tech-udc',
    type: 'org',
    role: 'Head of Technology',
    company: 'University Developer Club',
    icon: 'users',
    period: '2024 - 2025',
    points: [
      'Led a team of 10 developers to build the official club website, increasing member engagement by 30%.',
      'Organized weekly workshops on modern web development practices (Next.js, Tailwind, Git).',
      'Established code review guidelines that reduced production bugs significantly.',
    ],
    photos: [
      // '/experience/org1.jpg',
    ],
    accent: 'from-red-500 to-rose-600',
  },
];

export type ExperienceItem = typeof experiences[0];
