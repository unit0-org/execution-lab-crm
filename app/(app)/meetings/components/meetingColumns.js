const title = (m) => m.title || ''

const attendees = (m) => (m.attendees || []).length

const isOnline = (m) => (m.online ? 1 : 0)

export const columns = [
  { label: 'Meeting', key: 'title', sortBy: title },
  { label: 'Type', key: 'type', sortBy: isOnline },
  { label: 'Date', key: 'date', sortBy: (m) => m.starts_at },
  { label: 'Attendees', key: 'attendees', sortBy: attendees }
]
