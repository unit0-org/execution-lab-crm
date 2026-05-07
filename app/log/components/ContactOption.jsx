function pickEmail(emails = []) {
  return emails.find((e) => e.is_primary)?.email || emails[0]?.email || ''
}

function labelFor(contact) {
  const email = pickEmail(contact.contact_emails)
  if (!contact.display_name) return email || 'Unnamed contact'
  if (!email) return contact.display_name

  return `${contact.display_name} — ${email}`
}

export function ContactOption({ contact }) {
  return <option value={contact.id}>{labelFor(contact)}</option>
}
