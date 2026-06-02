const title = (m) => m.title || ''

const attendees = (m) => Number(m.attendees) || 0

export const columns = [
  { label: 'Meeting', key: 'title', sortBy: title },
  { label: 'Date', key: 'date', sortBy: (m) => m.starts_at },
  { label: 'Attendees', key: 'attendees', sortBy: attendees }
]
