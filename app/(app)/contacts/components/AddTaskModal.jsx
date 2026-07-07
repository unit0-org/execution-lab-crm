'use client'

import { Modal } from '@/ui/organisms/Modal'
import { TaskForm } from './TaskForm'

export function AddTaskModal({ open, contactId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <TaskForm contactId={contactId} heading="Add task"
        onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
