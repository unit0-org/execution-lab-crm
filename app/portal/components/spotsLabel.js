// Quiet seat-status line shown when there is no live open-seat count to
// surface — sold out or closed. Returns null while open seats remain (the
// count is handled by lowSeatsLabel). Pre-window cohorts are registerable
// now, so they get no "opens soon" line.
export function spotsLabel(card) {
  if (card.spotsLeft <= 0) return 'Sold out'

  if (card.phase === 'closed') return 'Registration closed'

  return null
}
