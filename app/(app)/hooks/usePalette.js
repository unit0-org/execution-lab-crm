'use client'

import { useState } from 'react'
import { matchPeople } from './matchPeople'

// Palette query state plus the people filtered to the current query.
// Callers clear() on every exit so the next open starts empty.
export function usePalette(people) {
  const [query, setQuery] = useState('')
  const onType = (e) => setQuery(e.target.value)
  const clear = () => setQuery('')

  return { query, onType, clear, results: matchPeople(people, query) }
}
