'use client'

import { setContactCategoriesAction } from '../actions/setContactCategories'

// The contact's current category ids + a toggle that adds/removes one
// and persists the new set, then refreshes the contact.
export function useContactCategories(contact, onChanged) {
  const ids = (contact.categories || []).map((c) => c.id)

  const toggle = (categoryId) => {
    const next = ids.includes(categoryId)
      ? ids.filter((id) => id !== categoryId)
      : [...ids, categoryId]

    setContactCategoriesAction(contact.id, next).then(onChanged)
  }

  return { ids, toggle }
}
