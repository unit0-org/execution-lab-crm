'use client'

import { Modal } from '@/ui/organisms/Modal'
import { EditBirthdayForm } from './EditBirthdayForm'

export function EditBirthdayModal(props) {
  const { contactId, day, month, year, open, onClose, onChanged } = props

  const saved = () => {
    onChanged()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <EditBirthdayForm contactId={contactId} day={day} month={month}
        year={year} onSaved={saved} onCancel={onClose} />
    </Modal>
  )
}
