'use client'

import { useState } from 'react'

const EMPTY = { contactId: null, name: '', email: '' }

// Holds the contact chosen for a logged note. Callers reset() on every
// exit so the next open starts blank.
export function useLogNote() {
  const [value, setValue] = useState(EMPTY)
  const reset = () => setValue(EMPTY)

  return { value, setValue, reset, contactId: value.contactId }
}
