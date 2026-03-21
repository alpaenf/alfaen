// Data sertifikat — edit di sini untuk menambah/mengubah sertifikat
export const certificates = [
  {
    slug: 'sertif-1',
    title: 'Sertifikat Pertama Kamu',
    issuer: 'Platform / Lembaga',
    date: 'Jan 2025',
    image: null as string | null, // Ganti: '/certificates/cert1.png'
    verifyLink: '#',
    description: 'Deskripsi singkat tentang sertifikat ini dan apa yang kamu pelajari.',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'sertif-2',
    title: 'Sertifikat Kedua',
    issuer: 'Platform / Lembaga',
    date: 'Mar 2025',
    image: null as string | null,
    verifyLink: '#',
    description: 'Deskripsi singkat tentang sertifikat ini dan apa yang kamu pelajari.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'sertif-3',
    title: 'Sertifikat Ketiga',
    issuer: 'Platform / Lembaga',
    date: 'Jun 2025',
    image: null as string | null,
    verifyLink: '#',
    description: 'Deskripsi singkat tentang sertifikat ini dan apa yang kamu pelajari.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    slug: 'sertif-4',
    title: 'Sertifikat Keempat',
    issuer: 'Platform / Lembaga',
    date: 'Sep 2025',
    image: null as string | null,
    verifyLink: '#',
    description: 'Deskripsi singkat tentang sertifikat ini dan apa yang kamu pelajari.',
    accent: 'from-orange-400 to-red-500',
  },
];

export type Certificate = typeof certificates[0];
