// The contacts in a group still worth suggesting: each keeps at least one
// partner it has not been dismissed against. The caller drops a group left
// with fewer than two survivors.
export function keepUndismissed(contacts, isDismissed) {
  return contacts.filter((contact) =>
    contacts.some((other) =>
      other.id !== contact.id && !isDismissed(contact.id, other.id)
    )
  )
}
