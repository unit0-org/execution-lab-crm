'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditLinkedInForm } from './EditLinkedInForm'

export function EditLinkedInModal(props) {
  const { contactId, url, open, onClose, onChanged } = props

  const saved = () => {
    onChanged()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditLinkedInForm contactId={contactId} url={url}
        onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
