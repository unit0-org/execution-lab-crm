'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AddMember } from './AddMember'

export function InviteModal({ open, onClose, organizationId, onInvited }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">Invite member</Heading>
        <AddMember organizationId={organizationId} onChanged={onInvited} />
      </Stack>
    </Modal>
  )
}
