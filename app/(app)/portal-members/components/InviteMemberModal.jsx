'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { InviteSelection } from './InviteSelection'
import { InviteActions } from './InviteActions'
import { useInviteMember } from '../hooks/useInviteMember'

// Search contacts, select several, then invite them all to the portal.
export function InviteMemberModal({ open, onClose, contacts }) {
  const invite = useInviteMember(contacts, onClose)

  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="md">
        <Heading level={3}>Invite members</Heading>
        <Autocomplete label="Contact" value={invite.query}
          onType={invite.onType} options={invite.options}
          onPick={invite.add} hint="Search contacts by name or email" />
        <InviteSelection picked={invite.picked} onRemove={invite.remove} />
        <InviteActions count={invite.picked.length} onCancel={onClose}
          onInvite={invite.submit} busy={invite.busy} />
      </Stack>
    </Modal>
  )
}
