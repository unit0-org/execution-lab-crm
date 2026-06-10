'use client'

import { useState } from 'react'

// Modal state for the cohort create/edit form: tracks whether it's open
// and which cohort (if any) is being edited.
export function useCohortModal() {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const openCreate = () => { setEditing(null); setOpen(true) }
  const openEdit = (cohort) => { setEditing(cohort); setOpen(true) }
  const close = () => setOpen(false)

  return { open, editing, openCreate, openEdit, close }
}
