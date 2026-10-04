import { ArrowUpRight, Code, Download, Globe, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'
import { Avatar } from './Avatar'
import { ArrowCurve, ArrowDown, Burst, Squiggle, Star } from './Doodles'

export const btn =
  'inline-flex items-center gap-2.5 rounded-[10px] bg-btn px-5 py-3 text-[.92rem] font-semibold text-btn-ink transition-transform hover:-translate-y-0.5 active:translate-y-0'

export function Hero() {
  const details = [
    { icon: MapPin, text: profile.location },
    { icon: Mail, text: profile.email },
    { icon: Globe, text: profile.site },
    { icon: Code, text: profile.github },
  ]

  return (
    <header
      id="top"
      className="wrap relative grid items-center gap-[clamp(24px,4vw,56px)] pb-10 pt-[clamp(28px,5vw,56px)] md:grid-cols-[1.1fr_1fr]"
    >
      <ArrowCurve className="left-[28%] top-[6%] hidden w-10 text-brand md:block" />
      <ArrowDown className="left-[2%] top-[58%] hidden w-9 text-ink md:block" />
      <Burst className="left-[46%] top-[58%] hidden w-16 text-sun md:block" />
      <Star className="left-[42%] top-[22%] hidden w-[18px] text-brand md:block" />
      <Burst className="right-0 top-[2%] hidden w-11 text-lime md:block" />
      <Squiggle className="-right-[1%] top-[66%] hidden w-11 text-coral md:block" />

      <div className="relative min-w-0">
        <span className="inline-block -rotate-8 rounded-[60%_40%_55%_45%/55%_50%_50%_45%] border-2 border-brand px-[18px] py-2.5 text-center text-[.95rem] font-bold leading-[1.1] text-brand">
          {profile.edition}
          <br />
          Edition
        </span>

        <h1 className="font-soft relative mt-3.5 font-display text-[clamp(5rem,15vw,10.5rem)] font-black leading-[.82] tracking-[-.03em] text-brand">
          <span className="block">Port</span>
          <span className="block pl-[.45em]">folio</span>
          <em className="absolute right-[4%] top-[46%] animate-pop whitespace-nowrap rounded-full bg-coral px-3.5 py-1.5 font-sans text-[clamp(.75rem,1.4vw,.95rem)] font-semibold not-italic tracking-normal text-white motion-reduce:-rotate-6 motion-reduce:animate-none">
            {profile.title}
          </em>
        </h1>

        <p className="mb-6 mt-7 max-w-[22em] text-[clamp(1.05rem,1.8vw,1.25rem)] font-medium">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-[22px]">
          <a className={btn} href="#contact">
            Let's work together <ArrowUpRight className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 text-[.92rem] font-semibold underline decoration-brand decoration-wavy underline-offset-8"
            href={profile.cvUrl}
          >
            Download CV <Download className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mb-28 mt-5 w-full max-w-[440px] md:my-0">
        <svg viewBox="0 0 56 56" aria-hidden="true" className="absolute -left-[4%] top-[6%] z-10 size-14 animate-wave motion-reduce:animate-none">
          <circle cx="28" cy="28" r="26" className="fill-lime" />
          <circle cx="20" cy="23" r="3" fill="#141414" />
          <circle cx="36" cy="23" r="3" fill="#141414" />
          <path d="M17 33c5 7 17 7 22 0" stroke="#141414" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>

        <div className="relative aspect-[400/440] overflow-hidden rounded-[44%_56%_40%_60%/44%_40%_60%_56%] bg-lav">
          <Avatar className="absolute inset-x-0 bottom-0 block h-auto w-full" />
        </div>

        <div className="absolute -bottom-[14%] left-0 z-10 w-[min(300px,82%)] -rotate-2 rounded-[18px] bg-card px-5 py-[18px] shadow-[0_14px_34px_-14px_rgba(30,40,90,.35)] transition-transform hover:rotate-0 sm:-left-[8%]">
          <h3 className="mb-2.5 flex items-baseline justify-between text-[1.15rem] font-bold">
            <b className="bg-[linear-gradient(transparent_62%,var(--sun)_62%_90%,transparent_90%)]">{profile.name}</b>
            <small className="text-[.78rem] font-semibold text-brand">{profile.role}</small>
          </h3>
          <ul className="text-[.86rem]">
            {details.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 py-[3px]">
                <Icon className="size-[15px] flex-none" />
                <span className="min-w-0 break-words">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
