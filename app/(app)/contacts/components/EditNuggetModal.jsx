'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditNuggetForm } from './EditNuggetForm'

export function EditNuggetModal({ open, nugget, onSaved, onClose }) {
  const saved = () => {
    onSaved()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditNuggetForm nugget={nugget} onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
