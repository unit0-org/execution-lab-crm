// Human seat scarcity for a cohort card, by phase + seats remaining.
export function spotsLabel(card) {
  if (card.phase === 'waitlist') return 'Registration opens soon'

  if (card.phase === 'closed') return 'Registration closed'

  if (card.spotsLeft <= 0) return 'Sold out'

  if (card.spotsLeft <= 3) {
    const plural = card.spotsLeft === 1 ? '' : 's'

    return `Last ${card.spotsLeft} spot${plural}`
  }

  return `${card.spotsLeft} spots left`
}
