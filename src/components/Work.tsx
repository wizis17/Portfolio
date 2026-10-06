import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data'
import { card } from './About'
import { btnGhost } from './Hero'
import { SectionHead } from './SectionHead'

// Mini UI mockups for project thumbnails. Accent parts use currentColor.
const layouts: ReactNode[] = [
  <>
    <rect x="44" y="30" width="60" height="8" rx="3" className="fill-line" />
    {[46, 62, 78].map((y) => (
      <rect key={y} x="44" y={y} width="168" height="10" rx="3" className="fill-soft" />
    ))}
    <rect x="44" y="94" width="120" height="10" rx="3" className="fill-soft" />
    <circle cx="200" cy="51" r="4" fill="currentColor" />
    <circle cx="200" cy="67" r="4" fill="currentColor" opacity=".5" />
  </>,
  <>
    <rect x="44" y="30" width="80" height="34" rx="5" fill="currentColor" />
    <rect x="132" y="30" width="80" height="34" rx="5" className="fill-soft" />
    <rect x="44" y="72" width="168" height="8" rx="3" className="fill-line" />
    <rect x="44" y="86" width="168" height="8" rx="3" className="fill-soft" />
    <rect x="44" y="100" width="168" height="8" rx="3" className="fill-soft" />
  </>,
  <>
    <rect x="44" y="32" width="96" height="16" rx="8" className="fill-soft" />
    <rect x="116" y="56" width="96" height="16" rx="8" fill="currentColor" />
    <rect x="44" y="80" width="120" height="16" rx="8" className="fill-soft" />
    <rect x="44" y="104" width="168" height="8" rx="4" className="fill-line" />
  </>,
  <>
    <rect x="44" y="30" width="52" height="40" rx="5" className="fill-soft" />
    <rect x="102" y="30" width="52" height="40" rx="5" fill="currentColor" opacity=".85" />
    <rect x="160" y="30" width="52" height="40" rx="5" className="fill-soft" />
    <path d="M44 104l30-14 26 8 30-20 30 10 52-18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
  </>,
]

function Thumb({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 220 130" aria-hidden="true" className="block h-auto w-full text-accent transition-transform duration-300 group-hover:-translate-y-1.5">
      <rect width="220" height="140" rx="10" className="fill-card" />
      <rect width="220" height="16" rx="10" className="fill-line" />
      <circle cx="10" cy="8" r="2.5" className="fill-muted" />
      <circle cx="18" cy="8" r="2.5" className="fill-muted" opacity=".6" />
      <circle cx="26" cy="8" r="2.5" className="fill-muted" opacity=".3" />
      <rect x="8" y="24" width="26" height="100" rx="4" className="fill-soft" />
      <rect x="13" y="30" width="16" height="4" rx="2" fill="currentColor" />
      <rect x="13" y="40" width="16" height="4" rx="2" className="fill-line" />
      <rect x="13" y="50" width="16" height="4" rx="2" className="fill-line" />
      {layouts[index % layouts.length]}
    </svg>
  )
}

export function Work() {
  return (
    <section id="work" className="wrap pt-[clamp(64px,9vw,112px)]">
      <SectionHead name="Work" title="Selected work">
        <p className="max-w-[300px] text-[.9rem] text-muted">
          A few things I've built, shipped, and kept running — with plenty of iced coffee.
        </p>
      </SectionHead>

      <div className="mt-8 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <article key={p.title} className={`group flex flex-col overflow-hidden ${card}`}>
            <div className="grid aspect-[4/3] place-items-end overflow-hidden bg-soft px-[18px] pt-[18px]">
              <Thumb index={i} />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <div className="font-display text-[.72rem] font-bold uppercase tracking-[.18em] text-accent-ink">{p.category}</div>
              <h3 className="mb-2 mt-1 font-bold tracking-[.06em]">{p.title}</h3>
              <p className="mb-4 flex-1 text-[.88rem] text-muted">{p.text}</p>
              <a href={p.href} className="inline-flex items-center gap-1.5 text-[.85rem] font-bold">
                {p.link} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-9 flex justify-center">
        <a className={btnGhost} href="#">
          See all projects <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
