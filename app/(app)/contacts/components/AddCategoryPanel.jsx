'use client'

import { AddCategoryForm } from './AddCategoryForm'

// The add-label form, revealed only when the heading "+" is toggled on.
export function AddCategoryPanel({ open, onAdd }) {
  if (!open) return null

  return <AddCategoryForm onAdd={onAdd} />
}
