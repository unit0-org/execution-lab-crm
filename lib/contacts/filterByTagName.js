// Keep only contacts that have a tag whose name matches `tagName`.
// Empty tagName → return all contacts unchanged.
export function filterByTagName(contacts, contactTagMap, allLabels, tagName) {
  if (!tagName) return contacts
  const targetId = allLabels.find((l) => l.name === tagName)?.id
  if (!targetId) return []
  return contacts.filter((c) => (contactTagMap[c.id] || []).includes(targetId))
}
