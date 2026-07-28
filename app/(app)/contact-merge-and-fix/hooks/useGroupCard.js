'use client'

import { useGroupMerge } from './useGroupMerge'
import { useGroupDismiss } from './useGroupDismiss'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'
import { groupSelectionKey } from './selectionKeys'
import { isBatchMergeable } from './plannedWinnerId'

// Everything one duplicate card can do: merge the group through the review,
// dismiss it as not duplicates, or check it into the surface-wide batch.
export function useGroupCard(group, selection, onResolved) {
  const merge = useGroupMerge(group, onResolved)
  const dismiss = useBusyRun(useGroupDismiss(group, onResolved))
  const key = groupSelectionKey(group)

  return {
    merge,
    dismiss,
    mergeable: isBatchMergeable(group),
    selected: selection.has(key),
    select: () => selection.toggle(key)
  }
}
