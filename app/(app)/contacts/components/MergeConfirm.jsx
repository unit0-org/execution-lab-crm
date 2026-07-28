'use client'

import { FormActions } from '@/ui/molecules/FormActions'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'

// A merge folds every table onto the survivor, so it can take a moment: the
// button spins until it finishes instead of sitting there looking ignored.
export function MergeConfirm({ winnerId, onConfirm, onCancel }) {
  const merge = useBusyRun(onConfirm)

  return (
    <FormActions label="Merge" busy={merge.busy} onCancel={onCancel}
      onConfirm={() => merge.run(winnerId)} />
  )
}
