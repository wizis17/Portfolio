import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { projects, tones } from '../data'
import { heading } from './About'
import { btn } from './Hero'

// Mini UI mockups for project thumbnails. Accent parts use currentColor.
const layouts: ReactNode[] = [
  <>
    <rect x="44" y="30" width="60" height="8" rx="3" className="fill-line" />
    {[46, 62, 78].map((y) => (
      <rect key={y} x="44" y={y} width="168" height="10" rx="3" className="fill-bg" />
    ))}
    <rect x="44" y="94" width="120" height="10" rx="3" className="fill-bg" />
    <circle cx="200" cy="51" r="4" fill="currentColor" />
    <circle cx="200" cy="67" r="4" fill="currentColor" opacity=".5" />
  </>,
  <>
    <rect x="44" y="30" width="80" height="34" rx="5" fill="currentColor" />
    <rect x="132" y="30" width="80" height="34" rx="5" className="fill-bg" />
    <rect x="44" y="72" width="168" height="8" rx="3" className="fill-line" />
    <rect x="44" y="86" width="168" height="8" rx="3" className="fill-bg" />
    <rect x="44" y="100" width="168" height="8" rx="3" className="fill-bg" />
  </>,
  <>
    <rect x="44" y="32" width="96" height="16" rx="8" className="fill-bg" />
    <rect x="116" y="56" width="96" height="16" rx="8" fill="currentColor" />
    <rect x="44" y="80" width="120" height="16" rx="8" className="fill-bg" />
    <rect x="44" y="104" width="168" height="8" rx="4" className="fill-line" />
  </>,
  <>
    <rect x="44" y="30" width="52" height="40" rx="5" className="fill-bg" />
    <rect x="102" y="30" width="52" height="40" rx="5" fill="currentColor" opacity=".85" />
    <rect x="160" y="30" width="52" height="40" rx="5" className="fill-bg" />
    <path d="M44 104l30-14 26 8 30-20 30 10 52-18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
  </>,
]

function Thumb({ index, accent }: { index: number; accent: string }) {
  return (
    <svg viewBox="0 0 220 130" aria-hidden="true" className={`block h-auto w-full transition-transform duration-300 group-hover:-translate-y-1.5 ${accent}`}>
      <rect width="220" height="140" rx="10" className="fill-card" />
      <rect width="220" height="16" rx="10" className="fill-line" />
      <circle cx="10" cy="8" r="2.5" className="fill-coral" />
      <circle cx="18" cy="8" r="2.5" className="fill-sun" />
      <circle cx="26" cy="8" r="2.5" className="fill-lime" />
      <rect x="8" y="24" width="26" height="100" rx="4" className="fill-bg" />
      <rect x="13" y="30" width="16" height="4" rx="2" fill="currentColor" />
      <rect x="13" y="40" width="16" height="4" rx="2" className="fill-line" />
      <rect x="13" y="50" width="16" height="4" rx="2" className="fill-line" />
      {layouts[index % layouts.length]}
    </svg>
  )
}

export function Work() {
  return (
    <section id="work" className="wrap pt-[clamp(56px,8vw,96px)]">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className={`${heading} underline decoration-lime decoration-[6px] underline-offset-[10px]`}>Selected Work</h2>
        <div className="flex max-w-[280px] items-center gap-3 text-[.92rem]">
          <span>A few things I've built, shipped, and kept running — with plenty of iced coffee.</span>
          <svg viewBox="0 0 52 52" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-[52px] flex-none">
            <path d="M10 20h26v14a10 10 0 01-10 10h-6a10 10 0 01-10-10z" />
            <path d="M36 24h4a5 5 0 010 10h-4" />
            <path d="M18 6c-2 3 2 5 0 8M26 4c-2 3 2 5 0 8" />
            <path d="M23 33c-4-3-6-5-4-7 1.5-1.5 3 0 4 1 1-1 2.5-2.5 4-1 2 2 0 4-4 7z" className="fill-coral" stroke="none" />
          </svg>
        </div>
      </div>

      <div className="mt-[30px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => {
          const tone = tones[p.tone]
          return (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-card transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgba(30,40,90,.45)]"
            >
              <div className={`grid aspect-[4/3] place-items-end overflow-hidden px-[18px] pt-[18px] ${tone.soft}`}>
                <Thumb index={i} accent={tone.text} />
              </div>
              <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-4">
                <h3 className="flex items-center gap-2 font-bold">
                  {p.title}
                  <span className={`size-2 rounded-full ${tone.dot}`} />
                </h3>
                <div className={`mb-2 mt-0.5 text-[.82rem] font-semibold ${tone.text}`}>{p.category}</div>
                <p className="mb-3 flex-1 text-[.88rem] text-muted">{p.text}</p>
                <a href={p.href} className="inline-flex items-center gap-1.5 text-[.85rem] font-semibold text-brand">
                  {p.link} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-7 flex justify-center">
        <a className={btn} href="#">
          See all projects <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
