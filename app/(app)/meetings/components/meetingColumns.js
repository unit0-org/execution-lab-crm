const title = (m) => m.title || ''

const attendees = (m) => (m.attendees || []).length

export const columns = [
  { label: 'Meeting', key: 'title', sortBy: title },
  { label: 'Date', key: 'date', sortBy: (m) => m.starts_at },
  { label: 'Attendees', key: 'attendees', sortBy: attendees }
]
