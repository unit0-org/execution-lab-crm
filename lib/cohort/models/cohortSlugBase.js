const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
]

// The base slug for a cohort start date: "2026-06-22" -> "2026-june".
export function cohortSlugBase(startDate) {
  const [year, month] = String(startDate).slice(0, 10).split('-')

  return `${year}-${MONTHS[Number(month) - 1]}`
}
