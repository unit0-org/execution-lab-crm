'use client'

import { removeContactAction } from '../actions/removeContact'

export function useDeleteContact(id, onDeleted) {
  return () => removeContactAction(id).then(onDeleted)
}
