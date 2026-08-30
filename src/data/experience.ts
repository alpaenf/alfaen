export interface ExperienceItem {
  slug: string;
  type: 'work' | 'org' | 'academic' | 'bootcamp';
  category: 'professional' | 'organizational' | 'bootcamp';
  role: string;
  roleId?: string;
  company: string;
  companyId?: string;
  icon?: 'flask' | 'building' | 'users' | 'terminal' | 'code' | 'graduation' | 'shield';
  logo?: string;
  period: string;
  periodId?: string;
  points: string[];
  pointsId?: string[];
  photos: string[];
  accent: string;
}

export const experiences: ExperienceItem[] = [
  // ─── PROFESSIONAL EXPERIENCES ───
  {
    slug: 'research-technology-development-lppm-unsoed',
    type: 'work',
    category: 'professional',
    role: 'Research & Technology Development Intern',
    roleId: 'Magang Riset & Pengembangan Teknologi',
    company: 'IT Division · LPPM UNSOED',
    companyId: 'Divisi IT · LPPM UNSOED',
    icon: 'flask',
    logo: '/experience/lppm-unsoed.png',
    period: 'Feb 2025 – Present',
    periodId: 'Feb 2025 – Sekarang',
    points: [
      'Supported research and technology development activities within the IT Division, contributing to digital and technology-related projects.',
      'Assisted in developing and implementing technology solutions to support institutional and community engagement programs at LPPM UNSOED.'
    ],
    pointsId: [
      'Mendukung aktivitas riset dan pengembangan teknologi pada Divisi IT, berkontribusi pada berbagai proyek digital dan inovasi teknologi.',
      'Membantu perancangan dan implementasi solusi teknologi untuk mendukung program kelembagaan dan pengabdian masyarakat di LPPM UNSOED.'
    ],
    photos: ['/experience/lppm-unsoed.png'],
    accent: 'from-orange-500 via-amber-500 to-blue-600',
  },
  {
    slug: 'co-founder-teknologi-inovasi-soedirman',
    type: 'work',
    category: 'professional',
    role: 'Co-Founder',
    roleId: 'Co-Founder',
    company: 'Teknologi Inovasi Soedirman · Entrepreneurship',
    companyId: 'Teknologi Inovasi Soedirman · Kewirausahaan',
    icon: 'building',
    logo: '/experience/TECHSOE1.png',
    period: 'Mar 2026 – Present',
    periodId: 'Mar 2026 – Sekarang',
    points: [
      'Co-founded Teknologi Inovasi Soedirman, contributing to the development of technology-driven initiatives and innovative solutions.',
      'Collaborated on project development, strategic planning, and technology implementation to support the organization’s growth and innovation goals.'
    ],
    pointsId: [
      'Salah satu pendiri Teknologi Inovasi Soedirman, berkontribusi pada pengembangan inisiatif berbasis teknologi dan solusi inovatif.',
      'Berkolaborasi dalam pengembangan proyek, perencanaan strategis, dan implementasi teknologi untuk mendukung target pertumbuhan organisasi.'
    ],
    photos: ['/experience/TECHSOE1.png'],
    accent: 'from-blue-600 via-indigo-600 to-cyan-500',
  },
  {
    slug: 'it-support-technician-kp-spams-damar-wulan',
    type: 'work',
    category: 'professional',
    role: 'IT Support Technician',
    roleId: 'Teknisi Dukungan IT',
    company: 'KP-SPAMS DAMAR WULAN · Contract',
    companyId: 'KP-SPAMS DAMAR WULAN · Kontrak',
    icon: 'terminal',
    logo: '/experience/kp-spams.png',
    period: 'Feb 2026 – Present',
    periodId: 'Feb 2026 – Sekarang',
    points: [
      'Designed and developed a web-based billing and management application to support customer, billing, and administrative operations for KP-SPAMS DAMAR WULAN.',
      'Implemented and maintained application features using Vue.js and Tailwind CSS, while troubleshooting technical issues and improving system usability and reliability.',
      'Provided ongoing technical support and system maintenance to ensure stable day-to-day operations and reliable access to billing and management functions.'
    ],
    pointsId: [
      'Merancang dan membangun aplikasi penagihan dan manajemen berbasis web untuk mendukung operasional pelanggan dan administrasi KP-SPAMS DAMAR WULAN.',
      'Mengimplementasikan dan memelihara fitur aplikasi dengan Vue.js dan Tailwind CSS, mengatasi kendala teknis, serta meningkatkan keandalan sistem.',
      'Memberikan dukungan teknis berkelanjutan dan pemeliharaan sistem guna memastikan kelancaran operasional harian.'
    ],
    photos: ['/experience/kp-spams.png'],
    accent: 'from-sky-500 via-blue-600 to-indigo-600',
  },
  {
    slug: 'it-support-technician-kemendagri',
    type: 'work',
    category: 'professional',
    role: 'IT Support Technician',
    roleId: 'Teknisi Dukungan IT',
    company: 'Kementerian Dalam Negeri · Internship',
    companyId: 'Kementerian Dalam Negeri · Magang',
    icon: 'code',
    logo: '/experience/dagri.png',
    period: 'Jul 2025 – Aug 2025',
    periodId: 'Jul 2025 – Agu 2025',
    points: [
      'Developed a web-based mapping application to support data visualization and regional analysis during an internship at the Ministry of Home Affairs.',
      'Implemented mapping and data visualization features to help present regional information in a more accessible and structured format.',
      'Assisted in the preparation and drafting of the 2026 Regional Budget (APBD) guideline document within the Directorate General of Regional Financial Development.'
    ],
    pointsId: [
      'Mengembangkan aplikasi pemetaan berbasis web untuk visualisasi data dan analisis wilayah selama magang di Kementerian Dalam Negeri.',
      'Mengimplementasikan fitur pemetaan spasial dan visualisasi data agar informasi daerah tersaji secara terstruktur dan mudah diakses.',
      'Membantu penyusunan dan perancangan dokumen pedoman APBD 2026 di lingkungan Ditjen Bina Keuangan Daerah.'
    ],
    photos: ['/experience/dagri.png'],
    accent: 'from-amber-500 via-yellow-600 to-blue-700',
  },

  // ─── ORGANIZATIONAL EXPERIENCES ───
  {
    slug: 'head-of-creative-and-business-development-hmif',
    type: 'org',
    category: 'organizational',
    role: 'Head of Creative and Business Development',
    roleId: 'Ketua Divisi Creative & Business Development',
    company: 'Himpunan Mahasiswa Informatika (HMIF)',
    companyId: 'Himpunan Mahasiswa Informatika (HMIF)',
    icon: 'users',
    logo: '/experience/hmif.png',
    period: 'Mar 2025 – Mar 2026',
    periodId: 'Mar 2025 – Mar 2026',
    points: [
      'Led a seven-member team in managing creative and business development initiatives, coordinating programs and projects to support organizational growth.',
      'Coordinated strategic initiatives including PKM socialization, Cemara programs, Infinity Wear merchandise development, and sponsorship acquisition.',
      'Managed team execution and cross-program coordination to improve program delivery, merchandise development, and organizational business activities.'
    ],
    pointsId: [
      'Memimpin tim beranggotakan 7 orang dalam mengelola inisiatif kreatif dan pengembangan bisnis organisasi.',
      'Mengoordinasikan program strategis termasuk sosialisasi PKM, program Cemara, merchandise Infinity Wear, dan perolehan sponsor.',
      'Mengelola eksekusi tim dan koordinasi lintas program untuk meningkatkan kelancaran kegiatan serta unit bisnis himpunan.'
    ],
    photos: ['/experience/hmif.png'],
    accent: 'from-amber-500 via-orange-500 to-blue-600',
  },
  {
    slug: 'creative-and-business-development-staff-hmif',
    type: 'org',
    category: 'organizational',
    role: 'Creative and Business Development Staff',
    roleId: 'Staf Divisi Creative & Business Development',
    company: 'Himpunan Mahasiswa Informatika (HMIF)',
    companyId: 'Himpunan Mahasiswa Informatika (HMIF)',
    icon: 'users',
    logo: '/experience/hmif.png',
    period: 'Mar 2024 – Mar 2025',
    periodId: 'Mar 2024 – Mar 2025',
    points: [
      'Managed the sales and distribution of official HMIF merchandise, including association jackets and executive board apparel.',
      'Coordinated merchandise production processes from order management through delivery to ensure timely fulfillment for members.',
      'Supported the division’s creative and business development activities, contributing to merchandise operations and organizational programs.'
    ],
    pointsId: [
      'Mengelola penjualan dan distribusi merchandise resmi HMIF, termasuk PDH himpunan dan apparel pengurus.',
      'Mengoordinasikan alur produksi merchandise dari pemesanan hingga distribusi tepat waktu kepada seluruh anggota.',
      'Mendukung seluruh aktivitas pengembangan bisnis dan kreativitas divisi demi keberlangsungan program organisasi.'
    ],
    photos: ['/experience/hmif.png'],
    accent: 'from-blue-600 via-indigo-600 to-amber-500',
  },

  // ─── BOOTCAMP EXPERIENCES ───
  {
    slug: 'frontend-web-development-bootcamp',
    type: 'bootcamp',
    category: 'bootcamp',
    role: 'Frontend Web Development Intensive Trainee',
    roleId: 'Peserta Intensif Frontend Web Development',
    company: 'Intensive Tech Bootcamp',
    companyId: 'Intensive Tech Bootcamp',
    icon: 'code',
    period: 'Aug 2023 – Dec 2023',
    periodId: 'Agu 2023 – Des 2023',
    points: [
      'Completed 400+ hours of intensive hands-on curriculum covering modern HTML5, CSS3, JavaScript ES6+, React, Next.js, and Tailwind CSS.',
      'Built production-ready capstone web applications with responsive design, dynamic state management, and external REST API integrations.',
      'Practiced agile development methodologies, pair programming, and continuous integration using Git & GitHub.'
    ],
    pointsId: [
      'Menyelesaikan 400+ jam kurikulum praktis mencakup HTML5 modern, CSS3, JavaScript ES6+, React, Next.js, dan Tailwind CSS.',
      'Membangun aplikasi web capstone siap produksi dengan desain responsif, state management dinamis, dan integrasi REST API eksternal.',
      'Menerapkan metodologi pengembangan agile, pair programming, dan continuous integration menggunakan Git & GitHub.'
    ],
    photos: [],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'fullstack-web-developer-bootcamp',
    type: 'bootcamp',
    category: 'bootcamp',
    role: 'Full-Stack Web Development Specialization',
    roleId: 'Spesialisasi Full-Stack Web Development',
    company: 'Digital Skills Accelerator Program',
    companyId: 'Program Akselerator Keterampilan Digital',
    icon: 'terminal',
    period: 'Feb 2023 – Jun 2023',
    periodId: 'Feb 2023 – Jun 2023',
    points: [
      'Engineered full-stack scalable web solutions using React, Node.js, Express, and relational database management (MySQL/PostgreSQL).',
      'Implemented secure user authentication (JWT/OAuth), role-based authorization, and robust API endpoints with automated unit testing.',
      'Collaborated on group sprint projects with sprint planning, daily standups, and structured code review workflows.'
    ],
    pointsId: [
      'Merancang solusi web full-stack terukur menggunakan React, Node.js, Express, dan pengelolaan database relasional (MySQL/PostgreSQL).',
      'Mengimplementasikan autentikasi pengguna aman (JWT/OAuth), otorisasi berbasis peran, dan endpoint API yang handal.',
      'Berkolaborasi dalam sprint proyek kelompok dengan perencanaan sprint terstruktur, daily standup, dan code review.'
    ],
    photos: [],
    accent: 'from-emerald-500 to-teal-600',
  }
];
