// One suggestion per set of contacts. Detection runs a rule at a time, so
// the same people surface once per rule that matched them — a pair sharing
// both a name and a phone came back twice, and merging one card left the
// other pointing at a deleted contact. Fold them by their (canonically
// ordered) contact ids, carrying every reason that matched.
export function combineGroupReasons(groups) {
  const byContacts = new Map()

  for (const group of groups) {
    const ids = sortedContactIds(group)
    const key = ids.join(':')
    const found = byContacts.get(key) || startGroup(ids)

    found.reasons.add(group.reason)
    byContacts.set(key, found)
  }

  return [...byContacts.values()].map(toGroup)
}

const sortedContactIds = (group) =>
  group.contacts.map((contact) => contact.id).sort()

const startGroup = (ids) => ({
  reasons: new Set(), contacts: ids.map((id) => ({ id }))
})

const toGroup = ({ reasons, contacts }) => ({
  reasons: [...reasons], contacts
})
