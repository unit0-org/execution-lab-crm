'use client'

import { useState } from 'react'

// Track a click action while it runs, so its button can spin instead of
// looking dead on a slow operation (a merge, a send). `run` passes its
// arguments straight through and returns the action's promise for chaining.
export function useBusyRun(action) {
  const [busy, setBusy] = useState(false)

  const run = (...args) => {
    setBusy(true)

    return action(...args).finally(() => setBusy(false))
  }

  return { busy, run }
}
