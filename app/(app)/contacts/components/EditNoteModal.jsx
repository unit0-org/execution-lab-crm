'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditNoteForm } from './EditNoteForm'

export function EditNoteModal({ open, note, onSaved, onClose }) {
  const saved = () => {
    onSaved()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditNoteForm note={note} onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
