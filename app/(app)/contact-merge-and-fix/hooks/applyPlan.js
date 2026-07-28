import { loserIds } from '@/app/(app)/contacts/hooks/planMerge'
import { groupSelectionKey, fixSelectionKey } from './selectionKeys'
import { plannedWinnerId } from './plannedWinnerId'

const toMerge = (group) => {
  const winnerId = plannedWinnerId(group)

  return { group, winnerId, loserIds: loserIds(group.contacts, winnerId) }
}

// What the current selection is about to do, worked out once: the merges
// (each with its survivor already decided) and the fixes. The review modal
// reads it, then the same object runs it — so what you confirm is what runs.
export function applyPlan(groups, fixes, selection) {
  return {
    merges: groups.filter((group) => selection.has(groupSelectionKey(group)))
      .map(toMerge),
    fixes: fixes.filter((fix) => selection.has(fixSelectionKey(fix)))
  }
}

export const planSize = (plan) => plan.merges.length + plan.fixes.length

// The contacts a plan folds away — every id that stops existing once it runs.
export const mergedAwayIds = (plan) =>
  plan.merges.flatMap((merge) => merge.loserIds)
