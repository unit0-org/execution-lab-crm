// Quiet seat-status line shown when there is no live open-seat count to
// surface — sold out, registration not open yet, or closed. Returns null
// while open seats remain (the count is handled by lowSeatsLabel).
export function spotsLabel(card) {
  if (card.spotsLeft <= 0) return 'Sold out'

  if (card.phase === 'waitlist') return 'Registration opens soon'

  if (card.phase === 'closed') return 'Registration closed'

  return null
}
