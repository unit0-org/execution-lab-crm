'use client'

import { useState, useEffect } from 'react'
import { listMergeSuggestionsAction } from '../actions/listMergeSuggestions'

export function useMergeSuggestions() {
  const [items, setItems] = useState([])
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listMergeSuggestionsAction().then(setItems)
  }, [tick])

  return { items, reload: () => setTick((n) => n + 1) }
}
