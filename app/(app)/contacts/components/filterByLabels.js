const idsOf = (contact) => (contact.categories || []).map((c) => c.id)

// Keep contacts that carry every selected label (AND); no selection = all.
export function filterByLabels(contacts, selected) {
  if (selected.size === 0) return contacts

  const wanted = [...selected]

  return contacts.filter((contact) => {
    const has = new Set(idsOf(contact))

    return wanted.every((id) => has.has(id))
  })
}
