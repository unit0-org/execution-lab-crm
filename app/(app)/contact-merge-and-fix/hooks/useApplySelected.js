'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'
import { applyPlan, planSize, mergedAwayIds } from './applyPlan'
import { runPlan } from './runPlan'

// Applying opens one review of everything checked — no merge ever runs
// without a confirm — and a single confirm runs the lot, after which the
// applied rows leave the surface and the selection empties.
export function useApplySelected(groups, fixes, selection) {
  const review = useToggle()
  const plan = applyPlan(groups.list, fixes.list, selection)

  const finish = () => {
    groups.withoutContacts(mergedAwayIds(plan))
    fixes.without(plan.fixes)
    selection.clear()
    review.hide()
  }

  const apply = useBusyRun(() => runPlan(plan).then(finish))

  return {
    plan, count: planSize(plan), open: review.open, busy: apply.busy,
    start: review.show, cancel: review.hide, confirm: apply.run
  }
}
