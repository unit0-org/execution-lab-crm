'use client'

import { Modal } from '@/ui/organisms/Modal'
import { CompanyForm } from './CompanyForm'
import { updateCompanyAction } from '../actions/updateCompany'

export function EditCompanyModal({ open, company, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <CompanyForm action={updateCompanyAction} title="Edit company"
        company={company} onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
