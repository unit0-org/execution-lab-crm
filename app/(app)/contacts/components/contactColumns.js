const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) => c.contact_email?.[0]?.email || ''

// Sort by what the Name cell shows — the name, or the email when unnamed.
const displayName = (c) => fullName(c) || firstEmail(c)

export const columns = [
  { label: 'Name', key: 'name', sortBy: displayName },
  { label: 'Emails', key: 'emails', sortBy: firstEmail },
  { label: '' }
]
