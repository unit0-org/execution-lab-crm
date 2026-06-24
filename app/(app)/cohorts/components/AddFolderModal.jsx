'use client'

import { Modal } from '@/ui/organisms/Modal'
import { FolderForm } from './FolderForm'

export function AddFolderModal({ open, cohortId, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <FolderForm cohortId={cohortId} onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
