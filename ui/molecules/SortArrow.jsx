const ARROWS = { asc: ' ↑', desc: ' ↓' }

export function SortArrow({ active, dir }) {
  if (!active) return null

  return <span>{ARROWS[dir]}</span>
}
