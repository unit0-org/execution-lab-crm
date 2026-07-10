'use client'

import { Modal } from '@/ui/organisms/Modal'
import { FileForm } from './FileForm'

export function AddFileModal({ open, onUpload, onSaved, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <FileForm onUpload={onUpload} onSaved={onSaved} onCancel={onClose} />
    </Modal>
  )
}
