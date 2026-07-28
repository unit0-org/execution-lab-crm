'use client'

import { useState } from 'react'
import { fixKey } from './fixKey'

// Holds the suggested fixes client-side, so applied ones leave the surface
// the moment they land. Which of them are checked lives in the surface-wide
// selection, not here — a fix and a duplicate group are picked together.
export function useFixList(initial) {
  const [list, setList] = useState(initial)

  const without = (gone) => {
    const keys = new Set(gone.map(fixKey))

    setList((prev) => prev.filter((fix) => !keys.has(fixKey(fix))))
  }

  return { list, without }
}
