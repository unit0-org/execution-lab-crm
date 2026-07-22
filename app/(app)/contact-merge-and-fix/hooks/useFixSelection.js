'use client'

import { useState } from 'react'
import { applyFixesAction } from '../actions/applyFixes'
import { flip, chosenTargets, remaining } from './fixSelection'

// Holds the fix list + which are checked; applying runs the checked fixes
// in one transaction, then drops them from the list.
export function useFixSelection(initial) {
  const [list, setList] = useState(initial)
  const [keys, setKeys] = useState(() => new Set())

  const toggle = (key) => setKeys((prev) => flip(prev, key))

  const apply = () =>
    applyFixesAction(chosenTargets(list, keys)).then(() => {
      setList(remaining(list, keys))
      setKeys(new Set())
    })

  return { list, selected: keys, toggle, apply }
}
