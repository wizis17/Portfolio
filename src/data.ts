// All page content lives here — edit this file to update the site.

export const profile = {
  name: 'Tenji',
  role: 'Tech Lead',
  title: 'Full-Stack Developer',
  edition: '2026',
  tagline:
    'I build the internal systems a busy restaurant group runs on — fast, reliable, and easy for staff to use.',
  about:
    "I'm a full-stack developer and technical lead on a five-person IT team. I turn messy day-to-day operations — hiring, payroll, team chat — into clean web systems, then deploy and keep them running myself.",
  motto: ['Code.', 'Ship.', 'Serve.'],
  location: 'Cambodia',
  email: 'you@example.com',
  site: 'yourname.dev',
  github: 'github.com/your-handle',
  cvUrl: '#',
  socials: [
    { label: 'LinkedIn', short: 'in', href: '#' },
    { label: 'GitHub', short: 'gh', href: '#' },
    { label: 'Telegram', short: 'tg', href: '#' },
  ],
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
  {
    title: 'HR Platform',
    category: 'People ops',
    text: 'Recruitment, staff records and attendance for 8 branches, in Khmer and English.',
    link: 'View case study',
    href: '#',
  },
  {
    title: 'Payroll Module',
    category: 'Finance',
    text: 'Position-based allowances and a dynamic daily rate, run for every branch from one place.',
    link: 'View case study',
    href: '#',
  },
  {
    title: 'Team Messenger',
    category: 'Real-time',
    text: 'Self-hosted company chat on Socket.IO, with files stored on servers the company owns.',
    link: 'View case study',
    href: '#',
  },
  {
    title: 'Group ERP',
    category: 'In progress',
    text: 'Growing the HR and inventory services into one system for the whole group.',
    link: 'Follow along',
    href: '#',
  },
]

export const experience = [
  { title: 'Technical Lead — Internal Platforms', text: 'Restaurant & hospitality group' },
  { title: 'Shipped the HR platform', text: '8 branches, recruitment to payroll' },
  { title: 'Shipped the team messenger', text: 'Self-hosted on DigitalOcean' },
  { title: 'Now', text: 'Building the group ERP' },
]

export const sideQuests = [
  { title: 'Gloss', text: 'A browser reading app that glosses foreign-language texts line by line' },
  { title: 'Linux & DevOps deep dives', text: "Command-line fundamentals from a developer's angle" },
  { title: 'Creative web experiments', text: 'Small builds to try new ideas' },
]

export const skills = [
  'TypeScript', 'React', 'Next.js', 'Tailwind', 'Node.js', 'NestJS',
  'Socket.IO', 'Python', 'PostgreSQL', 'Supabase', 'Prisma', 'Redis',
  'Docker', 'Nginx', 'Caddy', 'Figma', 'Git',
]
