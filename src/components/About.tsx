import { ChartColumn, CodeXml, Database, Server } from 'lucide-react'
import { profile, services } from '../data'
import { SectionHead, kicker } from './SectionHead'

const serviceIcons = {
  web: CodeXml,
  backend: Database,
  devops: Server,
  data: ChartColumn,
}

export const card = 'rounded-2xl border border-line bg-card transition-colors duration-200 hover:border-accent'

export function About() {
  return (
    <section id="about" className="wrap pt-[clamp(80px,10vw,120px)]">
      <SectionHead name="About" title="About me" />
      <div className="mt-8 grid items-start gap-[clamp(24px,5vw,72px)] md:grid-cols-[1.4fr_1fr]">
        <p className="max-w-[34em] text-[1.05rem]">{profile.about}</p>
        <div>
          <p className={kicker}>Motto</p>
          <p className="mt-2 border-b border-accent pb-4 font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-medium tracking-[.14em]">
            「 {profile.motto.join(' ')} 」
          </p>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="skills" className="wrap pt-[clamp(64px,9vw,112px)]">
      <SectionHead name="Skills" title="What I do" />
      <div className="mt-8 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon]
          return (
            <article key={s.title} className={`flex flex-col p-6 ${card}`}>
              <div className="mb-5 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-btn text-btn-ink">
                  <Icon className="size-[22px]" />
                </span>
                <span className={kicker}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mb-2 text-[1.05rem] font-bold tracking-[.06em]">{s.title}</h3>
              <p className="text-[.9rem] text-muted">{s.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
