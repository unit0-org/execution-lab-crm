'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useFounderInvites } from '../hooks/useFounderInvites'
import { InvitesTable } from './InvitesTable'
import { NewInviteModal } from './NewInviteModal'

export function InvitationsPanel() {
  const { invites, reload } = useFounderInvites()
  const modal = useToggle()
  const onCreated = () => { reload(); modal.hide() }

  return (
    <Stack gap="md">
      <SectionHeader title="Invitations" addLabel="New invitation"
        onAdd={modal.show} />
      <InvitesTable invites={invites} onChanged={reload} />
      <NewInviteModal open={modal.open} onClose={modal.hide}
        onCreated={onCreated} />
    </Stack>
  )
}
