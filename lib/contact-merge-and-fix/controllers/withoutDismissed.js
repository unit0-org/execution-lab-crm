import { pairKey } from '../pairKey'
import { keepUndismissed } from './keepUndismissed'

// Filter suggested groups against dismissed pairs, dropping any group left
// with fewer than two mergeable contacts.
export function withoutDismissed(groups, dismissed) {
  const isDismissed = (a, b) => dismissed.has(pairKey(a, b))

  const filtered = groups.map((group) => ({
    ...group, contacts: keepUndismissed(group.contacts, isDismissed)
  }))

  return filtered.filter((group) => group.contacts.length > 1)
}
