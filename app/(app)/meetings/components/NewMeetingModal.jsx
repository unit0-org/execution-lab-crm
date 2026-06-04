'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { NewMeetingForm } from './NewMeetingForm'

export function NewMeetingModal({ open, onClose, onCreated }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="md">
        <Heading level={3} gutter="none">New meeting</Heading>
        <NewMeetingForm onCreated={onCreated} onCancel={onClose} />
      </Stack>
    </Modal>
  )
}
