const name = (contact) =>
  [contact.first_name, contact.last_name].filter(Boolean).join(' ')

const emails = (contact) =>
  (contact.contact_email || []).map((row) => row.email).join(', ')

// How one candidate reads in the merge review: name — emails.
export const survivorLabel = (contact) =>
  [name(contact), emails(contact)].filter(Boolean).join(' — ') ||
    'Unnamed contact'
