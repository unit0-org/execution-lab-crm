'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditNameForm } from './EditNameForm'

export function EditNameModal({ contact, open, onClose, onChanged }) {
  const saved = () => {
    onChanged()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditNameForm contact={contact} onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
