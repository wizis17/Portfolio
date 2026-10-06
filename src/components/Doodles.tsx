// Small decorations. All are aria-hidden and ignore pointer events.

type P = { className?: string }
const base = 'pointer-events-none absolute'

export const Star = ({ className = '' }: P) => (
  <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 0l2.5 7.5L20 10l-7.5 2.5L10 20l-2.5-7.5L0 10l7.5-2.5z" />
  </svg>
)
