'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { CreateInvoiceForm } from './CreateInvoiceForm'

export function CreateInvoiceModal({ open, onClose, onCreated }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">New invoice</Heading>
        <CreateInvoiceForm onCreated={onCreated} />
      </Stack>
    </Modal>
  )
}
