export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  category: 'lomba' | 'sertifikasi' | 'pelatihan' | 'organisasi';
  image: string | null;
  verifyLink: string;
  description: string;
  descriptionId?: string;
  accent: string;
}

export const certificates: Certificate[] = [
  // ─── PRESTASI & LOMBA ───
  {
    slug: 'bi-hackathon-2026',
    title: '3rd Place – Bank Indonesia Purwokerto Mini Hackathon 2026',
    issuer: 'Bank Indonesia Purwokerto',
    date: 'Mei 2026',
    category: 'lomba',
    image: null,
    verifyLink: '#',
    description: 'Chief Technology Officer (CTO) of Team TumbasNa, developing an AI-powered B2B food supply chain platform integrating AI Supply Matching, QRIS Escrow, WhatsApp Commerce, and Economic Intelligence Dashboard.',
    descriptionId: 'Chief Technology Officer (CTO) Tim TumbasNa, mengembangkan platform rantai pasok pangan B2B berbasis AI yang mengintegrasikan AI Supply Matching, QRIS Escrow, WhatsApp Commerce, dan Dasbor Intelijen Ekonomi.',
    accent: 'from-amber-500 to-red-500',
  },
  {
    slug: 'lktin-avicenna-2026',
    title: '1st Place & Best Speaker – National Scientific Paper Competition (LKTIN Avicenna)',
    issuer: 'PK IMM Pharmacy, Universitas Muhammadiyah Purwokerto',
    date: '2026',
    category: 'lomba',
    image: null,
    verifyLink: '#',
    description: 'Served as lead researcher in developing HEALTIVA, an AI-powered digital health platform for Posyandu services integrating disease risk prediction, digital medical records, and preventive healthcare.',
    descriptionId: 'Peneliti utama dalam pengembangan HEALTIVA, platform kesehatan digital berbasis AI untuk layanan Posyandu dengan integrasi prediksi risiko penyakit, rekam medis digital, dan kesehatan preventif.',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    slug: 'mic-innovest-2026',
    title: '2nd Place – Management Informatics Competition (MIC) INNOVEST',
    issuer: 'MIC INNOVEST',
    date: '2026',
    category: 'lomba',
    image: null,
    verifyLink: '#',
    description: 'Developed VITALY, an IoMT and AI-based health monitoring platform utilizing Hybrid Intelligence architecture for preventive healthcare.',
    descriptionId: 'Mengembangkan VITALY, platform pemantauan kesehatan berbasis IoMT dan AI dengan arsitektur Hybrid Intelligence untuk layanan kesehatan preventif.',
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'infest-sdgs-2026',
    title: '3rd Place – National SDGs Scientific Paper Competition (INFEST)',
    issuer: 'Universitas PGRI Semarang',
    date: '2026',
    category: 'lomba',
    image: null,
    verifyLink: '#',
    description: 'Developed MARIS 2.0, an AI-GIS-based coastal intelligence system for climate risk mitigation and blue carbon valuation in Northern Central Java.',
    descriptionId: 'Mengembangkan MARIS 2.0, sistem intelijen pesisir berbasis AI-GIS untuk mitigasi risiko iklim dan valuasi karbon biru di Jawa Tengah bagian utara.',
    accent: 'from-cyan-500 to-blue-600',
  },

  // ─── SERTIFIKASI & KARIR ───
  {
    slug: 'junior-web-developer-bnsp',
    title: 'Junior Web Developer Certification',
    issuer: 'BNSP / LSP Informatika',
    date: '2025',
    category: 'sertifikasi',
    image: null,
    verifyLink: '#',
    description: 'National competence certification in web application programming, database design, and modern front-end standards.',
    descriptionId: 'Sertifikasi kompetensi nasional bidang pemrograman aplikasi web, perancangan basis data, dan standar front-end modern.',
    accent: 'from-indigo-500 to-purple-600',
  },
  {
    slug: 'dicoding-frontend-developer',
    title: 'Belajar Fundamental Front-End Web Development',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    category: 'sertifikasi',
    image: null,
    verifyLink: '#',
    description: 'Certified front-end web development specialization covering modern JavaScript ES6+, Web Components, and REST API integration.',
    descriptionId: 'Spesialisasi pengembangan web front-end tersertifikasi mencakup JavaScript ES6+, Web Components, dan integrasi REST API.',
    accent: 'from-blue-600 to-cyan-500',
  },

  // ─── PELATIHAN & WORKSHOP ───
  {
    slug: 'workshop-nextjs-fullstack',
    title: 'Fullstack Web Development with Next.js & React',
    issuer: 'Google Developer Student Clubs (GDSC)',
    date: '2025',
    category: 'pelatihan',
    image: null,
    verifyLink: '#',
    description: 'Intensive workshop on server-side rendering, component-driven UI architecture, Tailwind CSS, and performance optimization.',
    descriptionId: 'Workshop intensif server-side rendering, arsitektur antarmuka berbasis komponen, Tailwind CSS, dan optimasi performa web.',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'masterclass-uiux-figma',
    title: 'UI/UX Design Systems & High-Fidelity Prototyping',
    issuer: 'Design Masterclass Community',
    date: '2025',
    category: 'pelatihan',
    image: null,
    verifyLink: '#',
    description: 'Hands-on training in scalable Figma design systems, responsive layout grids, usability testing, and interactive micro-interactions.',
    descriptionId: 'Pelatihan praktis desain sistem Figma yang terukur, grid tata letak responsif, usability testing, dan mikro-interaksi prototipe.',
    accent: 'from-pink-500 to-rose-500',
  },

  // ─── ORGANISASI & PENGABDIAN ───
  {
    slug: 'best-staff-hmif-2025',
    title: 'Best Staff of the Month HMIF UNSOED',
    issuer: 'Himpunan Mahasiswa Informatika UNSOED',
    date: 'September 2025',
    category: 'organisasi',
    image: null,
    verifyLink: '#',
    description: 'Awarded Best Staff of the Month for outstanding dedication, leadership, and contribution to division revenue targets.',
    descriptionId: 'Penghargaan Best Staff of the Month atas dedikasi, kepemimpinan, dan kontribusi unggul dalam target program divisi.',
    accent: 'from-rose-500 to-red-600',
  },
  {
    slug: 'head-creation-business-hmif',
    title: 'Head of Creation & Business Division Certificate',
    issuer: 'Himpunan Mahasiswa Informatika UNSOED',
    date: '2025 – 2026',
    category: 'organisasi',
    image: null,
    verifyLink: '#',
    description: 'Certificate of leadership for heading a 7-member division overseeing organizational merchandise, sponsorships, and business development.',
    descriptionId: 'Sertifikat kepemimpinan sebagai Kepala Divisi Creation & Business membawahi 7 staf dalam pengelolaan bisnis organisasi dan sponsorship.',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'hmif-community-service',
    title: 'HMIF Community Service Program Certificate',
    issuer: 'HMIF Universitas Jenderal Soedirman',
    date: 'Agustus – September 2025',
    category: 'organisasi',
    image: null,
    verifyLink: '#',
    description: 'Delivered introductory Informatics learning materials to community participants and assisted in technology literacy campaigns.',
    descriptionId: 'Penyampaian materi pengenalan Informatika bagi masyarakat dan pendampingan kegiatan edukasi literasi teknologi.',
    accent: 'from-teal-500 to-emerald-600',
  },
  {
    slug: 'mentor-soedirman-summit',
    title: 'Group Mentor Staff – Soedirman Student Summit',
    issuer: 'Universitas Jenderal Soedirman',
    date: '2024 – 2025',
    category: 'organisasi',
    image: null,
    verifyLink: '#',
    description: 'Guided and mentored incoming university freshmen during university- and department-level orientation programs.',
    descriptionId: 'Membimbing dan mendampingi mahasiswa baru selama rangkaian kegiatan orientasi tingkat universitas dan jurusan.',
    accent: 'from-amber-500 to-orange-600',
  },
];
