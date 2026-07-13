const ARROWS = { asc: ' ↑', desc: ' ↓' }

/** Sort direction arrow, shown on the active column. */
export function SortArrow({ active, dir }) {
  if (!active) return null

  return <span>{ARROWS[dir]}</span>
}
