'use client'

import { useState } from 'react'

const withToggled = (set, id) => {
  const next = new Set(set)

  if (next.has(id)) next.delete(id)
  else next.add(id)

  return next
}

// Row multi-select over items keyed by `.id`: a Set of chosen ids plus
// select-all / clear. Shared by every selectable table.
export function useRowSelection(items) {
  const [ids, setIds] = useState(() => new Set())
  const allSelected = items.length > 0 && ids.size === items.length

  const toggleAll = () =>
    setIds(allSelected ? new Set() : new Set(items.map((i) => i.id)))

  return {
    ids, allSelected, toggleAll,
    toggle: (id) => setIds((prev) => withToggled(prev, id)),
    clear: () => setIds(new Set())
  }
}
