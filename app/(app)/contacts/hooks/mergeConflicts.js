const birthday = (contact) =>
  [contact.birth_day, contact.birth_month, contact.birth_year]
    .filter(Boolean).join('/')

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '')

// The contact's own columns — the only thing a merge can drop. Every child
// table (emails, phones, notes, meetings…) moves to the survivor and a blank
// column is filled from a loser, so a column two contacts *disagree* on is
// all the winner choice actually decides.
const FIELDS = [
  { label: 'first name', read: (c) => c.first_name },
  { label: 'last name', read: (c) => c.last_name },
  { label: 'LinkedIn', read: (c) => c.linkedin_url, show: host },
  { label: 'photo', read: (c) => c.photo_url, show: () => 'a photo' },
  { label: 'birthday', read: birthday }
]

export function mergeConflicts(contacts) {
  return FIELDS.filter((field) => disagree(contacts, field.read))
}

const disagree = (contacts, read) =>
  new Set(contacts.map(read).filter(Boolean)).size > 1

// One contact's side of a conflict, e.g. "LinkedIn: linkedin.com/in/ada".
export function conflictValue(contact, field) {
  const value = field.read(contact)

  if (!value) return `no ${field.label}`

  return `${field.label}: ${(field.show || String)(value)}`
}
