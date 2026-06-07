'use client'

import { addCategoryToContactsAction } from '../actions/addCategoryToContacts'
import { removeCategoryFromContactsAction }
  from '../actions/removeCategoryFromContacts'

const hasLabel = (contact, id) =>
  (contact.categories || []).some((c) => c.id === id)

// Tri-state label status + toggle across chosen contacts (adds/removes all).
export function useBulkLabel(chosen, onChanged) {
  const stateOf = (id) => {
    const n = chosen.filter((c) => hasLabel(c, id)).length

    if (n === 0) return 'off'

    return n === chosen.length ? 'on' : 'mixed'
  }

  const toggle = (id) => {
    const ids = chosen.map((c) => c.id)
    const run = stateOf(id) === 'on'
      ? removeCategoryFromContactsAction
      : addCategoryToContactsAction

    run(ids, id).then(onChanged)
  }

  return { stateOf, toggle }
}
