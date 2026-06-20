'use client'

import { useState } from 'react'

const withToggled = (set, id) => {
  const next = new Set(set)

  if (next.has(id)) next.delete(id)
  else next.add(id)

  return next
}

export function useMeetingSelection(meetings) {
  const [ids, setIds] = useState(() => new Set())
  const allSelected = meetings.length > 0 && ids.size === meetings.length

  const toggleAll = () =>
    setIds(allSelected ? new Set() : new Set(meetings.map((m) => m.id)))

  return {
    ids, allSelected, toggleAll,
    toggle: (id) => setIds((prev) => withToggled(prev, id)),
    clear: () => setIds(new Set())
  }
}
