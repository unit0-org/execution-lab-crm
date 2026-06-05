'use client'

import { Modal } from '@/ui/organisms/Modal'
import { ConfirmDeleteNugget } from './ConfirmDeleteNugget'

export function DeleteNuggetModal({ open, nugget, onDeleted, onClose }) {
  const deleted = () => {
    onDeleted()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ConfirmDeleteNugget nugget={nugget} onDeleted={deleted}
        onCancel={onClose} />
    </Modal>
  )
}
