export const NO_LABELS = { id: 'none', name: 'No labels', color: 'gray' }

const idsOf = (contact) => (contact.categories || []).map((c) => c.id)

// Keep contacts matching the selected labels (AND). The NO_LABELS sentinel
// keeps only unlabelled contacts. No selection = all.
export function filterByLabels(contacts, selected) {
  if (selected.size === 0) return contacts

  const wanted = [...selected].filter((id) => id !== NO_LABELS.id)
  const onlyUnlabelled = selected.has(NO_LABELS.id)

  return contacts.filter((contact) => {
    const has = new Set(idsOf(contact))

    if (onlyUnlabelled && has.size > 0) return false

    return wanted.every((id) => has.has(id))
  })
}
