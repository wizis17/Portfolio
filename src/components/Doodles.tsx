// Hand-drawn decorations. All are aria-hidden and ignore pointer events.

type P = { className?: string }
const base = 'pointer-events-none absolute'

export const Burst = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 64 64" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M32 4v56M4 32h56M12 12l40 40M52 12L12 52" />
  </svg>
)

export const Star = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 0l2.5 7.5L20 10l-7.5 2.5L10 20l-2.5-7.5L0 10l7.5-2.5z" />
  </svg>
)

export const ArrowCurve = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 8c10-6 22-6 30 6" />
    <path d="M26 6l6 8-9 2" />
  </svg>
)

export const ArrowDown = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 36 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M30 4C10 6 4 20 14 34" />
    <path d="M8 28l6 7 7-5" />
  </svg>
)

export const Squiggle = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 44 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10 4c20 0 26 14 14 20s-18 14-2 20 22 8 8 22" />
  </svg>
)

export const Loop = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 20c4-14 18-18 22-8s10 6 14-2" />
  </svg>
)
