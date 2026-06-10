'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Heading } from '@/ui/atoms/Heading'
import { CohortForm } from './CohortForm'

export function CohortFormModal({ open, onClose, cohort, onSaved }) {
  const title = cohort ? 'Edit cohort' : 'New cohort'

  return (
    <Modal open={open} onClose={onClose}>
      <Heading level={2}>{title}</Heading>
      <CohortForm cohort={cohort} onSaved={onSaved} />
    </Modal>
  )
}
