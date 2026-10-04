import { useState } from 'react'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { profile } from '../data'
import { btn } from './Hero'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked — the address is still visible to select
    }
  }

  return (
    <>
      <div id="contact" className="relative isolate mt-[clamp(70px,9vw,110px)]">
        <span className="absolute inset-y-0 -left-[2%] right-0 -z-10 rounded-r-[30px] bg-sun-soft sm:right-[28%] sm:rounded-[0_60%_50%_0/0_70%_60%_0]" />
        <div className="wrap flex flex-wrap items-center justify-between gap-6 py-[34px]">
          <h2 className="font-soft font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-[1.15] text-brand">
            Have a system in mind?
            <br />
            <span className="text-ink">Let's build something useful together!</span>
          </h2>

          <div className="flex flex-col items-start gap-3.5 sm:items-end">
            <a className={`${btn} !bg-brand`} href={`mailto:${profile.email}`}>
              Get in touch <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex cursor-pointer items-center gap-2 text-[.88rem] font-semibold"
            >
              {profile.email}
              {copied ? <Check className="size-4 text-lime-deep" /> : <Copy className="size-4" />}
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email copied' : 'Copy email'}
              </span>
            </button>
            <div className="flex items-center gap-2.5 text-[.85rem] font-semibold">
              Let's connect
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-[34px] place-items-center rounded-full bg-btn text-[.72rem] font-bold text-btn-ink transition-transform hover:-translate-y-0.5"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="px-4 pb-[30px] pt-9 text-center text-[.82rem] text-muted">
        © {profile.edition} {profile.name} · Made with care in {profile.location}
      </footer>
    </>
  )
}
