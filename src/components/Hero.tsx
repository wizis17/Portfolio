import { ArrowUpRight, Code, Download, Globe, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'
import { Avatar } from './Avatar'
import { Star } from './Doodles'
import { kicker, label } from './SectionHead'

export const btn =
  'inline-flex items-center gap-2.5 rounded-full border-2 border-btn bg-btn px-6 py-2.5 font-display text-[.82rem] font-bold uppercase tracking-[.16em] text-btn-ink transition-opacity hover:opacity-85'

export const btnGhost =
  'inline-flex items-center gap-2.5 rounded-full border-2 border-btn px-6 py-2.5 font-display text-[.82rem] font-bold uppercase tracking-[.16em] text-ink transition-colors hover:bg-btn hover:text-btn-ink'

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
      className="wrap grid items-center gap-[clamp(36px,5vw,72px)] pb-6 pt-[clamp(32px,6vw,72px)] md:grid-cols-[1.1fr_1fr]"
    >
      <div className="min-w-0">
        <div className="border-l-[10px] border-accent pl-5">
          <p className={label}>{`// ${profile.title}`}</p>
          <h1 className="mt-1 font-display text-[clamp(2rem,9vw,3.75rem)] font-medium uppercase leading-[1.15] tracking-[.18em] md:text-[clamp(2.2rem,4.6vw,3.75rem)]">
            Portfolio
          </h1>
        </div>

        <p className={`mt-[clamp(28px,4vw,44px)] ${kicker}`}>
          {profile.name} · {profile.role}
        </p>
        <p className="mt-3 max-w-[24em] text-[clamp(1.15rem,2vw,1.45rem)] font-medium leading-[1.7] tracking-[.06em]">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a className={`${btn} max-sm:w-full max-sm:justify-center`} href="#contact">
            Let's work together <ArrowUpRight className="size-4" />
          </a>
          <a className={`${btnGhost} max-sm:w-full max-sm:justify-center`} href={profile.cvUrl} download="Tang_KavTheng_Software_Developer_Resume.pdf">
            Download CV <Download className="size-4" />
          </a>
        </div>

        <ul className="mt-9 grid gap-x-8 gap-y-2 border-t border-accent pt-5 text-[.88rem] text-muted sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
          {details.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2.5">
              <Icon className="size-[15px] flex-none text-ink" />
              <span className="min-w-0 break-words">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* on phones the profile photo leads; side by side from md up */}
      <div className="order-first mx-auto w-full max-w-[280px] md:order-none md:max-w-[460px]">
        <div className="mb-5 flex justify-end">
          <span className="inline-flex overflow-hidden rounded-full border-2 border-btn font-display text-[.78rem] font-bold uppercase tracking-[.2em]">
            <span className="bg-btn px-4 py-1 text-btn-ink">{profile.edition}</span>
            <span className="px-4 py-1">Edition</span>
          </span>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-full bg-soft">
            <Avatar className="size-full object-cover object-[50%_62%]" />
          </div>
          <Star className="-left-1 top-[14%] w-6 text-accent" />
          <Star className="left-[9%] top-[5%] w-3 text-accent" />
          <Star className="bottom-[9%] right-[3%] w-5 text-accent" />
        </div>

        <p className="mt-3 text-right text-[.75rem] tracking-[.16em] text-muted">
          {profile.name} — {profile.location}
        </p>
      </div>
    </header>
  )
}
