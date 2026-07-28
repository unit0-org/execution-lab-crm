'use client'

import { FormActions } from '@/ui/molecules/FormActions'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'

export function MeetingMergeConfirm({ winnerId, onConfirm, onCancel }) {
  const merge = useBusyRun(onConfirm)

  return (
    <FormActions label="Merge" busy={merge.busy} onCancel={onCancel}
      onConfirm={() => merge.run(winnerId)} />
  )
}
