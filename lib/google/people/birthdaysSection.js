// The People API birthdays section for a CRM birthday, or undefined
// when there's no birthday to send.
export function birthdaysSection(birthday) {
  if (!birthday) return undefined

  const date = { day: birthday.day, month: birthday.month }

  if (birthday.year) date.year = birthday.year

  return [{ date }]
}
