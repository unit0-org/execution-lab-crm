'use client'

import { useState } from 'react'
import { flip } from './flip'

// The one selection across the whole surface — duplicate groups and fixes
// share it, so a single Apply can run everything that is checked.
export function useSelection() {
  const [keys, setKeys] = useState(() => new Set())

  return {
    keys,
    size: keys.size,
    has: (key) => keys.has(key),
    toggle: (key) => setKeys((prev) => flip(prev, key)),
    clear: () => setKeys(new Set())
  }
}
