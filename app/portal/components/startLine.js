// "Starts Jun 22, 2026", or a TBD label for an undated cohort.
export function startLine(card, when) {
  if (!card.start_date) return 'Dates to be announced'

  return `Starts ${when.startLabel}`
}
