'use client'

import { saveDraft } from '../actions'

// Build the action that the Step 2 form passes to <Form action={...}>.
// Stuffs the controlled-input values into FormData before invoking the
// server action so server only sees a flat key=value bag.
export function useReviewSubmit({ contactId, type, notes, onSaved }) {
  return async (fd) => {
    fd.set('contact_id', contactId)
    fd.set('type', type)
    fd.set('notes', notes)
    await saveDraft(null, fd)
    onSaved()
  }
}
