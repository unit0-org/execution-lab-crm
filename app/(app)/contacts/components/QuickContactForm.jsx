'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { QuickContactFields } from './QuickContactFields'

export function QuickContactForm({ quick }) {
  return (
    <Modal open={quick.modal.open} onClose={quick.modal.hide}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">New contact</Heading>
        <QuickContactFields onSubmit={quick.create} />
      </Stack>
    </Modal>
  )
}
