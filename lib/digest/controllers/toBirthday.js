const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// A birthday row: whose it is and the calendar day it falls on.
export function toBirthday(row) {
  return {
    id: row.id,
    name: row.full_name || 'Unknown',
    date: `${MONTHS[row.birth_month - 1]} ${row.birth_day}`
  }
}
