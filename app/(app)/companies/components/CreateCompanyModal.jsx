'use client'

import { Modal } from '@/ui/organisms/Modal'
import { CompanyForm } from './CompanyForm'
import { createCompanyAction } from '../actions/createCompany'

export function CreateCompanyModal({ open, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <CompanyForm action={createCompanyAction} title="New company"
        onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
