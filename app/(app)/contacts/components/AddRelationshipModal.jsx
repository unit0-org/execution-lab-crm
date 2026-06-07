'use client'

import { Modal } from '@/ui/organisms/Modal'
import { AddRelationshipForm } from './AddRelationshipForm'

export function AddRelationshipModal({ open, contactId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <AddRelationshipForm contactId={contactId} onSaved={onSaved}
        onCancel={onClose} />
    </Modal>
  )
}
