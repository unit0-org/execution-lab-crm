const CAP = 6

const toMember = (signal, names) => ({
  id: signal.contactId,
  name: names.get(signal.contactId)?.name || 'Unknown'
})

// One segment shaped for display: title, capped members, overflow count.
export function toSegment({ rule, all }, names) {
  const items = all.slice(0, CAP).map((s) => toMember(s, names))

  return {
    key: rule.key,
    title: rule.title,
    items,
    more: Math.max(0, all.length - items.length)
  }
}
