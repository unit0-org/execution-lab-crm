'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Combobox } from '@/ui/molecules/Combobox'
import { useInviteMember } from '../hooks/useInviteMember'

// Pick an existing contact and email them a portal invite.
export function InviteMemberModal({ open, onClose, contacts }) {
  const invite = useInviteMember(contacts, onClose)

  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="md">
        <Heading level={3}>Invite a member</Heading>
        <Combobox label="Contact" value={invite.query}
          onChange={invite.onChange} options={invite.options}
          onPick={invite.pick} hint="Search contacts by name or email" />
      </Stack>
    </Modal>
  )
}
