const pad = (n) => String(n).padStart(2, '0')

// A readable, comparable birthday: "1990-03-14" or "03-14" (no year),
// or '' when there's no day/month.
export function birthdayString(day, month, year) {
  if (!day || !month) return ''

  const monthDay = `${pad(month)}-${pad(day)}`

  if (!year) return monthDay

  return `${year}-${monthDay}`
}
