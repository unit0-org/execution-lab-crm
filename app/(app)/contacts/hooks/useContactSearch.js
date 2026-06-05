'use client'

import { useState } from 'react'
import { matchesQuery } from '../components/contactSearch'

// Filter the loaded contacts by a search query, updated as the user types.
export function useContactSearch(contacts) {
  const [query, setQuery] = useState('')
  const results = contacts.filter((c) => matchesQuery(c, query))

  return { query, setQuery, results }
}
