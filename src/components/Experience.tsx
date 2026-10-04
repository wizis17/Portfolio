import type { ReactNode } from 'react'
import { experience, sideQuests, skills } from '../data'
import { Burst } from './Doodles'

function Blob({ title, bg, children }: { title: string; bg: string; children: ReactNode }) {
  return (
    <div className={`rounded-[36px] px-[30px] pb-9 pt-[34px] lg:rounded-[42%_58%_50%_50%/40%_45%_55%_60%] ${bg}`}>
      <h2 className="font-soft mb-[18px] font-display text-[1.6rem] font-bold text-brand">{title}</h2>
      {children}
    </div>
  )
}

function Timeline({ items, dot }: { items: { title: string; text: string }[]; dot: string }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title} className="relative pb-3.5 pl-[22px] text-[.88rem] text-muted">
          <span className={`absolute left-0 top-[7px] size-2.5 rounded-full ${dot}`} />
          <b className="block text-[.9rem] text-ink">{item.title}</b>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export function Experience() {
  return (
    <section id="experience" className="wrap relative pt-[clamp(56px,8vw,96px)]">
      <Burst className="right-[22%] top-[30px] hidden w-10 text-brand lg:block" />
      <div className="grid gap-[22px] lg:grid-cols-3">
        <Blob title="Experience" bg="bg-lime-soft">
          <Timeline items={experience} dot="bg-lime" />
        </Blob>
        <Blob title="Side Quests" bg="bg-pink-soft">
          <Timeline items={sideQuests} dot="bg-coral" />
        </Blob>
        <Blob title="Skills" bg="bg-sun-soft">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-lg bg-card px-3 py-1.5 text-[.85rem] font-medium transition-transform hover:-translate-y-0.5">
                {s}
              </span>
            ))}
          </div>
        </Blob>
      </div>
    </section>
  )
}
