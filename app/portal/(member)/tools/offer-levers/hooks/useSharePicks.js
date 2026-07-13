'use client'

import { useState } from 'react'

// The share picker's staging state: the typed query and the people queued
// up to be shared with, in the order they were picked.
export function useSharePicks() {
  const [query, setQuery] = useState('')
  const [ids, setIds] = useState([])

  const pick = (option) => {
    setIds((cur) => [...cur, option.value])
    setQuery('')
  }

  const unpick = (id) => setIds((cur) => cur.filter((cid) => cid !== id))

  return {
    query, setQuery, ids, pick, unpick, clear: () => setIds([])
  }
}
