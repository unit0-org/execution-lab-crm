'use client'

import { setContactCategoryAction } from '../actions/setContactCategory'

// Returns a function that assigns the contact to a category id (or null).
export function useAssignCategory(contactId, onChanged) {
  return (categoryId) =>
    setContactCategoryAction(contactId, categoryId).then(onChanged)
}
