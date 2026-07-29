'use client'

import { useState } from 'react'
import { flip } from './flip'

// The one selection across the whole surface — duplicate groups and fixes
// share it, so a single Apply can run everything that is checked.
export function useSelection() {
  const [keys, setKeys] = useState(() => new Set())

  // Only what applied is unchecked: a run that stopped early leaves the rest
  // selected, ready to try again.
  const forget = (gone) =>
    setKeys((prev) => new Set([...prev].filter((key) => !gone.has(key))))

  return {
    keys,
    size: keys.size,
    has: (key) => keys.has(key),
    toggle: (key) => setKeys((prev) => flip(prev, key)),
    forget
  }
}
