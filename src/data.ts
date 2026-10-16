// All page content lives here — edit this file to update the site.
import cvFile from '../Public/image/Tang_KavTheng_Software_Developer_Resume.pdf'

export const profile = {
  name: 'THENG',
  role: 'DEV',
  title: 'Full-Stack Developer',
  edition: '2026',
  tagline:
    'I build the internal systems a busy restaurant group runs on — fast, reliable, and easy for staff to use.',
  about:
    "I'm an IT Engineering student specializing in Software Engineering at the Royal University of Phnom Penh. My journey in programming began with an interest in solving complex problems, leading me to explore various programming languages and technologies.",
  motto: ['Learn.', 'Build.', 'Repeat.'],
  location: 'Phnom Penh, Cambodia',
  email: 'tangkavtheng@gmail.com',
  site: 'personal-portfolio.th-eng.tech',
  github: 'github.com/wizis17',
  cvUrl: cvFile,
  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/tang-kavtheng-3a6b30362/' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/wizis17' },
    { label: 'Telegram', icon: 'telegram', href: 'https://t.me/xiaochen_17' },
  ] as const,
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const services = [
  {
    icon: 'web',
    title: 'Web Development',
    text: 'Responsive dashboards and apps in React and Next.js, built for staff on any screen.',
  },
  {
    icon: 'backend',
    title: 'Backend & APIs',
    text: 'NestJS and Express APIs on PostgreSQL, with schemas that hold up across branches.',
  },
  {
    icon: 'devops',
    title: 'DevOps & Hosting',
    text: 'Docker Compose, Nginx and Caddy on a VPS, with TLS and a locked-down server from day one.',
  },
  {
    icon: 'data',
    title: 'Data & Ops Tools',
    text: 'Payroll runs, reports and Excel automation that save managers hours every month.',
  },
] as const

export const projects: {
  title: string
  category: string
  text: string
  link: string
  href: string
}[] = [
  // Thumbnails follow list order: list view, product card, chat, dashboard chart.
  {
    title: 'HR Platform',
    category: 'People ops',
    text: 'Staff records, recruitment and attendance managed in one place.',
    link: 'View on GitHub',
    href: 'https://github.com/wizis17',
  },
  {
    title: 'E-commerce Website',
    category: 'Online store',
    text: 'Product catalog, shopping cart and checkout for an online shop.',
    link: 'View on GitHub',
    href: 'https://github.com/wizis17',
  },
  {
    title: 'AI Automation',
    category: 'AI',
    text: 'Workflows that use AI to handle repetitive tasks automatically.',
    link: 'View on GitHub',
    href: 'https://github.com/wizis17',
  },
  {
    title: 'School Management System',
    category: 'Education',
    text: 'Students, classes, attendance and grades for a school, in one dashboard.',
    link: 'View on GitHub',
    href: 'https://github.com/wizis17',
  },
]

export const experience = [
  { title: 'Software Developer Intern', text: 'July 2026 – Present' },
  { title: 'IT Engineering Student', text: 'Royal University of Phnom Penh — Software Engineering' },
]

export const certificates = [
  { title: 'Python Programming', text: 'IT Center · 2024' },
  { title: 'C & C++ Programming', text: 'Addbook · 2024' },
  { title: 'ASEAN Data Science Explorers', text: 'ASEAN Foundation · 2025' },
]

export const volunteer = [
  { title: 'Cambodia Robotics Olympiad', text: 'STEM · 2025' },
  { title: 'EU-Manpower', text: 'Team2 · 2025' },
  { title: 'CAMSTEMFEST', text: 'STEM · 2026' },
  { title: 'ICIA', text: 'STEM · 2026' },
]

export const skills = [
  'TypeScript', 'React', 'Next.js', 'Tailwind', 'Node.js', 'NestJS',
  'Socket.IO', 'Python', 'PostgreSQL', 'Supabase', 'Prisma', 'Redis',
  'Docker', 'Nginx', 'Caddy', 'Figma', 'Git',
]
