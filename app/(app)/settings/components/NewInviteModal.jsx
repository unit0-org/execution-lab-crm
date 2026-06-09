'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { NewInviteForm } from './NewInviteForm'

export function NewInviteModal({ open, onClose, onCreated }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">New invitation</Heading>
        <Text tone="muted">They sign in with this email to found their
          own organization.</Text>
        <NewInviteForm onCreated={onCreated} />
      </Stack>
    </Modal>
  )
}
