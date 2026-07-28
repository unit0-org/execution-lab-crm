'use client'

import { useState } from 'react'
import { groupKey } from './groupKey'

// Holds the duplicate groups client-side so a merged group disappears from
// the surface at once (the required on-screen feedback).
export function useDuplicateGroups(initial) {
  const [list, setList] = useState(initial)

  const remove = (key) =>
    setList((prev) => prev.filter((group) => groupKey(group) !== key))

  // After a batch, every group holding a contact that was folded away goes —
  // both the merged group itself and any *other* group that suggested the
  // same contact (one person can match on name here and on phone there),
  // which would otherwise sit there pointing at a deleted record.
  const withoutContacts = (ids) => {
    const gone = new Set(ids)
    const holdsGone = (group) =>
      group.contacts.some((contact) => gone.has(contact.id))

    setList((prev) => prev.filter((group) => !holdsGone(group)))
  }

  return { list, remove, withoutContacts }
}
