'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { applyPlan, planSize, appliedPart, mergedAwayIds } from './applyPlan'
import { useRunPlan } from './useRunPlan'

// Applying opens one review of everything checked — no merge ever runs
// without a confirm — and a single confirm runs the lot, ticking each line
// off as it lands. What landed then leaves the surface; what a stopped run
// never reached stays listed and checked.
export function useApplySelected(groups, fixes, selection) {
  const review = useToggle()
  const plan = applyPlan(groups.list, fixes.list, selection)

  const settle = (landed) => {
    const applied = appliedPart(plan, landed)

    groups.withoutContacts(mergedAwayIds(applied))
    fixes.without(applied.fixes)
    selection.forget(landed)
    review.hide()
  }

  const run = useRunPlan(plan, settle)

  return {
    plan, progress: run.progress, count: planSize(plan), busy: run.busy,
    open: review.open, start: review.show, cancel: review.hide,
    confirm: run.confirm
  }
}
