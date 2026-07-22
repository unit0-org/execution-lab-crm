'use client'

import { Modal } from '@/ui/organisms/Modal'
import { AddCompanyContactForm } from './AddCompanyContactForm'

export function AddCompanyContactModal(props) {
  const { open, companyId, onSaved, onClose } = props

  return (
    <Modal open={open} onClose={onClose}>
      <AddCompanyContactForm companyId={companyId} onSaved={onSaved}
        onCancel={onClose} />
    </Modal>
  )
}
