'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { MeetingMergeReview } from './MeetingMergeReview'

export function MeetingMergeModal({ meetings, onConfirm, onCancel }) {
  const list = meetings || []

  return (
    <TitledModal open={!!meetings} title="Merge meetings" onClose={onCancel}>
      <MeetingMergeReview meetings={list} onConfirm={onConfirm}
        onCancel={onCancel} />
    </TitledModal>
  )
}
