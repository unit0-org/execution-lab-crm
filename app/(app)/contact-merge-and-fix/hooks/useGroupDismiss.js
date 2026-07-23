'use client'

import { dismissDuplicateGroupAction }
  from '../actions/dismissDuplicateGroup'
import { groupKey } from './groupKey'

// Mark a suggested group as "not duplicates": its card leaves the surface
// and the pairs stay dismissed on later visits.
export function useGroupDismiss(group, onDismissed) {
  const ids = group.contacts.map((contact) => contact.id)

  return () =>
    dismissDuplicateGroupAction(ids).then(() => onDismissed(groupKey(group)))
}
