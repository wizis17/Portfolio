import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data'

type Theme = 'light' | 'dark'

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const set = document.documentElement.dataset.theme
    if (set === 'light' || set === 'dark') return set
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable — the choice just won't persist
    }
    setTheme(next)
  }
  return { theme, toggle }
}

// Highlights the nav link for the section currently in view.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

const ids = navLinks.map((l) => l.id)

export function Nav() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  const linkClass = (id: string) =>
    `border-b-2 pb-1 transition-colors hover:text-ink ${
      active === id ? 'border-accent text-ink' : 'border-transparent text-muted'
    }`

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold uppercase tracking-[.22em]">
          <span className="h-5 w-1.5 bg-accent" />
          {profile.name}
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden gap-[clamp(14px,3vw,34px)] font-display text-[.78rem] font-bold uppercase tracking-[.18em] md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkClass(l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-card transition-colors hover:border-ink"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-card md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="wrap flex flex-col items-start gap-1 border-t border-line pb-4 pt-2 font-display text-[.82rem] font-bold uppercase tracking-[.18em] md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`mt-2 block ${linkClass(l.id)}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
