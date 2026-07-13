'use client'

import { Modal } from '@/ui/organisms/Modal'
import { CommentForm } from './CommentForm'

export function AddCommentModal(props) {
  const { open, offerId, audience, onSaved, onClose } = props

  return (
    <Modal open={open} onClose={onClose}>
      <CommentForm offerId={offerId} audience={audience}
        onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
