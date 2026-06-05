const emailText = (c) =>
  (c.contact_email || []).map((e) => e.email).join(' ')

const haystack = (c) =>
  `${c.first_name || ''} ${c.last_name || ''} ${emailText(c)}`.toLowerCase()

// Whether a contact matches the search query (by name or email).
export function matchesQuery(contact, query) {
  const q = query.trim().toLowerCase()

  if (!q) return true

  return haystack(contact).includes(q)
}
