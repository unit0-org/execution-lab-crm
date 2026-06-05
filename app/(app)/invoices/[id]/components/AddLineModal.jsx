'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AddLineForm } from './AddLineForm'

export function AddLineModal({ open, onClose, invoiceId, onAdded }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">Add line</Heading>
        <AddLineForm invoiceId={invoiceId} onAdded={onAdded} />
      </Stack>
    </Modal>
  )
}
