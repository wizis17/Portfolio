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
    `underline-offset-[7px] decoration-coral decoration-wavy decoration-[1.5px] hover:underline ${
      active === id ? 'underline' : ''
    }`

  return (
    <nav className="sticky top-0 z-20 bg-bg/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-1.5 text-xl font-bold">
          {profile.name}
          <span className="size-2 rounded-full bg-coral" />
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden gap-[clamp(14px,3vw,34px)] text-[.92rem] font-semibold md:flex">
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
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-card transition-transform hover:-rotate-12"
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
        <ul className="wrap flex flex-col gap-1 border-t border-line pb-4 pt-2 font-semibold md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-2 ${linkClass(l.id)}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
