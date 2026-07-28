'use client'

import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'
import { useApplyProgress } from './useApplyProgress'
import { runOnce } from './runOnce'

// Runs a confirmed plan and says how far it has got: each line ticks off as
// it lands, so a batch that takes minutes never looks like a dead click.
export function useRunPlan(plan, settle) {
  const progress = useApplyProgress()

  const run = useBusyRun(() => {
    progress.reset()

    return runOnce(plan, progress.mark, settle)
  })

  return { progress, busy: run.busy, confirm: run.run }
}
