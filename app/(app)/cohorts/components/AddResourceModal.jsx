'use client'

import { Modal } from '@/ui/organisms/Modal'
import { ResourceForm } from './ResourceForm'

export function AddResourceModal({ open, cohortId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <ResourceForm cohortId={cohortId} onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
