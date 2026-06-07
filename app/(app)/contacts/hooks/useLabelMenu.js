'use client'

import { useState } from 'react'

const norm = (s) => s.trim().toLowerCase()

// Search state for the label menu: name-filtered matches plus an inline
// "create" offered when the query names a label that doesn't exist yet.
export function useLabelMenu(options, onCreate) {
  const [query, setQuery] = useState('')
  const q = norm(query)
  const matches = options.filter((o) => norm(o.name).includes(q))
  const exists = options.some((o) => norm(o.name) === q)
  const create = () => { onCreate(query.trim()); setQuery('') }

  return { query, setQuery, matches, canCreate: !!q && !exists, create }
}
