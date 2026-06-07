'use client'

import { useState } from 'react'

const withToggled = (set, id) => {
  const next = new Set(set)

  if (next.has(id)) next.delete(id)
  else next.add(id)

  return next
}

// The set of label ids the contacts list is narrowed to (client-side).
export function useLabelFilter() {
  const [ids, setIds] = useState(() => new Set())

  return {
    ids,
    toggle: (id) => setIds((prev) => withToggled(prev, id)),
    clear: () => setIds(new Set())
  }
}
