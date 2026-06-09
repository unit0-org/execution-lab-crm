const num = (value) => Number(value) || null

// Parse a stored birthday string into CRM birth_* columns. Accepts
// "YYYY-MM-DD", "MM-DD", or a yearless "--MM-DD" (empty leading parts).
export function parseBirthday(value) {
  const bits = String(value || '').split('-')
  const [day, month, year] = bits.reverse()

  return {
    birth_year: num(year),
    birth_month: num(month),
    birth_day: num(day)
  }
}
