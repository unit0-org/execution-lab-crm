'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditTaskForm } from './EditTaskForm'

export function EditTaskModal({ open, task, onSaved, onClose }) {
  const saved = () => {
    onSaved()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditTaskForm task={task} onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
