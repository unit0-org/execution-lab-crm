// The single resolver for how a contact is named across the app: full name,
// else their first email, else a placeholder. Used by the detail heading,
// list rows, the browser tab title, and attendee rows.
export function contactLabel(contact) {
  const name = [contact?.first_name, contact?.last_name]
    .filter(Boolean)
    .join(' ')

  return name || contact?.contact_email?.[0]?.email || 'Unnamed contact'
}
