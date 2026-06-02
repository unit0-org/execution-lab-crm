'use client'

import { Modal } from '@/ui/organisms/Modal'
import { MergeReview } from './MergeReview'

export function MergeModal({ contacts, onConfirm, onCancel }) {
  const list = contacts || []

  return (
    <Modal open={!!contacts} onClose={onCancel}>
      <MergeReview contacts={list} onConfirm={onConfirm}
        onCancel={onCancel} />
    </Modal>
  )
}
