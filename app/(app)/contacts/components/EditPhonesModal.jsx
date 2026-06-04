'use client'

import { Modal } from '@/ui/organisms/Modal'
import { PhoneEditor } from './PhoneEditor'

export function EditPhonesModal(props) {
  const { contactId, phones, open, onClose, onChanged } = props

  return (
    <Modal open={open} onClose={onClose}>
      <PhoneEditor contactId={contactId} phones={phones}
        onChanged={onChanged} />
    </Modal>
  )
}
