// A loud scarcity label when only a few open seats remain (1–3); null
// when seats are plentiful or registration is not open.
export function lowSeatsLabel(card) {
  if (card.phase === 'waitlist' || card.phase === 'closed') return null

  if (card.spotsLeft <= 0 || card.spotsLeft > 3) return null

  const plural = card.spotsLeft === 1 ? '' : 's'

  return `Only ${card.spotsLeft} spot${plural} left`
}
