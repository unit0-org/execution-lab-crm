'use client'

import { useRef, useEffect } from 'react'

// Returns run(key, fn): calls fn after a short pause, one timer per key, so
// rapid edits to a field collapse into a single trailing call.
export function useDebouncer(ms = 600) {
  const timers = useRef({})

  useEffect(() => () => {
    Object.values(timers.current).forEach(clearTimeout)
  }, [])

  return (key, fn) => {
    clearTimeout(timers.current[key])
    timers.current[key] = setTimeout(fn, ms)
  }
}
