const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) => c.contact_email?.[0]?.email || ''

export const columns = [
  { label: 'Name', key: 'name', sortBy: fullName },
  { label: 'Emails', key: 'emails', sortBy: firstEmail },
  { label: '' }
]
