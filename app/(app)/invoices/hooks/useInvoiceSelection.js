'use client'

import { useState } from 'react'

const withToggled = (set, id) => {
  const next = new Set(set)

  if (next.has(id)) next.delete(id)
  else next.add(id)

  return next
}

export function useInvoiceSelection(invoices) {
  const [ids, setIds] = useState(() => new Set())
  const allSelected = invoices.length > 0 && ids.size === invoices.length

  const toggleAll = () =>
    setIds(allSelected ? new Set() : new Set(invoices.map((i) => i.id)))

  return {
    ids, allSelected, toggleAll,
    toggle: (id) => setIds((prev) => withToggled(prev, id)),
    clear: () => setIds(new Set())
  }
}
