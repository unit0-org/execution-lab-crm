'use client'

import { Modal } from '@/ui/organisms/Modal'
import { NoteForm } from './NoteForm'

export function AddNoteModal({ open, contactId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <NoteForm contactId={contactId} heading="Add note"
        onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
