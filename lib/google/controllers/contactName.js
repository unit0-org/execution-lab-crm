// A contact's display name from first + last, or a placeholder.
export function contactName(contact) {
  const name = [contact?.first_name, contact?.last_name]
    .filter(Boolean)
    .join(' ')

  return name || 'Unnamed contact'
}
