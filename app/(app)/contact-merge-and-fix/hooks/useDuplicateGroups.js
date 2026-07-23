'use client'

import { useState } from 'react'
import { groupKey } from './groupKey'

// Holds the duplicate groups client-side so a merged group disappears from
// the surface at once (the required on-screen feedback).
export function useDuplicateGroups(initial) {
  const [list, setList] = useState(initial)

  const remove = (key) =>
    setList((prev) => prev.filter((group) => groupKey(group) !== key))

  return { list, remove }
}
