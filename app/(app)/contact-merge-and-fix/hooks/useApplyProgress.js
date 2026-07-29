'use client'

import { useState } from 'react'

// Which lines of the running plan have landed. Thirty merges is a long
// wait, so the review ticks each line off as it lands instead of sitting on
// one spinner with nothing to read.
export function useApplyProgress() {
  const [done, setDone] = useState(() => new Set())

  return {
    count: done.size,
    isDone: (key) => done.has(key),
    mark: (keys) => setDone((prev) => new Set([...prev, ...keys])),
    reset: () => setDone(new Set())
  }
}
