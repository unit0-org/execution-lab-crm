import { isBlank } from './isBlank'

const BIRTHDAY = ['birth_day', 'birth_month', 'birth_year']

// A birthday is a day and a month; the year is optional (Google often omits
// it), so it alone never counts as knowing someone's birthday.
const hasBirthday = (contact) =>
  !isBlank(contact.birth_day) && !isBlank(contact.birth_month)

// The birthday the winner should end up with. It moves as one unit — never a
// day from one contact paired with a year from another — and only fills a
// winner who has none.
export function birthdayBackfill(winner, losers) {
  if (hasBirthday(winner)) return {}

  const source = losers.find(hasBirthday)

  if (!source) return {}

  return Object.fromEntries(BIRTHDAY.map((field) => [field, source[field]]))
}
