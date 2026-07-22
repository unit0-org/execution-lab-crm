const nameOf = (l) =>
  [l.contact?.first_name, l.contact?.last_name].filter(Boolean).join(' ')

const roleOf = (l) => l.role || ''

export const companyContactColumns = [
  { label: 'Name', key: 'name', sortBy: nameOf },
  { label: 'Emails', key: 'emails' },
  { label: 'Role', key: 'role', sortBy: roleOf }
]
