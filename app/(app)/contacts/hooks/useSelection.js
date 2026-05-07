'use client'

import { useState, useCallback } from 'react'

// Track a Set of selected ids with toggle / setMany / clear / has helpers.
export function useSelection() {
  const [ids, setIds] = useState(() => new Set())

  const toggle = useCallback((id) => setIds((prev) => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  }), [])

  const setMany  = useCallback((newIds) => setIds(new Set(newIds)), [])
  const clear    = useCallback(() => setIds(new Set()), [])
  const has      = useCallback((id) => ids.has(id), [ids])

  return { ids, count: ids.size, toggle, setMany, clear, has }
}
