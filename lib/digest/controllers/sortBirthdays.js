import { toBirthday } from './toBirthday'

const positionIn = (window, row) =>
  window.findIndex(
    (w) => w.month === row.birth_month && w.day === row.birth_day
  )

// Order birthday rows by how soon they fall within the window (soonest
// first), then shape each for display.
export function sortBirthdays(rows, window) {
  return [...rows]
    .sort((a, b) => positionIn(window, a) - positionIn(window, b))
    .map(toBirthday)
}
