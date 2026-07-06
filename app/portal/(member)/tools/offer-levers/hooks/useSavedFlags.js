'use client'

import { useState, useRef, useEffect } from 'react'

const SHOW_MS = 1800

// Per-key "just saved" flags for the field checkmark. mark(key) turns one on
// and clears it after a moment; `ids` is the current { key: bool } map.
export function useSavedFlags() {
  const [ids, setIds] = useState({})
  const timers = useRef({})

  useEffect(() => () => {
    Object.values(timers.current).forEach(clearTimeout)
  }, [])

  const mark = (key) => {
    clearTimeout(timers.current[key])
    setIds((cur) => ({ ...cur, [key]: true }))
    timers.current[key] = setTimeout(
      () => setIds((cur) => ({ ...cur, [key]: false })), SHOW_MS
    )
  }

  return { ids, mark }
}
