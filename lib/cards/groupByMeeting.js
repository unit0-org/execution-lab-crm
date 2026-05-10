// Group cards by meeting_id, preserving incoming order. Free-floating
// cards (no meeting) land in a single null-keyed group at the end.

const ORDER = { action_item: 0, fact: 1, new_contact: 2, follow_up: 3 }

const sortWithinGroup = (a, b) =>
  (ORDER[a.card_type] ?? 99) - (ORDER[b.card_type] ?? 99)

export function groupByMeeting(cards) {
  const groups = new Map()
  for (const c of cards) {
    const key = c.meeting_id || '__free'
    if (!groups.has(key)) groups.set(key, { meetingId: c.meeting_id, meeting: c.meetings, cards: [] })
    groups.get(key).cards.push(c)
  }
  for (const g of groups.values()) g.cards.sort(sortWithinGroup)

  return [...groups.values()]
}
