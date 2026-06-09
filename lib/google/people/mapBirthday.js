// Birthday from a raw birthdays[0].date → { day, month, year|null },
// or null when day/month are missing (an incomplete birthday).
export function mapBirthday(birthdays) {
  const date = birthdays?.[0]?.date

  if (!date?.day || !date?.month) return null

  return { day: date.day, month: date.month, year: date.year || null }
}
