'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { PortalMembersTable } from './PortalMembersTable'
import { InviteMemberModal } from './InviteMemberModal'

// Portal members list with an invite action by the heading.
export function PortalMembersView({ members, contacts }) {
  const invite = useToggle()

  return (
    <Stack gap="md">
      <SectionHeader title="Portal members" addLabel="Invite member"
        onAdd={invite.show} />
      <PortalMembersTable members={members} />
      <InviteMemberModal open={invite.open} onClose={invite.hide}
        contacts={contacts} />
    </Stack>
  )
}
