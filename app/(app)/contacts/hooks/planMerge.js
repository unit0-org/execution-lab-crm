const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const distinctNames = (contacts) =>
  [...new Set(contacts.map(fullName).filter(Boolean))]

// The contact ids to fold into the winner.
export const loserIds = (contacts, winnerId) =>
  contacts.filter((c) => c.id !== winnerId).map((c) => c.id)

// Auto-pick a survivor when the names don't conflict; a null winnerId
// means the user must choose (two or more distinct names).
export function planMerge(contacts) {
  const names = distinctNames(contacts)

  if (names.length > 1) return { winnerId: null }

  const named = contacts.find((c) => fullName(c))

  return { winnerId: (named || contacts[0]).id }
}
