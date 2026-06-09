'use client'

import { Modal } from '@/ui/organisms/Modal'
import { AddNoteForm } from './AddNoteForm'

export function AddNoteModal({ open, contactId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <AddNoteForm contactId={contactId} onSaved={onSaved}
        onCancel={onClose} />
    </Modal>
  )
}
