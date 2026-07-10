// The upcoming-birthdays section view: whose birthday and the day it falls.
export function birthdayView(birthdays) {
  return {
    title: 'Upcoming birthdays',
    emptyText: 'No birthdays in the next 7 days.',
    rows: birthdays.map((b) => ({ primary: b.name, secondary: b.date }))
  }
}
