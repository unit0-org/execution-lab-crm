'use client'

import { Modal } from '@/ui/organisms/Modal'
import { AddNuggetForm } from './AddNuggetForm'

export function AddNuggetModal({ open, contactId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <AddNuggetForm contactId={contactId} onSaved={onSaved}
        onCancel={onClose} />
    </Modal>
  )
}
