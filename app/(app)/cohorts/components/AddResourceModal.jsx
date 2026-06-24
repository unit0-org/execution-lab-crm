'use client'

import { Modal } from '@/ui/organisms/Modal'
import { ResourceForm } from './ResourceForm'

export function AddResourceModal(props) {
  const { open, folderId, cohortId, onSaved, onClose } = props

  return (
    <Modal open={open} onClose={onClose}>
      <ResourceForm folderId={folderId} cohortId={cohortId}
        onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
