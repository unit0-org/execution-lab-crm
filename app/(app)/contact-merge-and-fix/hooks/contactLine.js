// One-line label for a contact in a duplicate group: name + first email.
export function contactLine(contact) {
  const name = [contact.first_name, contact.last_name]
    .filter(Boolean).join(' ')
  const email = contact.contact_email?.[0]?.email

  return [name, email].filter(Boolean).join(' · ')
}
