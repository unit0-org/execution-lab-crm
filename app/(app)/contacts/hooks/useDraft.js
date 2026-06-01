'use client'

import { useState } from 'react'

export function useDraft(initial) {
  const start = initial ?? ''
  const [draft, setDraft] = useState(start)
  const change = (e) => setDraft(e.target.value)

  return { draft, dirty: draft !== start, change }
}
