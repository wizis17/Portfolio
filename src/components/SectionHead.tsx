import type { ReactNode } from 'react'

export const label = 'font-display text-[.78rem] font-bold italic tracking-[.22em] text-muted'

export const heading =
  'font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium uppercase leading-[1.25] tracking-[.18em] text-ink'

export const kicker = 'font-display text-[.95rem] font-bold uppercase tracking-[.2em] text-accent-ink'

// "// label" over a wide-tracked title, marked with the amber bar.
export function SectionHead({ name, title, children }: { name: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div className="border-l-[10px] border-accent pl-5">
        <p className={label}>{`// ${name}`}</p>
        <h2 className={`mt-1 ${heading}`}>{title}</h2>
      </div>
      {children}
    </div>
  )
}
