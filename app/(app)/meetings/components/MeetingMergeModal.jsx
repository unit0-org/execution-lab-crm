'use client'

import { Modal } from '@/ui/organisms/Modal'
import { MeetingMergeReview } from './MeetingMergeReview'

export function MeetingMergeModal({ meetings, onConfirm, onCancel }) {
  const list = meetings || []

  return (
    <Modal open={!!meetings} onClose={onCancel}>
      <MeetingMergeReview meetings={list} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Modal>
  )
}
