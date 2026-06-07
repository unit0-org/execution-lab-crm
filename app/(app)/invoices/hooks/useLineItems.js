'use client'

import { useState } from 'react'

const EMPTY = { description: '', quantity: '1', unitAmount: '' }

export function useLineItems(initial) {
  const [lines, setLines] = useState(initial)

  const add = () => setLines((rows) => [...rows, { ...EMPTY }])
  const remove = (i) =>
    setLines((rows) => rows.filter((_, idx) => idx !== i))
  const update = (i, patch) =>
    setLines((rows) =>
      rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)))

  return { lines, add, remove, update }
}
