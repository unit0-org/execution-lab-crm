'use client'

import { Modal } from '@/ui/organisms/Modal'
import { ConfirmDeleteTask } from './ConfirmDeleteTask'

export function DeleteTaskModal({ open, task, onDeleted, onClose }) {
  const deleted = () => {
    onDeleted()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ConfirmDeleteTask task={task} onDeleted={deleted}
        onCancel={onClose} />
    </Modal>
  )
}
