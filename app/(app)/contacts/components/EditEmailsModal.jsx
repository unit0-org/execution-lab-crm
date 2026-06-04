'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EmailEditor } from './EmailEditor'

export function EditEmailsModal(props) {
  const { contactId, emails, open, onClose, onChanged } = props

  return (
    <Modal open={open} onClose={onClose}>
      <EmailEditor contactId={contactId} emails={emails}
        onChanged={onChanged} />
    </Modal>
  )
}
