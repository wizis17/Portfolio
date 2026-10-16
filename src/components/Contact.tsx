import { useState } from 'react'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { profile } from '../data'
import { btn } from './Hero'
import { heading, label } from './SectionHead'
import { SocialIcon } from './SocialIcons'

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
      <div id="contact" className="mt-[clamp(72px,10vw,120px)] bg-soft">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-8 py-[clamp(40px,6vw,64px)]">
          <div className="border-l-[10px] border-accent pl-5">
            <p className={label}>{'// Contact'}</p>
            <h2 className={`mt-1 ${heading}`}>Have a system in mind?</h2>
            <p className="mt-2 text-[1.05rem] font-medium tracking-[.06em]">Let's build something useful together!</p>
          </div>

          <div className="flex flex-col items-start gap-3.5 sm:items-end">
            <a className={btn} href={`mailto:${profile.email}`}>
              Get in touch <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex cursor-pointer items-center gap-2 text-[.88rem] font-medium"
            >
              {profile.email}
              {copied ? <Check className="size-4 text-accent-ink" /> : <Copy className="size-4" />}
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email copied' : 'Copy email'}
              </span>
            </button>
            <div className="flex items-center gap-2.5 text-[.82rem] text-muted">
              Let's connect
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-[10px] bg-btn text-btn-ink transition-opacity hover:opacity-85 sm:size-9"
                >
                  <SocialIcon name={s.icon} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="px-4 pb-[max(28px,env(safe-area-inset-bottom))] pt-7 text-center text-[.78rem] tracking-[.12em] text-muted">
        © {profile.edition} {profile.name} · Made with care in {profile.location}
      </footer>
    </>
  )
}
