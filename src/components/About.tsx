import { ArrowRight, ChartColumn, CodeXml, Database, Server } from 'lucide-react'
import { profile, services } from '../data'
import { Loop, Star } from './Doodles'

export const heading =
  'font-soft relative inline-block font-display text-[clamp(2.2rem,4.6vw,3.1rem)] font-bold leading-none text-brand'

const serviceIcons = {
  web: { Icon: CodeXml, chip: 'bg-lime text-[#141414]' },
  backend: { Icon: Database, chip: 'bg-lav text-ink' },
  devops: { Icon: Server, chip: 'bg-sun text-[#141414]' },
  data: { Icon: ChartColumn, chip: 'bg-coral text-white' },
}

export function About() {
  return (
    <section
      id="about"
      className="wrap relative grid items-center gap-[clamp(20px,4vw,56px)] pt-[clamp(80px,10vw,120px)] md:grid-cols-[auto_1fr_auto]"
    >
      <h2 className={heading}>
        <span className="block">About</span>
        <span className="block underline decoration-coral decoration-wavy decoration-2 underline-offset-[10px]">me!</span>
      </h2>
      <p className="max-w-[30em] text-[1.05rem]">{profile.about}</p>
      <div className="relative isolate -rotate-6 justify-self-start px-[34px] py-[22px] font-hand text-[2rem] leading-[1.05]">
        <span className="absolute inset-0 -z-10 rounded-[30%_70%_40%_60%/60%_30%_70%_40%] bg-lav opacity-85" />
        {profile.motto.map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </div>
      <Star className="right-[24%] top-[62%] hidden w-[26px] text-lime md:block" />
    </section>
  )
}

export function Services() {
  return (
    <section id="skills" className="wrap pt-[clamp(56px,8vw,96px)]">
      <h2 className={heading}>
        What I Do
        <Loop className="-right-12 top-1.5 hidden w-9 text-ink md:block" />
      </h2>
      <div className="mt-7 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const { Icon, chip } = serviceIcons[s.icon]
          return (
            <article
              key={s.title}
              className="group flex flex-col rounded-[18px] border border-line bg-card p-[22px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgba(30,40,90,.45)]"
            >
              <span className={`mb-4 grid size-[46px] place-items-center rounded-xl transition-transform group-hover:-rotate-6 ${chip}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="mb-2 text-[1.05rem] font-bold">{s.title}</h3>
              <p className="flex-1 text-[.9rem] text-muted">{s.text}</p>
              <ArrowRight aria-hidden="true" className="mt-3.5 size-[18px] self-end transition-transform group-hover:translate-x-1" />
            </article>
          )
        })}
      </div>
    </section>
  )
}
