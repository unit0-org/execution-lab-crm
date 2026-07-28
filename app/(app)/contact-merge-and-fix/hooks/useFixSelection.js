'use client'

import { useState } from 'react'
import { applyFixesAction } from '../actions/applyFixes'
import { flip, chosenTargets, remaining } from './fixSelection'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'

// Holds the fix list + which are checked; applying runs the checked fixes
// in one transaction, reports while they run, then drops them from the list.
export function useFixSelection(initial) {
  const [list, setList] = useState(initial)
  const [keys, setKeys] = useState(() => new Set())

  const toggle = (key) => setKeys((prev) => flip(prev, key))

  const run = () =>
    applyFixesAction(chosenTargets(list, keys)).then(() => {
      setList(remaining(list, keys))
      setKeys(new Set())
    })

  const applying = useBusyRun(run)

  return {
    list, selected: keys, toggle,
    apply: applying.run, busy: applying.busy
  }
}
