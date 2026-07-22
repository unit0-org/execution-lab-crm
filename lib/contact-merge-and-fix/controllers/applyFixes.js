import { sequelize } from '@/lib/db/sequelize'
import { applyOneFix } from './applyOneFix'

// Apply the chosen fixes in ONE transaction — all succeed or none. Each
// value is re-derived server-side from the live row, never trusted from
// the client's payload.
export function applyFixes(targets) {
  return sequelize.transaction((t) =>
    Promise.all(targets.map((target) => applyOneFix(target, t)))
  )
}
