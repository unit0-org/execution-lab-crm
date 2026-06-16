// First day of yearMonth ("2026-06") and of the month after it, as
// "YYYY-MM-DD" — a half-open [start, end) range for a DATEONLY column.
export function monthRange(yearMonth) {
  const [year, month] = yearMonth.split('-').map(Number)
  const start = `${yearMonth}-01`
  const nextMonth = month === 12 ? 1 : month + 1
  const nextYear = month === 12 ? year + 1 : year
  const pad = String(nextMonth).padStart(2, '0')

  return { start, end: `${nextYear}-${pad}-01` }
}
