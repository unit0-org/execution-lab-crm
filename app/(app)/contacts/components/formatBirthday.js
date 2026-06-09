import { months } from './months'

// { day, month, year } → "March 14" / "March 14, 1990" / null.
export function formatBirthday({ day, month, year } = {}) {
  if (!day || !month) return null

  const name = months[month - 1]
  const base = `${name} ${day}`

  if (!year) return base

  return `${base}, ${year}`
}
