'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { MergeReview } from './MergeReview'

export function MergeModal({ contacts, onConfirm, onCancel }) {
  const list = contacts || []

  return (
    <TitledModal open={!!contacts} title="Merge contacts" onClose={onCancel}>
      <MergeReview contacts={list} onConfirm={onConfirm}
        onCancel={onCancel} />
    </TitledModal>
  )
}
