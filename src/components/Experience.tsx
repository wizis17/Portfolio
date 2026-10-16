import type { ReactNode } from 'react'
import { certificates, experience, skills, volunteer } from '../data'
import { SectionHead, kicker } from './SectionHead'

function Column({ title, className = '', children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={`border-t border-accent pt-5 ${className}`}>
      <h3 className={`mb-5 ${kicker}`}>{title}</h3>
      {children}
    </div>
  )
}

function Timeline({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title} className="relative pb-4 pl-[22px] text-[.88rem] text-muted">
          <span className="absolute left-0 top-[9px] size-2 rounded-full bg-accent" />
          <b className="block text-[.92rem] text-ink">{item.title}</b>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export function Experience() {
  return (
    <section id="experience" className="wrap pt-[clamp(64px,9vw,112px)]">
      <SectionHead name="Experience" title="Background" />
      <div className="mt-8 grid gap-x-[clamp(24px,4vw,48px)] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <Column title="Experience">
          <Timeline items={experience} />
        </Column>
        <Column title="Certificates">
          <Timeline items={certificates} />
        </Column>
        <Column title="Volunteer">
          <Timeline items={volunteer} />
        </Column>
        <Column title="Skills" className="col-span-full">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-line px-3.5 py-1 text-[.82rem] font-medium">
                {s}
              </span>
            ))}
          </div>
        </Column>
      </div>
    </section>
  )
}
