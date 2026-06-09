import { birthdayString } from './birthdayString'

// The Google person's birthday as a comparable readable string.
export function googleBirthday(person) {
  const b = person.birthday

  if (!b) return ''

  return birthdayString(b.day, b.month, b.year)
}
