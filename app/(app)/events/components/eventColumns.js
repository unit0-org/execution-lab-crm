const checkedIn = (e) => Number(e.checked_in)

export const columns = [
  { label: 'Event', key: 'title' },
  { label: 'Date', key: 'date' },
  { label: 'Type', key: 'type' },
  { label: 'Attended / Registered', key: 'checked_in', sortBy: checkedIn },
  { label: '' }
]
