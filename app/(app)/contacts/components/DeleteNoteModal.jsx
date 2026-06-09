'use client'

import { Modal } from '@/ui/organisms/Modal'
import { ConfirmDeleteNote } from './ConfirmDeleteNote'

export function DeleteNoteModal({ open, note, onDeleted, onClose }) {
  const deleted = () => {
    onDeleted()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ConfirmDeleteNote note={note} onDeleted={deleted}
        onCancel={onClose} />
    </Modal>
  )
}
